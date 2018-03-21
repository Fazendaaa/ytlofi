'use strict';

import { readFile } from 'fs';
import { join } from 'path';

export const readBanner: Promise<string> = new Promise((resolve: (data: string) => void, reject: (err: Error) => void) => {
    const banner: string = join(__dirname, '../banner.txt');

    readFile(banner, 'utf8', (err: Error, data: string) => {
        if (err) {
            reject(err);
        } else {
            resolve(data);
        }
    });
});
