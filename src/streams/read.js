import { createReadStream } from 'fs'

const streamFileToRead = createReadStream('./files/fileToRead.txt')

streamFileToRead.setEncoding('UTF8');

export const read = async () => {
    streamFileToRead.on('data', res => {
        process.stdout.write(res)
    })
};

read()