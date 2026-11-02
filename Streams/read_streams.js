const fs =require('fs');
const path = require('path');
const notesPath=path.resolve('notes.txt');
const readableStream=fs.createReadStream(notesPath,'utf8');

readableStream.on("data",(data)=>{
    console.log(data);
})

readableStream.on("error",(err)=>{
    if(err)console.log(err)
});

readableStream.on("end",(end)=>{
    console.log("END")
});