/*function greet (name,cb){
    console.log(`${name} Hello!`)
    cb();
}
greet("Vaishnav",()=>{
    console.log("Greeting printed")
})*/

function GetUser(id,cb){
    if(id<=0){
        cb("Id lower than 0",null)
    }
    else{
    setTimeout(()=>{
        cb(null,{id, name:"Badman"})
    },5000)
};
}
console.log("Start")

GetUser(0,(err,user)=>{
    if(err){
        console.log(err);
    }
    else{
    console.log(user)
}
});

console.log("End")