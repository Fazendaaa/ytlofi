#!/usr/bin/env node
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const lame_1 = require("lame");
const path_1 = require("path");
const utils_1 = require("./utils");
const program = require('commander');
const Speaker = require('speaker');
const streamify = require('youtube-audio-stream');
const version = path_1.join(__dirname, '../package.json');
function run() {
    utils_1.readBanner.then((data) => {
        const url = 'https://youtube.com/watch?v=-FlxM_0S2lA';
        streamify(url).pipe(lame_1.Decoder()).pipe(new Speaker());
        console.log(data);
        console.log('\n\t\t\t\t\t' + url + '\n\n\t\t\t\t      Just press Ctrl + C to kill this process...');
    }).catch((err) => {
        console.error(err);
    });
}
program
    .description('Just the most awesome program that I\'ve ever made')
    .version(version)
    .action(run());
//# sourceMappingURL=ytlofi.js.map