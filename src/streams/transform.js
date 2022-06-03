import { Transform } from 'node:stream';
import { createWriteStream, createReadStream } from 'fs'

export const transform = async () => {
    const readStream = createReadStream('./files/fileToRead.txt')
    const writeStream = createWriteStream('./files/fileToWrite.txt')

    const reverseStream = new Transform({
        transform(data, encoding, callback) {
            const reversedData = data.toString().split("").reverse().join("");
            this.push(reversedData);
            callback();
        }
    });


    readStream.pipe(reverseStream).pipe(writeStream).on('finish', (data, err) => {
        console.log(data);
    });
};

transform()