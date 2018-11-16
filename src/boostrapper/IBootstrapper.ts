import {  BrowserWindow, App } from 'electron';

export interface IBootstrapper {
    readonly MainWindow: BrowserWindow;
    readonly Properties: Map<string, any>;
    readonly Application: App;

    ConfigureEnvironment(): void;
    CreateMainWindow(): BrowserWindow;
    LoadModules(): void;
    Run(): void;
}

export class BootstrapperProperties {
    static MainWindowOptions = 'MainWindowOptions';
    static MainWindowUrl = 'MainWindowUrl';
    static MainWindowLoadOptions = 'MainWindowLoadOptions';
    static IsDebugMode = 'IsDebugMode';
    static RootPath = 'RootPath';
    static PluginsPath = 'PluginsPath';
}