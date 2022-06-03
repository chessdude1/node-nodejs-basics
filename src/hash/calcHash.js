import { readFile } from 'fs/promises';
import { createHash } from 'crypto';

export const calculateHash = async () => {
    const promise = await readFile('./files/fileToCalculateHashFor.txt', err => {
        if (err) throw 'FS operation failed'
    })

    let hash = createHash('sha256').update(promise).digest('hex');
    console.log(hash)
};

calculateHash()