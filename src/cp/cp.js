import { spawn } from 'child_process'

const pathToChild = './files/script.js'

export const spawnChildProcess = async () => {
    const myArguments = process.argv.slice(2);

    const child = spawn('node', [pathToChild, ...myArguments], {
        stdio: ['inherit', 'inherit', 'inherit', 'ipc']
    });

};

spawnChildProcess()