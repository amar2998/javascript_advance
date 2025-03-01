const map=new Map()
map.set("one",true)
map.set("two",true)
map.set("three",false)
map.set("four",true)
map.set("five",false)
// console.log(map)
// for(const key of map){
//     console.log(key)
// }
// // we cannot use for in loop
// for (let [key,val] of map){
//     console.log(key ,":"," ",val)
// }
map.forEach((val,key,ar)=>{
    console.log(key,val,ar)
})