import { createReadStream, createWriteStream } from 'fs'
import { createGzip } from 'zlib'

export const compress = async () => {
    const readFileToCompressStream = createReadStream('./files/fileToCompress.txt');
    const writeFileToCompressStream = createWriteStream('./files/archive.gz');

    readFileToCompressStream.pipe(createGzip()).pipe(writeFileToCompressStream);
};

compress()