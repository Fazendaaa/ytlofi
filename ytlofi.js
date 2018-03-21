#!/usr/bin/env node
'use strict';

const program = require('commander');
const stream = require('youtube-audio-stream');
const decoder = require('lame').Decoder;
const speaker = require('speaker');
const fs = require('fs');

const url = 'http://youtube.com/watch?v=-FlxM_0S2lA';

const run = () => {
    fs.readFile('./banner.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            stream(url).pipe(decoder()).pipe(new speaker());
            console.log(data);
            console.log('\t\t\t\t\t' + url + '\n\n\n\t\t\t\t      Just press Ctrl + C to kill this process...');
        }
    });
};

program
    .description('Just the most awesome program that I\'ve ever made')
    .action(run());
