import * as os from 'os';
import * as glob from 'glob';
import * as path from 'path';

export function LoadModules(folder: string, extension = 'js') {
    try {
        let dir = path.join(folder, `*.${extension}`);
        let files = glob.sync(dir);
        files.forEach(function (file) {
            require(file);
        });
    } catch (error) {
        console.log(error);
    }
}