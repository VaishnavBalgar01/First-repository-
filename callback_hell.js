function GetUser(id,cb){
    setTimeout(()=>{
        cb(null,{id,name:"Vaishnav"})
    },500);
}

function getOrder(userId,cb){
    setTimeout(()=>{
        cb(null,["order 1","order 2"])
    },500);
}

function getorderDetails(order,cb){
    setTimeout(()=>{
        if(order=="order 1"){
        cb(null,{order,price:499})
    }
     if(order=="order 2"){
        cb(null,{order,price:1000})
    }
}
,500)
}


GetUser(1,(err,user)=>{
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

    
