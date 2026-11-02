const path = require("path");
const fs=require("fs");
const { getDefaultHighWaterMark } = require("stream");

const notesPath=path.resolve('notes.txt')
const outputPath=path.resolve('output.txt')
let reader=fs.createReadStream(notesPath)
let writer=fs.createWriteStream(outputPath)
reader.pipe(writer)
writer.on('finish',()=>{
    console.log("Finish")
})

//HighWaterMark =  is used to decide the size of chunks