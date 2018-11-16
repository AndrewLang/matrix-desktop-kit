import { shell } from 'electron';

export class Files {
     /**
     * Open  a file system default program
     * @param path file path
     */
    static OpenExternal(path: string): void {
        shell.openExternal(path);
    }
    /**
     * Show given file in a folder
     * @param path file path
     */
    static ShowItemInFolder(path: string): void {
        shell.showItemInFolder(path);
    }
}