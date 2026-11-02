const fs =require('fs');
const path = require('path')
const notesPath=path.resolve('notes.txt')
fs.readFile(notesPath,(err,data)=>{
    if(err)console.log(err)
        console.log(data)
});
const buff=Buffer.from("Hello")
console.log(buff)
console.log(buff.toString())
console.log(buff.length)
const allocBuff=Buffer.alloc(5)
console.log(allocBuff)
allocBuff.write("Hi")
console.log(allocBuff)
