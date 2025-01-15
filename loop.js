const obj={
    1:"amar",
    2:"sonu",
    3:"nath"
}
const arr=new Array(1,2,3,4);
// console.table(obj)
//for loop
const keys=Object.keys(obj);//it return an array that contain the key of the objcts
// console.log(keys)
for(let i=0;i<keys.length;i++){
    const key=keys[i];
    console.log(obj[key]);
}
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}


const obj={
    1:"amar",
    2:"sonu",
    3:"nath"
}
const arr=new Array("one","two","three","four");
//for in loop
for( let val in arr){
    console.log(arr[val]);
}
for(let val in obj){
    // console.log(val);//it gives the index
    console.log(`${val} ${obj[val]}`)
}

for of
for( let i of arr){
    console.log(i);
}
// not for objects

//filter
const array2=arr.filter((int)=>{
    return int
})
console.log(array2);

//for each

arr.forEach((val,ind)=>{
    console.log(`${ind}:${val}`);
})
const keys=Object.keys(obj);
keys.forEach((val,it)=>{
    console.log(`${obj[val]}`)

})


//map
arr.map((ele)=>{
    console.log(ele);
})
 let keys=Object.keys(obj);
keys.map((ele)=>{
    console.log(obj[ele]);
})