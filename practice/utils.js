const fs = require("fs");
const path = require("path");

const notesPath = path.join(__dirname, "vaishnav.txt");

function createFile(a) {
    fs.writeFileSync(notesPath, a);
}

function readFile() {
    let a = fs.readFileSync(notesPath,"utf8");
    return a;
}

function appendFile(b) {
    fs.appendFileSync(notesPath, b);
}

function deleteFile() {
    fs.unlinkSync(notesPath);
}

module.exports = {createFile,readFile,appendFile,deleteFile};