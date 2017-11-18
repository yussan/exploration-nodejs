const fs = require('fs');

// write file using fs.createWriteStream
// if file not available, NodeJS wil generated new one
const fileWrite = fs.createWriteStream('./newfile');
fileWrite.write('this is new content');
fileWrite.end();

// read file using fs.readFile()
fs.readFile('./largefile', 'utf8', (err, data) => { //get result from readFile as utf8 format
    console.log('readFile(largefile): ', data)
})

// read file using fs.creteReadStream()
const bigFile = fs.createReadStream('./largefile')
console.log('createReadStream(largefile): ', bigFile.pipe(process.stdout))

console.log('program is finished');
// Run using command "node 04.01.read\ write\ stream.js" 