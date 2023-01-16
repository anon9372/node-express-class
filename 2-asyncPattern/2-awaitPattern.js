const { readFile } = require('fs')

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}

// getText('./content/first.txt') 


const start = async () => {
    try {
        const first = await getText('./content/first.txt')
    }
    catch (err) {
        console.log(err)
    }
}

start()