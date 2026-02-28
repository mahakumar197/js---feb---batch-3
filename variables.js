let lunchbox = "rice";  //- assign
console.log(lunchbox);
// let -keyword, used to create a variable -(declare a variable)
// lunchbox - variable name 
// rice - value - data

lunchbox ="sambar"; /// update the variable - reassign
console.log(lunchbox);

//y do we need variable
// remember the Information, reuse value, upadte the data,

//decalre variable

// var - old - reassign 
// let - (recommended)
// const -(fixed value)

const data = "data";
console.log(data);
//data = "data1";
console.log(data);


//var, let,const


//data type

//what kind of a  data it is

//primitive - string, number, boolean,undefined,null,BigInt,symbol - assign one value at a time 
//non primive - array, object , function - more than one value,complex data

//number 
let num = 10;
//boolean
let islogin = true; //true, false
//undefind
let number;

//null 
let nullData = null;
//bigInt
let bigNumber = 42356789876;
console.log(num, islogin, number,nullData,bigNumber);

//array - collection of item that shared one common name
       let arr = [1,2,3,4,5];
//indux number    0 1 2 3 4
console.log(arr);
console.log(arr[0]);

//object - key value pair,

let person ={
    name : "aravind",
    age : 23,
    place :"chennai"
}
console.log(person)
console.log(person.name);

// function - set of instruction, write once use many
function greet(){
    console.log("welcome");
}
greet(); // function call

//typeof