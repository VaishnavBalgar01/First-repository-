const events=require('events');
const EventEmitter=new events();


/*EventEmitter.on('login',()=>{
    console.log("User logged in !")
});*/
EventEmitter.on('login',(a)=>{
    console.log("Welcome "+a)
});
/*  EventEmitter.on('login',()=>{
    console.log("Welcome")
});
EventEmitter.on('login',()=>{
    console.log("hello")
});





EventEmitter.once('log',()=>{
    console.log("User logged in successfully!")
});
EventEmitter.once('log',()=>{
    console.log("User logged")
});           
//EventEmitter.emit('login')
//EventEmitter.emit('login')


EventEmitter.emit('log')
EventEmitter.emit('log')*/


EventEmitter.emit('login','Vaishnav')