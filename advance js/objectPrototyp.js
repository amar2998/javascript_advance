function multiply(num){
    return num*5
}
multiply.power=2;
console.log(multiply.power)
console.log(multiply(5))
console.log(multiply.prototype)// 
function createUser(username,score){
    this.username=username;
    this.score=score;
    return username;
}
createUser.prototype.increment=function(){
    this.score++;
}
createUser.prototype.printme=function(){
    console.log(`score is ${this.score}`)
}
const cahi= new createUser("chai",34);

const tea=new createUser("tea",45);
cahi.printme();
cahi.increment();
cahi.printme();

// new keyword create a new object 
// new created object get linked to prototype of constructor


