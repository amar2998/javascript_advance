const promise1=new Promise((resolve,reject)=>{
    
        let data=true;

        if(data){
            const obj={
                name:"amar",
                age:26
            }
            resolve(obj);
        }
        else{
            reject("condition reject");
        }
        


})
promise1.then((message)=>{
    console.log(message);
}).catch((message)=>{
    console.log(message);
})
