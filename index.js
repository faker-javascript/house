import path from 'node:path';
import fs from 'node:fs';
import {loadJsonFileSync} from 'load-json-file';

class House {
    furnitures = {};
    rooms = {};
    defaultLocale = 'en_US';
    options = {};

    constructor(options) {
        this.options = options || {};
        const furnitureFilePath = `./locales/${this.options.locale || this.defaultLocale}/furniture.json`;
        const roomFilePath = `./locales/${this.options.locale || this.defaultLocale}/room.json`;
        this.furnitures = fs.existsSync(path.resolve(furnitureFilePath)) ? loadJsonFileSync(furnitureFilePath) : loadJsonFileSync(path.resolve('node_modules/@fakerjs/house/', furnitureFilePath));
        this.rooms = fs.existsSync(path.resolve(roomFilePath)) ? loadJsonFileSync(roomFilePath) : loadJsonFileSync(path.resolve('node_modules/@fakerjs/house/', roomFilePath));
    }

    _selectRandom(items) {
        return items[Math.floor(Math.random() * items.length)];
    }

    furniture() {
        return this._selectRandom(this.furnitures);
    }

    room() {
        return this._selectRandom(this.rooms);
    }
}

export default function house(options) {
    return new House(options);
}
