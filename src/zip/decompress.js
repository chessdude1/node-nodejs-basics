import { createReadStream, createWriteStream } from 'fs'
import { createUnzip } from 'zlib'

export const decompress = async () => {
    const decompressStream = createReadStream('./files/archive.gz');
    const writeFileStream = createWriteStream('./files/fileToCompress.txt');
    decompressStream.pipe(createUnzip()).pipe(writeFileStream);
};

decompress()