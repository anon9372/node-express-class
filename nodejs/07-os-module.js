const os = require('os')

// information about the user
const user = os.userInfo()
// console.log('User', user) 

// method to returnn the uptime 
// console.log(`Uptime of my system is ${os.uptime()} seconds.`) 

const myOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}

console.log('myOS', myOS)