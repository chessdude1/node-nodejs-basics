import { cpus } from 'os'
import { Worker } from 'worker_threads'

export const performCalculations = async () => {
    const numberOfCores = cpus().length;

    const workerResults = []

    for (let i = 10; i < 10 + numberOfCores; i++) {
        (workerResults.push(
            new Promise((resolve, reject) => {
                const worker = new Worker('./worker.js', {
                    workerData: i
                });
                worker.on('message', data =>
                    resolve(
                        {
                            status: 'resolved',
                            data
                        }
                    ));
                worker.on('error', () => reject(
                    {
                        status: 'error',
                        data: null
                    }
                ));
            }
            )))
    }
    try {
        console.log(await Promise.all(workerResults))
    } catch (e) {
        console.log(e)
    }

};

performCalculations()