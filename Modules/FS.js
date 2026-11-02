const { error } = require("console");
const fs=require("fs");
const path=require("path");
const notesPath=path.resolve("notes.txt")
/*fs.readFile(notesPath,'utf8',(err,data)=>{
    if(err)console.log(err);
    console.log(data)
});*/
/*let a=fs.readFileSync(notesPath,'utf8');
console.log(a)*/



/*fs.writeFile(notesPath,'this is new ',(err)=>{
    if(err)console.log(err);
   
});*/

/*let a=fs.writeFileSync(notesPath,'This is new');
console.log(a)*/


/*fs.appendFile(notesPath,' New line added',(err)=>{
    if(err)console.log(err);
   
});*/

/*let a=fs.appendFileSync(notesPath,' This in new line using sync');
console.log(a)*/



/*fs.unlink(notesPath,(err)=>{
    if(err)console.log(err);
   
});*/

/*let a=fs.unlinkSync(notesPath);
console.log(a)*/



/*fs.rename(notesPath,'New file',(err)=>{
    if(err)console.log(err);
   
});*/

let a=fs.renameSync(notesPath,'New file');
console.log(a)

console.log("This will run")