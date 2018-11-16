import { app, BrowserWindow, App } from 'electron';
import { IBootstrapper, BootstrapperProperties } from './IBootstrapper';

export abstract class BaseBootstrapper implements IBootstrapper {
    private mainWindow: BrowserWindow;
    private properties = new Map<string, any>();
    // private logger = new ConsoleLogger(''); 

    get MainWindow(): BrowserWindow {
        return this.mainWindow;
    }
    get Properties(): Map<string, any> {
        return this.properties;
    }
    get Application(): App {
        return app;
    }

    ConfigureEnvironment(): void {

    }
    CreateMainWindow(): BrowserWindow {
        let options = this.GetProperty(BootstrapperProperties.MainWindowOptions) || {};
        let window = new BrowserWindow(options);

        let loadOption = this.GetProperty(BootstrapperProperties.MainWindowLoadOptions) || {};
        let url = this.GetProperty(BootstrapperProperties.MainWindowUrl) || '';
        window.loadURL( url, loadOption);

        return window;
    }
    LoadModules(): void {

    }
    Run(): void {
        this.ConfigureEnvironment();

        this.mainWindow = this.CreateMainWindow();

        let isDebug = this.GetProperty(BootstrapperProperties.IsDebugMode) || false;
        if(isDebug){
            this.mainWindow.webContents.openDevTools();
        }

        this.LoadModules();
    }

    GetProperty(name: string): any {
        if (this.properties.has(name)) {
            return this.properties.get(name);
        } else {
            return null;
        }
    }
    SetProperty(name: string, value: any) {
        return this.properties.set(name, value);
    }
}