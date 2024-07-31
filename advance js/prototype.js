let my_name="amar     "
String.prototype.truelength=function(){
    console.log(`${this}`)

    console.log(`true length is ${this.trim().length}`)
}

my_name.truelength()
"amar sonu nath".truelength()





let arr=["thor","spiderman"]
let heropower={
    thor:"hammer",
    spiderman:"sling",
    getspiderPower:function(){
        console.log(`spider man power is ${this.spiderman}`);
    }
}
Object.prototype.amar=function(){
    console.log(`amar is present in all object`)
}
Array.prototype.heyamar=function(){
    console.log("amar says hi")
}
// heropower.amar()
// arr.amar()
// heropower.heyamar()
arr.heyamar()
inheritance
const user={
    name:"chai",
    email:"amagsj456542gmail.com"
}
const teacher={
    makevideo:true,

}
const teachAssistante={
    isavailable:false,
}
const tasupport={
    makeAssignent:"JS assignment",
    fullTime:true,
    __proto__:teachAssistante //here tasupport can access the property of the teachassistante
}
teacher.__proto__=user //here teacher can use the property of the user

//mordeen sysntax
Object.setPrototypeOf(teachAssistante,teacher) //here teachassistante can access the property of the teacher