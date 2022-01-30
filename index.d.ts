interface Options {
    locale?: string;
}
type Items = Record<string, string>;
declare class House {
    rooms: Items;
    furnitures: Items;
    defaultLocale: string;
    room(): string;
    furniture(): string;
    _selectRandom(items: Items): string;
}
export default function house(options?: Options): House;
