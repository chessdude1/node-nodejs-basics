import { readdir, mkdir, copyFile } from 'fs'

export const copy = async () => {
    await readdir('./files', async (error, res) => {
        if (error) throw 'FS operation failed'


        await mkdir('files_copy', err => {
            if (err) throw 'FS operation failed'
        })

        for (let i = 0; i < res.length; i++) {
            copyFile(`./files/${res[i]}`, `./files_copy/${res[i]}`, err => {
                if (err) throw 'FS operation failed'
            })
        }
    })
};

copy()