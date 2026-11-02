const notes = require("./utils");

let a=process.argv[2]
let b=process.argv[3]

notes.createFile(a);
notes.appendFile(b);

let c=notes.readFile();
notes.readFile();
console.log(c)

//notes.deleteFile();
