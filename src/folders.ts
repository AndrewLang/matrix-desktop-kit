import { app, shell } from 'electron';

export class Folders {
    static GetUserDataFolder(): string {
        return app.getPath('userData');
    }
    static GetAppDataFolder(): string {
        return app.getPath('appData');
    }
    static GetMyDocumentFolder(): string {
        return app.getPath('documents');
    }
    static GetPictureFolder(): string {
        return app.getPath('pictures');
    }
    /** Get current executable file */
    static GetCurrentFolder(): string {
        return app.getPath('exe');
    }
    /** Get temporary folder */
    static GetTempFolder(): string {
        return app.getPath('temp');
    }
    static GetAppName(): string {
        return app.getName();
    }
    static ShowItemInFolder(value: string): void {        
        shell.showItemInFolder(value);
    }
}