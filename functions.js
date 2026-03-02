//function is a non primitive data type 
// set of instructions, create once use many

function hi(){   // function declaration
    console.log("good evening");
}
hi();

//function expression 
let greet = function(){
    console.log("welcome all");
}
greet();

//arrow function - shorterway
let a= 5;
let b = 10;
 
add = (a,b)=>{
    return a+b;    // returns the value
}
console.log(add(a,b));

function adds(a,b){
    return a+b;
}
console.log(adds(a, b));

//callback function - a function passed as an argument to an another function

function user(name) {
  console.log("hello " + name);
}

function process(callback){
    let userName =" aravind";
    callback(userName);
}
process(user);

// constructor function - used to create multiple object with same structure
//this - keyword to attch properties to the object
// new - used to create an object

function Person (name,age){
    this.name = name;
    this.age = age;

    this.abc = function () {
        console.log("hello my name is "+ this.name +" and im " +this.age)
    };
}

let Person1= new Person("aravind", 20);
let Person2 = new Person("aravind1", 20);
let Person3 = new Person("aravind2", 20);

// let person1 = {
// name : "aravind",
// age: 20
// }
Person1.abc();
Person2.abc();
Person3.abc();
