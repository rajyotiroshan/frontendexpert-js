//inheretence model
//prototypal inherent:
// ->  obj inherits from prototype, other intantiated obj.
// obj -> obj proty -> proty( obj proty) -> .... -> null prototype

// in prototypal inheritance objects only inherits frok other objects,
//rather than using class blueprints.
const person = {
  isHuman: true,
};

//console.log(person);

const child = Object.create(person); //set person as prototype og child
//console.log(child);
//console.log(child.isHuman);
// child.[[Prototype]] = person; implicite, but cant do

// can do
const p = {
  name: "rajan",
  age: 32,
};

const child2 = {};
child2.__proto__ = p; // but bad practice
//console.log(child2.age);

// better ways to do

const p1 = {
  name: "rajan",
  age: 32,
  isHuman: true,
};

const c3 = Object.create(p1);
c3.maxAge = 60;

//console.log(c3.maxAge);
//console.log(p1.maxAge);

const c4 = Object.assign(Object.create(p1), {
  minAge: 16,
});

//console.log(c4.minAge);
//console.log(p1.minAge);

//

const p2 = {
  name: "kumar",
  age: 32,
  isHuman: true,
};

const c5 = {
  avgAge: 25,
};

//(child, proto)
Object.setPrototypeOf(c5, p2); // not recommended, browser not optimized to change prototype, slow opration

//console.log(c5.avgAge);
//console.log(p2.avgAge);

const c6 = {
  mAge: 30,
  __proto__: p2,
};

//console.log(c6.mAge);
//console.log(p2.mAge);

///

const c7 = Object.create(p2, {
  vAge: {
    value: 18,
    writable: true,
    configurable: true,
    enumerable: true,
  },
});

//console.log(c7.vAge);

const c8 = Object.create(c7);
c8.name = "arjun";
/*
console.log(c8);
console.log(c8.__proto__);
console.log(c8.__proto__.__proto__);
console.log(c8.isHuman);
console.log(Object.getPrototypeOf(c8)); */

//note: ny changes in prototype property will effect every object created from this prototype.

// almost everything that is not primitive is an obj

const funcProto = Object.getPrototypeOf(() => {});
//console.log(Object.getOwnPropertyNames(funcProto));

const arrProto = Object.getPrototypeOf([]);
//console.log(Object.getOwnPropertyNames(arrProto));

/**
 *
 * function constructor
 *
 */

function Person(name) {
  this.name = name; //insyance property
}

//every function has a prototype property on it
Person.prototype = {
  constructor: Person,
  isHuman: true,
};

const corner = new Person("Corner");
const clement = new Person("Clement");
//console.log(corner);
//console.log(corner.__proto__);
//console.log(Object.getPrototypeOf(corner));

//console.log(clement);
//console.log(Object.getPrototypeOf(corner) === Object.getPrototypeOf(clement));

Person.prototype.test = "test";

//console.log(corner.test);
//console.log(clement.test);

const rajan = new corner.constructor("Rajan");
const samit = new clement.constructor("Samit");

//console.log(rajan);
//console.log(samit);
//console.log(Object.getPrototypeOf(samit) === Object.getPrototypeOf(rajan));

//
//adding method to prototype
Person.prototype.speak = function () {
  //console.log("Hello this is " + this.name);
  //console.log(this.isHuman);
};

rajan.speak();
samit.speak();

//is somewhere in the corner protottype chain
//is Person.prortype object
/* console.log(corner instanceof Person);
console.log(rajan instanceof Person);

//all object eventutally inherots of Object
console.log(rajan instanceof Object);

console.log(rajan instanceof Array);

Object.setPrototypeOf(rajan, Array.prototype);
console.log(rajan instanceof Array);

console.log(rajan); */

//usecase of setting prototype
//have array but using super old browser, not having access to push method

//define it

//polyfills

if (Array.prototype.myPush === undefined) {
  //console.log("called");
  Array.prototype.myPush = function (value) {
    this[this.length] = value;
  };
}

const arr = [1, 2, 3];
arr.myPush(4);
//console.log(arr);

//Modern Class function

class Animal {
  static isAnimal = true;
  isHuman = true; //instance propertyu
  #price = 5000;
  constructor(name) {
    this.name = name;
  }
  static greet() {
    console.log("Hello");
  }
  speak() {
    console.log(`${this.name} speaks.`);
  }

  getPrice(){
    console.log("Animal get price");
    return this.#price;
  }


  /*   get name(){
    console.log("get name");
    return this.name;
  }

  set name(name){
    console.log("set name");
    this.name = name;
  } */
}

/* const cat = new Animal("cat");
cat.isHuman = false;
console.log(cat);
console.log(cat.speak());
console.log(cat.isHuman);

const dog = new Animal("Freddy");
console.log(dog)
console.log(dog.speak(), dog.isHuman);

cat.name = "catty";
dog.name = "flop";
console.log(cat.name, dog.name)

console.log(Object.getPrototypeOf(dog).constructor.isAnimal);
console.log(Animal.greet()); */
//console.log(dog.greet()); //error

//inheritance

class Goat extends Animal {
  #age; //only accessible inside the class.
  loc;
  constructor(name, age, loc){
    super(name); //constructor of super class called
    this.#age = age;
    this.loc = loc;
  }

  getGoatPrice(){
    console.log("goat get price");
    return super.getPrice();
  }
}

const g1 = new Goat("bakri", 5, 'ind');

g1.speak();

console.log(g1 instanceof Animal);
console.log(g1 instanceof Goat);

console.log(Goat instanceof Function);

//console.log(g1.#age); //error not accessible outside class
console.log(g1.loc);
//console.log(g1.#price);//not accessible by child class obj
console.log(g1)
console.log(g1.getPrice());
console.log(g1.getGoatPrice());



