# ytlofi
[![npm version](https://badge.fury.io/js/ytlofi.svg)](https://badge.fury.io/js/ytlofi)
[![Build Status](https://travis-ci.org/Fazendaaa/ytlofi.svg?branch=master)](https://travis-ci.org/Fazendaaa/ytlofi)
[![Coverage Status](https://coveralls.io/repos/github/Fazendaaa/ytlofi/badge.svg?branch=master)](https://coveralls.io/github/Fazendaaa/ytlofi?branch=master)
[![GitHub issues](https://img.shields.io/github/issues/Fazendaaa/ytlofi.svg?style=flat-square)](https://github.com/Fazendaaa/ytlofi/issues)
[![GitHub license](https://img.shields.io/github/license/Fazendaaa/ytlofi.svg?style=flat-square)](https://github.com/Fazendaaa/ytlofi/blob/master/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/Fazendaaa/ytlofi.svg?style=flat-square)](https://github.com/Fazendaaa/ytlofi/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Fazendaaa/ytlofi.svg?style=flat-square)](https://github.com/Fazendaaa/ytlofi/network)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/Fazendaaa/ytlofi.svg?style=flat-square)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2FFazendaaa%2Fytlofi)

A Command Line Interface(CLI) that plays the most awesome YT song... [Chill Study Beats - lofi hip hop mix [2018]](https://youtu.be/-FlxM_0S2lA)

[![Chill Study Beats - lofi hip hop mix [2018]](https://img.youtube.com/vi/-FlxM_0S2lA/0.jpg)](https://youtu.be/-FlxM_0S2lA)
## About
This is a history of one guy who sleep deprived tried to making some awesome game changer application that will revolutionize how the music indutry works!..

obs: just joking around with you. I wanted to create a CLI app that is also a npm package, this came as one idea in _"what to do it."_

[![](https://media.giphy.com/media/npCGl3hwSTOESwaveL/giphy.gif)](https://www.npmjs.com/package/ytlofi)
## Prerequisites
Since I've made all of it in a Linux enviroment I just know how to do it in it. Mac and Windows users must seek help for each particularity of attempting to do on those enviroments.

Install [npm](https://www.npmjs.com/) and [Node.js](https://nodejs.org/en/) into your machine, since Linux has many package managers, each one with it's particularity settup you must seek how to do it.

### Disclaimer
Try to install Node through [nvm](https://github.com/creationix/nvm), I had myself a problem when installing **ytlofi** through ```npm install -g ytlofi``` with my previous settup were Node was installed through ```pacman/yaourt``` -- I don't remeber quit as well wich one was it.

That is a know "issue" because in some packages, the ones that compile code in C/C++ or other languages, doesn't work quite as well in ```sudo``` mode.
## Installing
Most of Linux:
```bash
npm install -g ytlofi
```
Mac and some Linux:
```bash
sudo npm install -g ytlofi
```
# Running
Simple as:
```bash
ytlofi
```
If you ran through some issues when running **ytlofi** after installing it, try to read [Disclaimer](https://github.com/Fazendaaa/ytlofi#disclaimer) section.
# Running tests
Using [Jest](https://facebook.github.io/jest/) to run all of the testing. This project is some kind of "unique". [Circle CI](http://circleci.com/) wasn't building the test and giving me no useful output about what was going down, then I've changend to [Travis CI](http://travis-ci.org/) then the things started to get intresting. Easy to read docs and a active community I've found out that the missing part to run CI was to integrate the following pice of code in [```.travis.yml```](https://github.com/Fazendaaa/ytlofi/blob/master/.travis.yml):
```yml
before_install:
  - sudo apt-get -qq update
  - sudo apt-get install libasound2-dev
```
That ensures the dependecy need it to install the [Spekear](https://www.npmjs.com/package/speaker) package and not breaking it during ```npm install```.
## Breaking it down
To run yourself the tests you need to download this repository, open a terminal in a project folder then:
```bash
git clone https://github.com/Fazendaaa/ytlofi
```
The ```git``` command should result in this:
```bash
Cloning into 'ytlofi'...
remote: Counting objects: 124, done.
remote: Compressing objects: 100% (89/89), done.
remote: Total 124 (delta 52), reused 95 (delta 29), pack-reused 0
Receiving objects: 100% (124/124), 91.21 KiB | 555.00 KiB/s, done.
Resolving deltas: 100% (52/52), done.
```
Then navigate to the **ytlofi** folder and run the tests:
```bash
npm test
```
Something like this should be expected:
```bash
 PASS  test/utils.test.ts (8.964s)
  Testing the only function that this program has.
    ✓ Reading banner. (2ms)

----------|----------|----------|----------|----------|-------------------|
File      |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------|----------|----------|----------|----------|-------------------|
All files |     62.5 |        0 |       50 |     62.5 |                   |
 utils.ts |     62.5 |        0 |       50 |     62.5 |          10,11,13 |
----------|----------|----------|----------|----------|-------------------|
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        13.447s
Ran all test suites.
```
## Coding styles
This project is made using [TypeScript]()(TS) and [TSLint](https://palantir.github.io/tslint/), since there're a lot of TS availabe from the one used inside of [Google](https://github.com/google/ts-style) to the one used in [Airbnb](https://www.npmjs.com/package/tslint-config-airbnb), I myself use one that I've and still thourgh some progress tweaking things a lit bit, you can check it ou in the [```tslint.json```](https://github.com/Fazendaaa/ytlofi/blob/master/tslint.json) file.
# Deployment
Github + Travis CI.
# Build with
* [youtube-audio-stream](https://github.com/JamesKyburz/youtube-audio-stream) - Awesome library that does all of the heavy work.
# Contributing
Still working to make one available.
# Versoning
Curently using Node version - by the way, I've never used this thing before.
# TODO
* Fix all unofficial typings errors;
* Adding watching video through terminal option;
* Releasing a fixed integration with the real Live stream when possible.
# Authors
* Only [me](https://github.com/Fazendaaa) for now.
# Acknowledgments
* Thanks to [PurpleBooth](https://gist.github.com/PurpleBooth) and this great [Readme](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) template and hers [Contributing](https://gist.github.com/PurpleBooth/b24679402957c63ec426) template also;
* Also [this](https://medium.freecodecamp.org/writing-command-line-applications-in-nodejs-2cf8327eee2) freeCodeCamp blog at Medium helped me out when publishing this awesome project;
* And thanks to [this](https://javascriptplayground.com/node-command-line-tool/) blog helping out how to publish this project;
* Savior [tutorial](https://github.com/dwyl/learn-travis) in how to use Travis CI.
* This [tutorial](https://strongloop.com/strongblog/npm-modules-travis-coveralls/) help me out in setting [Coverall](http://coveralls.io/) badge, showed me that a simple entry in ```.travis.yml``` does the job.
