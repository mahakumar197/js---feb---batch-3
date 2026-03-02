//operators - is used to do some operations
// arithmatic operaor - (+,-,*,/,%)

let a = 2;
let b = 10;

// console.log(a+b);  // a,b operend , + operator
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

//2.assignment operator - is used to assign a value also we can check some conditions
//(=,+=,-=,*=,/=,%=)

let x = 2; //7
let y = 5; // 7+5 =  12
// console.log(x= x+y,"data");
// console.log(x += y);
// console.log((x -= y));
// console.log((x *= y));
// console.log((x /= y));
// console.log((x %= y));

// console.log(x= x+y);
// console.log(x=+y)
// console.log(x=x+y)
// console.log(x++); //2+1
// console.log(++x); //1+3

// console.log(x--); //2-1
// console.log(--x);

//comparison operator
//(==,===,<,>,<=,>=,)

let d = "10";
let e = 10;
let f = 5;
let g = 15;
// console.log(d==e); // only checks the value
// console.log(d === e); // check value and data type
// console.log(d+e)
// console.log(e + f+g+d);
// console.log(d < e);
// console.log(d > e);
// console.log(d <= e);
// console.log(d >= e);

//logical operator

let h = 10;
let i = 0;
let j = 15;

//AND && - both conditions must be true id any one false output will be false 

console.log((h>i)&&(j<i));

// OR || - any one condition will be true

console.log(h > i || j < i);

//NOT ! - reverse the result
console.log(!(j < i));
console.log(!i); //0 -- true
console.log(!j); //15 -- false

//string operator - join string together
let greeting = "good" +" "+ "evening" + 10
console.log(greeting);

