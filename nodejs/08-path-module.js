// Path module

const path = require('path')

// console.log(path) 

// Create a path
const myFilesPath = path.join('/content', 'subfolder', 'demo.txt')
// console.log('myFilesPath', myFilesPath)

// access the name of the file
const baseName = path.basename(myFilesPath)
console.log('baseName', baseName)

// method to find the absolute path
// const absolutePath = path.resolve(__dirname, 'content', 'subfolder', 'demo.txt')
// console.log('absolutePath', absolutePath)
