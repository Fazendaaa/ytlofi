#!/usr/bin/env node
'use strict';

/**
 * Since commander has an official typing and it's not declared as module, no import type it's allowed.
 * Import doesn't work for Speaker, says it that is not a Constructor.
 * Import doesn't work for streamify, says it that is not a function.
 */
import { Decoder } from 'lame';
import { join } from 'path';
import { readBanner } from './utils';
const program = require('commander');
const Speaker = require('speaker');
const streamify = require('youtube-audio-stream');

const version: string = join(__dirname, '../package.json');

function run(this: void): void {
    readBanner.then((data: string) => {
        const url: string = 'https://youtube.com/watch?v=jfKfPfyJRdk';

        streamify(url).pipe(Decoder()).pipe(new Speaker());
        console.log(data);
        console.log('\n\t\t\t\t\t' + url + '\n\n\t\t\t\t      Just press Ctrl + C to kill this process...');
    }).catch((err: Error) => {
        console.error(err);
    });
}

/**
 * Since  the  action  property doesn't work quite as well with arrow-functions, it won't be used. This is probably a TS
 * compile configuration or even a commander restrition.
 */
program
    .description('Just the most awesome program that I\'ve ever made')
    .version(version)
    .action(run());
