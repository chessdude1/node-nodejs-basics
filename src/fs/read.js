import { readFile } from 'fs';

export const read = async () => {
    readFile('./files/fileToRead.txt', 'utf-8', (err, res) => {
        if (err) throw "FS operation failed";
        console.log(res)
    })
};

read()