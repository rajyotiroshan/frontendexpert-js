//'use strict'
// Welcome to our Playground!
//Objects: store key value pair

//object literal syntax
/*const myKey = "key" ; //need to be string
const website = {
  name: 'Jagruyaam',
  rating: 5,
  founders: ["Rajan", "Shubhas", "Ash"],
  isAwesome: true,
  "src-donation": ["buchun", "avinash"],
  [myKey] : 1234,
}*/
/*
const website = {
  name: 'Jagruyaam',
  rating: 5,
  founders: ["Rajan", "Shubhas", "Ash"],
}
console.log(website);
console.log(website["name"]); //for space, key with hiphen, for var
console.log(website.rating);

const key = 'name';

console.log(website[key]); //[js-expression]

//note property does not exist ->  no error -> undefined

console.log(website.rajan);

//modification
website.name = 'frontendexperts';
console.log(website);

website.foo = 'bar';
console.log(website);

//delete
delete website.foo;
console.log(website);

//equality
console.log({} === {}); //not equal based on the value
const obj = {};
console.log(obj === {});
console.log(obj === obj);

//shorthand notation

const name = 'Corner';

const obj1 = {
  name: name,
}

//same as

const obj2 = {
  name,
}

console.log(obj1, obj2);
*/
//another way of create obj

const obj4 = new Object();
//console.log(obj4);

obj4.name = 'rajan';
obj4.age = 32
//console.log(obj4);

//using constructor
//want -> same keys, diff value -> curr -> redundnt

//simple function
function Website(name, rating, founders){
  this.name = name;
  this.rating = rating;
  this.founders = founders;
}

const fee = new Website();
//new -> 1. create new obj , set to this passed to Website function, return this obj

//console.log(fee); // no error, undefined set

let fee1 = new Website("rajan", 5.0, ["rajan","samit"]);

//console.log(fee1);

//Symbol
const id = Symbol("rajan"); // @r -> a symbol (primitive) , always diff for same id also
const id2 = Symbol('rajan'); // 
//console.log(id == id2);

//use case: hidden from most iteration function.
//3rd party api -> dos not interfare with another api call key
//
const id3 = Symbol.for('kumar');//
const id4 = Symbol.for('kumar');
const obj5 = {
  [id]: 1234,
  [id4]: "f",
  [id3]: "s", // sice same id override the prev on
}

//symbol comes from global registry
//console.log(obj5);

//obj contained a key
//in keyword
//console.log('name' in fee);

//predefined method
//console.log(fee.hasOwnProperty('name'));

//Diff
// in -> check in in inheritance tree
// hasOwnProperty check in obj own property

//console.log('toString' in fee);
//console.log(fee.hasOwnProperty('toString'));

// 3rd way

//console.log(fee.name !== undefined); //issue:  if name explicetely set to undefined then the problem.


//adding method to an objects
const web1 = {
  name: 'Algo',
  rating: 5,
  sayHello(){
    console.log('hello');
  },
  get getRating(){
    return this.rating;
  },
  set setRating(value){
    this.rating = value;
  }
};

//web1.sayHello();
//console.log(web1.getRating); //used as property rather than a method call
web1.setRating = 54;
//console.log(web1.getRating);


//object inherit from another object

const web2 = {
  name: 'Algo',
  rating: 5,
};

const obj6 = {
  foo: "bar",
  __proto__: web2
};

//console.log(obj6.name);


const obj7 = {
  foo: "bar",
  hello: "world",
  [Symbol('id')]:0,
  sayHi(){
    console.log("Hi !");
  },
  __proto__: web2
};


//Object.keys(obj)
//@r -> arr with keys -> does not include inherited, non emunerable keys, symbol
//console.log(Object.keys(obj7));

//Object.values(obj) //does not inlcude inherited property
//console.log(Object.values(obj7));

//Object.entries(obj7)
//console.log(Object.entries(obj7));// @r an arr

//Object.entries(obj7).forEach(function([key, value]) {
  //console.log(key, value);
//});

//for(key in obj7) { //ignore the symbol but inherited prop considered but no emunerable property ignored. 
  //console.log(key); // like toString key not going to show up
//}

const myObj1 = {
  original: 123,
};

//copy obj7 to myoObj1 but only own emunerable key
Object.assign(myObj1,obj7);//(target, src)

//console.log(myObj1);

//Object.freeze // not let hange the obj, new 
//Note:: differ on context like in strict mode-> throw errpr
//console.log(Object.isFrozen(myObj1));
Object.freeze(myObj1);
//console.log(Object.isFrozen(myObj1));
myObj1.original = "changed"; //stil 123
myObj1.newProp = "not added";
//console.log(myObj1);

//check for freeeze

//console.log(Object.isFrozen(myObj1));
obj7.name = 'Frontendexpert';

//Object.seal() ;// like froze but can update prop but not create new one
/*
let myObj3 = {
  name: 'rajan',
  age: 30
}
console.log(Object.isSealed(myObj3));
Object.seal(myObj3);
myObj3.name = "kumar"; //ok
myObj3.edu ="grad" ;// not work
console.log(myObj3);
console.log(Object.isSealed(myObj3));

console.log();
*/

/*
let myObj4 = {
  name: "rajan",
  age: 30
}

console.log(myObj4.toString());

//but

myObj4.toString = function() {
  return this.name + " "+ this.age;
}
console.log(myObj4.toString());

console.log(myObj4.valueOf());

myObj4.valueOf = function() {
  return 2;
}
console.log(myObj4 - 10); // substraction using valueOf to convert myObj4 into nnum which is 2
*/

const myObj5 = {
  name: "rajan",
  rating: 5,
  [Symbol.toPrimitive](hint) {
    if(hint === 'number') {
      return 3;
    }else if(hint === 'string'){
      return 'hello';
    }
    return 2;
  }
};

myObj5.toString = function(){
  return 'hello world';
}

myObj5.valueOf = function(){
  return 4;
}

console.log(Number(myObj5)); //fro hint ins
console.log(String(myObj5)); //from hint in symbol

console.log(10 - myObj5);
console.log(10 + myObj5);

















