//reduce
let arr=[1,2,3,4,5,6,7,8,9,10]
arr.map((value,index)=>{
    // console.log(value)//we can print the value 
    // console.log(index)//we can print the index

})
let num2=arr.filter((i)=>{
    if(i<4){
        return i
    }

})
// console.log(num2)


//rduce
let num4=arr.reduce((h1,h2)=>{
    return h1+h2

})
console.log(num4)