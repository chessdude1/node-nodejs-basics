import { Transform } from 'node:stream';

export const transform = async () => {
    const reverseStream = new Transform({
        transform(data, encoding, callback) {
            const reversedData = data.toString().split("").reverse().join("");
            this.push(reversedData);
            callback();
        }
    });

    process.stdin.pipe(reverseStream).on('data', data => {
        process.stdout.write(data.toString())
    });

};

transform()