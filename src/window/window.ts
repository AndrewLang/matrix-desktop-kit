
import { screen, BrowserWindow } from 'electron';
import { Rect } from '../common/index';

/**
 * Ensure bounds is visible on all displays
 * @param bounds bounds of given window
 */
export function EnsureBoundsVisible(bounds: Rect): Rect {
    let displays = screen.getAllDisplays();

    let x = 0, y = 0, r = 0, b = 0;
    for (let display of displays) {
        if (display.bounds.x < x) {
            x = display.bounds.x;
        }
        if (display.bounds.y < y) {
            y = display.bounds.y;
        }
        if (display.bounds.x + display.bounds.width > r) {
            r = display.bounds.x + display.bounds.width;
        }
        if (display.bounds.y + display.bounds.height > b) {
            b = display.bounds.y + display.bounds.height;
        }
    }

    let primaryDisplay = screen.getPrimaryDisplay();

    if (bounds.x < x || bounds.x > r) {
        bounds.x = Math.round((primaryDisplay.bounds.width - bounds.width) / 2);
    }
    if (bounds.y < y || bounds.y > b) {
        bounds.y = Math.round((primaryDisplay.bounds.height - bounds.height) / 2);
    }

    return bounds;
}
/**
 * Ensure given window is vislbe on displays
 * @param window 
 */
export function EnsureWindowVisible(window: BrowserWindow) {
    let bounds = EnsureBoundsVisible(window.getBounds());

    window.setBounds(bounds);
}