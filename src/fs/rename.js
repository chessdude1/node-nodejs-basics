import { rename as renameFs } from 'fs';

export const rename = async () => {
    renameFs('./files/wrongFilename.txt', './files/properFilename .md', err => {
        if (err) throw "FS operation failed"
    })
};

rename()