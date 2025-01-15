const { isUtf8 } = require("buffer");
const { error } = require("console");
const fs=require("fs");
const data="hi i am amar sonu nath";
// fs.writeFileSync('./example.txt',data);
// const data2=fs.readFileSync('./example.txt','utf-8')
// console.log(data2)

//async

fs.writeFile('./example2.txt',data,(error)=>{
    if(error){
        console.log(`message:${error}`);
    }
    else{
        console.log("file write successful");
    }
})
let d1="";
fs.readFile("./example2.txt",'utf-8',(error,data)=>{
    if(error){
        console.log(`message:${error}`);
    }
    else{
     d1=data;
     console.log(d1);    
    }
})
fs.appendFileSync('./example.txt'," hloo i am searching for job");
fs.appendFile('./example2.txt',"you are in the form",(error)=>{
    if(error){
        console.log(`message :${error}`);
    }
    else{
        console.log("append successfully");
    }
})
//note async file writing can be appended async 