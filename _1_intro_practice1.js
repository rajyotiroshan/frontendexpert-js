// Welcome to our Playground!
//Math function
/*let num = 10.8
let strNum = '10.8px';
console.log(Math.floor(num));
console.log(Math.round(num));
console.log(Math.random());

console.log(Number(strNum));
console.log(parseInt(strNum));
console.log(parseFloat(strNum));*/

/*
let num = 10.5;
console.log(num +10);
console.log('10' == 10);
console.log('10' === 10);

console.log(10 < 10.5);
console.log(Math.pow(2,3));

console.log(-Infinity);

console.log(BigInt(100))
console.log(100n);

console.log(typeof BigInt(100))

*/

///String
/*
let str = 'abcd';
console.log(str + 'efg');
console.log(str + 10);
console.log(str > 'efg');
console.log(str <'efg');

console.log(str === "abcd");
console.log('Hello this is a single quote: \'');
console.log('Hello \nWorld');

console.log(`Hello
World
`); //template lieral
console.log(`REsullt: $ ${10+40}`);

console.log('This is a very \
long string ');
*/

//string operation
/*
let str = 'abcd';
console.log(str[1]);
console.log(str.charAt(3));

console.log(str.includes('c'));
console.log(str.includes('m'));

console.log(str.startsWith('a'));
console.log(str.startsWith('b'));

console.log(str.endsWith('a'));
console.log(str.endsWith('d'));

console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.substr(1,2));
console.log(str.substr(1));
console.log(str.substr(0,3));

console.log(str.slice(1,2));

console.log(str);

console.log(str.padStart(10, '-'));
console.log(str.padStart(3, '*'));
console.log(str.padEnd(4,'*'));

let str1 = "  dsff ";
console.log(str1.trim());
console.log(str1.trimStart());
console.log(str1.trimEnd());

let str2 = 'a,b,c,d';

console.log(str2.split(','));
console.log(str2.split('-'));
*/

//OBJECTS

/*
const person = {
  name: 'Corner',
  course: 'FrontendExpert',
};

console.log(person);

console.log(JSON.stringify(person));

console.log(JSON.parse(JSON.stringify(person)));

person.name = 'Rajan';

console.log(person);

//Map

const map = new Map();
map.set(123, 'hello');

console.log(map);
console.log(map.get(123));

map.set(123, 'world');

console.log(map.get(123));

console.log(map.size);
console.log(map.get(0));

const set = new Set();
set.add("hello");
set.add("world");

console.log(set);

console.log(set.has("hello"));

console.log(set.size);

set.delete("hello");

console.log(set);

console.log(set.size);

//ARRAY
const arr = [1,2,3];
console.log(arr);

console.log(arr.length);
console.log(arr[1]);
arr.push(4);
console.log(arr);
console.log(typeof arr);

*/

//FUNCTION
/*
function addTwo(num=6) {
  return num+2;
}


function callfunc(func, param){
  console.log(func(param));
  return "aded";
}

console.log(callfunc(addTwo, 10));
//console.log(addTwo());
console.log(typeof addTwo);

console.log(addTwo instanceof Object);
*/

//LOOP
/*
console.log("for");
for(let i=0; i<4; i++) {
  
  if(i === 1) {
    continue;
  }
  console.log(i);
}
console.log("while");
let i=0;
while(i < 4) {
  console.log(i);
  i++;
}

console.log("do while");
i=0;
do {
  console.log(i);
  i++;
}while(i < 0);

console.log("arr iter");

for(const value of [1,2,3]){
  console.log(value);
}

console.log("str iter");

for(const c of 'abc'){
  console.log(c);
}

console.log('obj iter');
const obj = {
  name: 'Corner',
  course: 'FrontendExpert'
};

for(const k in obj){
  console.log(k);
  console.log(obj[k]);
}

[1,2,3,4].forEach(function(value){
  console.log(value);
});

[1,20,3,4].forEach((value) => {
  console.log(value);
});

*/
//CONDITIONALS
/*
if(){
  
}else if(){
  
}else {
  
}*/
/*
const mynum = 2;
switch(mynum){
  case 1:
      break;
  case 2:
  case 3:

    break;

  default:
}

console.log(mynum > 5 ? 'greater than 5' : 'less than 5');
*/
/*try{
throw 'Oh no';
throw new Error('Oh no');
}catch(error) {
  console.log(error);
}*/

//Comments: single line

/* multiline
  comments 
*/
/*
console.log("normal msg");
console.error("error message");
console.debug("Debug mesage");

console.table([[1,2], ['hello', 'world']]);


console.count('key');
console.count();
console.count();

console.countReset('key');
console.count();

console.time('key');

for(let i=0; i< 100000; i++){
  
}
console.timeEnd('key');

console.time();

for(let i=0; i< 100000; i++){
  
}
console.timeEnd('key');

function foo(){
  console.trace();  
}

*/

//'use strict'
x = 5;

function foo() {
  "use strict";
  y = 5;
}

foo();
