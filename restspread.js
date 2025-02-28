// rest
const fun=(data)=>{
    console.log(data)
}
let arr=[1,2,3,4,5]
let copy=[...arr,7,8,9,10] //rest
fun(copy)

//spread
const f2=(...arr)=>{
    console.log(arr)
}
f2(1,2,3,4,5)