
/*
  // Welcome to our Playground!
//2 equality operator exists in js
console.log(5 == 5); //loose equality operator or eq ope

console.log( 5 === 5); // strict equa -> type and value both cm

console.log( 5 == '5'); //true -> only checking value ->  5

console.log( 5 === '5'); // false ->  type diff -> number , string

//how know -> both same -> implicit type conversion
//so how js know that both have same value.
// implicit type conversion -> 
//most of the time -> string -> number
// '5' -> 5

//manually :: explicit type conversion

//
console.log(Number(false)); // 0
console.log(Number(true)); // 1

//so
console.log(true == 1);
console.log(false == 0);

//
console.log("Boolean");
console.log(Boolean(10)); //true
console.log(Boolean(0)); //false
console.log(Boolean(-1));

//
console.log("String");
console.log(String(0));
console.log(typeof String(0));

//NaN -> math opt not res in num
console.log(Number('abc')); //NaN
console.log(NaN == NaN); 
//above is false, since NaN seems like a value but The Way We get NaN is not same 
// so comparing two NaN gives false.

console.log('abc' == 'abc');

// comparing a str with any other value will give false
//whetehr strict or loose
// now since conversion of 'abc' into a number return NaN and NaN never eqals to anyone even itself
//so comparing 'abc' to anyother value othan than itself always return false.

console.log('abc' == NaN);
*/
//let's see NULL  and Undefined
const x = 5;


//later check if undefined or nbull

if(x === null || x === undefined) {
  //do something
}

//only value null/undeinfed  double equals is to each other
//
if(x == null) {
  //do something
}

console.log(null == null); //true

console.log(null == undefined );// other than undeinfed/ null it is always false

console.log(null === undefined); //diff type => false

//so
let y = null;
if(y == null){ // checks for null and undefined at the same time
  // so need to put another (x == undefined) 
  console.log(" y is null ");
  
}

y = undefined;
if(y == null){ // checks for null and undefined at the same time
  // so need to put another (x == undefined) 
  console.log(" y is undeinfed");
  
}

//but using triple equals will not work
console.log("Object");

console.log({} == {}); //false -> not comparing value inside but ref
console.log({} === {}); //fasle -> hence diff
const obj ={};
console.log(obj == obj);//true
console.log(obj === obj)

const arr = []; //a type of obj
console.log(arr == []); //false
console.log(arr === []); //false

//which one should i be using == or === -> depends -> 90% -> === 
//because most of the time we want type and value both being compared.

//== -> that  null and undefined.

//lets check for obj

console.log("object values of")
let obj1 = {
  name: 'rajan',
  valueOf(){
    return "5";
  }
}

console.log(obj1 === 5);



