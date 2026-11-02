function GetUser(id){
    const promise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve({id,name:"Vaishanv"})
    },500);
    });
    
    return promise;
   
}

function getOrder(userId){
    const promise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve(["order 1","order 2"])
    },500);

    })
    return promise;
    
}

function getorderDetails(order){
    const promise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
        if(order=="order 1"){
        resolve({order,price:499})
    }
     if(order=="order 2"){
        resolve({order,price:1000})
    }
    else{
        reject(new Error("order not found"))
    }
}
,500)

    })
    return promise;
    
}


/*GetUser(1,(err,user)=>{
    if(err){
        console.log(err)
    }
    else{
        getOrder(user.id,(err,order)=>{
            if(err){
                console.log(err)
            }
            else{
                getorderDetails(order[1],(err,orderDetails)=>{
                    if(err){
                        console.log(err)
                    }
                    else{
                        console.log(user.name);
                        console.log(order[1]);
                        console.log(orderDetails.price);
                    }
                })
            }
        })
    }
})
*/

async function main() {

   try{
    const user=await GetUser(1);
    const order=await getOrder(user.id)
    const orderDetails=await getorderDetails(order[2])

    console.log(user)
    console.log(order)
    console.log(orderDetails)
   }
   catch(err){
    console.log(err.message)
   }
    

}
    
main();
