import { createWriteStream } from 'fs'

const streamFileToWrite = createWriteStream('./files/fileToWrite.txt')

export const write = async () => {
    process.stdin.on('data', data => {
        streamFileToWrite.write(data.toString());
        process.exit();
    });
};

write()