import { BrowserWindow } from 'electron';

export function getMainWindow(): BrowserWindow {
    return BrowserWindow.getAllWindows()[0];
}