const arr=[9,8,7,6,5,4,3,2,1]
let arr2=arr.sort()
console.log(typeof arr)
//array is an object
const str="i ma amar"
let str2=str.split('');
console.log(str2)
let arraystring=["hi ","my","name","is","amar"]
console.log(arraystring[3][0])

const arr3= new Array(1,2,3,4,5)
arr3.push(45)
arr3.pop()
const ans=arr3.shift();
const ans2=arr3.unshift("shaktiman");

// console.log(arr3,ans)
console.log(arr3.includes("shaktiman"))
console.log(arr3.indexOf("shaktiman"))

console.log(arr3.join())//arr to string

console.log(arr3.slice(0,3))
console.log(arr3)
console.log(arr3.splice(0,3))
console.log(arr3)
