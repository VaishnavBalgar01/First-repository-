const fs=require("fs");
const path=require("path");
const events=require('events');
const EventEmitter=new events();
const logPath=path.resolve('app.log');
const a=process.argv[2];

EventEmitter.on('log',(a)=>{
    const date=new Date();
    const logtext="\n["+date.toLocaleString()+"] "+a;
    console.log(logtext);
    fs.appendFile(logPath,logtext,(err)=>{
        if(err)console.log(err)
    });
});
EventEmitter.on('read',()=>{
    fs.readFile(logPath,'utf8',(err,data)=>{
        if(err)console.log(err);
        console.log(data)

    })
})
EventEmitter.emit('log',a)
EventEmitter.emit('read')
//EventEmitter.emit('log','Welcome')