export const parseEnv = () => {
    const resRSSEnvs = [];

    const arrayOfEnvs = Object.entries(process.env)

    for (let i = 0; i < arrayOfEnvs.length; i++) {
        if (arrayOfEnvs[i][0].startsWith('RSS_')) {
            resRSSEnvs.push(`${arrayOfEnvs[i][0]}=${arrayOfEnvs[i][1]}`)
        }
    }

    console.log(resRSSEnvs.join('; '))
}

parseEnv()