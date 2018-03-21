'use strict';

import {readFile } from 'fs';
import { } from 'jest';
import { join } from 'path';
import { readBanner } from '../src/utils';

describe('Testing the only function that this program has.', () => {
    const banner: string = join(__dirname, '../banner.txt');

    test('Reading banner.', () => {
        readFile(banner, 'utf8', (err: Error, data: string) => {
            if (err) {
                console.error(err);
            } else {
                expect(readBanner).resolves.toEqual(data);
            }
        });
    });
});
