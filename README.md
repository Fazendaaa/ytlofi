# ytlofi
A Command Line Interface(CLI) that plays the most awesome YT song... [Chill Study Beats - lofi hip hop mix [2018]](https://youtu.be/-FlxM_0S2lA)

[![Chill Study Beats - lofi hip hop mix [2018]](https://img.youtube.com/vi/-FlxM_0S2lA/0.jpg)](https://youtu.be/-FlxM_0S2lA)
## About
This is a history of one guy who sleep deprived tried to making some awesome game changer application that will revolutionize how the music indutry works!..

obs: just joking around with you. I wanted to create a CLI app that is also a npm package, this came as one idea in _"what to do it."_
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
All the future tests are going to be implemented using [Jest](https://facebook.github.io/jest/).
## Breaking down
_"Wait for it..."_.
## Coding styles
Since I inted to making this a TypeScript project in the future, there will be a [TSLint](https://palantir.github.io/tslint/) explanation here.
# Deployment
Only Github by now.
# Build with
* [youtube-audio-stream](https://github.com/JamesKyburz/youtube-audio-stream) - Awesome library that does all of the heavy work.
# Contributing
Still working in how to make one available.
# Versoning
Curently using Node version - by the way, I've never used this thing before.
# TODO
* Rewrite the code in TypeScript;
* I think that all the paper work;
* Write the tests for it;
* Continuos Integration;
* Making it a ```yarn``` install guide.
# Authors
* Only [me](https://github.com/Fazendaaa) for now.
# Acknowledgments
* Thanks to [PurpleBooth](https://gist.github.com/PurpleBooth) and this great [Readme](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) template and hers [Contributing](https://gist.github.com/PurpleBooth/b24679402957c63ec426) template also;
* Also [this](https://medium.freecodecamp.org/writing-command-line-applications-in-nodejs-2cf8327eee2) freeCodeCamp blog at Medium helped me out when publishing this awesome project;
* And thanks to [this](https://javascriptplayground.com/node-command-line-tool/) blog helping out how to publish this project.
