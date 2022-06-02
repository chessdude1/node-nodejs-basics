import { readdir } from 'fs';

export const list = async () => {
    readdir('./files', (error, res) => {
        if (error) throw "FS operation failed"

        console.log(res)
    })
};

list()