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
