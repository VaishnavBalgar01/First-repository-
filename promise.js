import { resolve } from "node:dns";

const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const success=true;
        if(success){
            resolve('data received')
        }
        else{
            reject(new Error("take a break"))
        }
    },500)
})

promise.then((msg)=>{
    console.log(msg)
})
.catch((err)=>{                                      // .catch is same as promise.catch
    console.log(err)
})
.finally(()=>{                                     // .finally is same as promise.finally
    console.log("All Done")
})