import { unlink } from 'fs';

export const remove = async () => {
    unlink("./files/fileToRemove.txt", function (err) {
        if (err) throw "FS operation failed"
    });
}

remove()