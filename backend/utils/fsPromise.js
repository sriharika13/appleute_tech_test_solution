const fs = require('fs')

const readFileProm = (path) => new Promise((resolve, reject) => {
    fs.readFile(path, (err, res) => {
        if (err) {
            reject(err)
        } else {
            resolve(res)
        }
    })
});


const writeFileProm = (path, content) => new Promise((resolve, reject) => {
    fs.writeFile(path, content, (err, res) => {
        if (err) {
            reject(err)
        } else {
            resolve(res)
        }
    })
});

module.exports = {
    readFileProm,
    writeFileProm
}