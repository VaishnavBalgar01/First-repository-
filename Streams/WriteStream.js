const fs=require("fs");
const path=require("path");
const notesPath=path.resolve("notes.txt");
let text=""

for(let i=1;i<=1000;i++){
    text +="Line "+i+"\n"
}
fs.writeFileSync(notesPath,text);



const outputPath=path.resolve('output.txt')
const CreateSteram=fs.createWriteStream(outputPath)

CreateSteram.write("First Line\n")
CreateSteram.write("second Line\n")
CreateSteram.write("Third Line\n")


CreateSteram.end("End\n")


CreateSteram.on('finish',()=>{
    console.log("Finish")
})
CreateSteram.on('error',(err)=>{
     if(err)console.log(err)
})