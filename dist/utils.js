'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
exports.readBanner = new Promise((resolve, reject) => {
    const banner = path_1.join(__dirname, '../banner.txt');
    fs_1.readFile(banner, 'utf8', (err, data) => {
        if (err) {
            reject(err);
        }
        else {
            resolve(data);
        }
    });
});
//# sourceMappingURL=utils.js.map