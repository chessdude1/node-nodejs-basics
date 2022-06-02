import { writeFile, stat } from 'fs';

export const create = async () => {
    await stat('./files/fresh.txt', (error, stats) => {
        if (stats) throw "FS operation failed"
    })

    await writeFile('./files/fresh.txt', 'I am fresh and young', (error) => {
        if (error) throw "FS operation failed"
    })
};

create()
