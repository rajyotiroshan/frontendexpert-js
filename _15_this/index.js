/* console.log(this); //window object

function logThis() {
  console.log(this); // window obj with logThis
}

logThis(); */

//but with strict mode the value is empty
/* 'use strict';

console.log(this); //window object

function logThis() {
  console.log(this); // undefined in strict mode.
}

logThis(); */
/* 'use strict';
function logThis() {
    console.log(this); 
  }
const obj = {
    num: 10,
    logThis
}


obj.logThis(); */

/* "use strict";

const button = document.querySelector("button");
button.addEventListener("click", logThis);
function logThis() {
  console.log(this); // button itself.
} */

/* "use strict";
const logThis = ()=>{
    console.log(this); // window object
  }
  //Note: arrow function do not get their own this binding
 // this refers to whatever env it is ..in this global
const button = document.querySelector("button");
button.addEventListener("click", logThis); */

/* "use strict";
function logThis(){
    console.log(this); // obj obj
  }

  const obj = {
    num:10,
    name: 'rajan'
  }
// calling afunction on an obj but binding this to another obj.
const boundLogThis = logThis.bind(obj);
boundLogThis(); */

/* "use strict";
function logThis(x, y) {
  console.log(this); // obj obj
  console.log(x, y);
}

const obj = {
  num: 10,
  name: "rajan",
};
// calling afunction on an obj but binding this to another obj.
//const boundLogThis = logThis.bind(obj);
//boundLogThis(20, 30);

//or
//const boundLogThis = logThis.bind(obj, 30, 40);
//boundLogThis();

//or
const boundLogThis = logThis.bind(obj, 30);
boundLogThis(40);

//just want to call the func immediately. rather than later

logThis.call(obj, 70, 80); //obj can be anything,like
logThis.call(123, 40, 30);
//in strict mode, converted -> wrapper obj, nul/undefined -> global window obj
// this arg amost be obj,

//apply like call but, pass arg as an array

logThis.apply(obj, [30, 20, 2]); */

//this in array itration func

/* [1,2,3].forEach(function(num){
    console.log(this); //window
    console.log(num)
}) */

/* 'use strict';
[1,2,3].forEach(function(num){
    console.log(this); //undefined
    console.log(num)
}); */

/* [1,2,3].forEach((num)=>{
    console.log(this); //window
    console.log(num)
}); */
/* 
'use strict';
[1,2,3].forEach((num)=>{
    console.log(this); //window : this context above arrow func is global
    console.log(num)
}); */

/* 'use strict';
[1,2,3].forEach((num)=>{ //arrow func does not have theor own this context
    console.log(this); //window : this context above arrow func is global
    console.log(num)
}, {num: 10});

[1,2,3].forEach(function(num){
    console.log(this); // {num:10}
    console.log(num)
}, {num: 10}); */

"use strict";

class Person {
  constructor(name) {
    console.log(this);
    this.name = name;
    console.log(this);
  }

  speak() {
    console.log("Hello I am " + this.name);
  }
}

const conner = new Person("Corner"); // this is bound to the new obj that is created
const clement = new Person("Clement");
conner.speak();
clement.speak();
