export const parseArgs = () => {
    const argsWithoutPath = process.argv.slice(2);
    let res = []

    for (let i = 0; i < argsWithoutPath.length; i++) {
        if (i % 2 === 0) {
            res.push(`${argsWithoutPath[i].slice(2)} is ${argsWithoutPath[i + 1]}`);
        }
    }

    console.log(res.join(', '))
};

parseArgs()