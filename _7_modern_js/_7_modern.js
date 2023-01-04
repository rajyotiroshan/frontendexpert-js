// Welcome to our Playground!
const arr1 = [1, 2, 3, 4].map(double);
function double(num){
  return num*2;
}
//console.log(arr1);
//const arr2 = [5, 6, 3, 4].map( (num) =>{return num *2});
const arr2 = [5, 6, 3, 4].map(num => num * 2); // if 1 param -> no {} , no return
//if only one state
//console.log(f, s);;

//
/*
const arr3= [42,4];

const double = arr.map(double);
const double = num => num*2; // can not be hoisted
*/

//2. Destrucuring Assignment
const arr4 = [1,2,3,4];
const f = arr4[0];
const s = arr4[1];
//console.log(f, s);

//but, can do, destructuring
const [f1, s1] = arr4;
//console.log(f1, s1); //f1->1, s1->2
//console.log(arr4); //not changed

//getg rest values. ;;;rest operator (...)
const [f2, s2, ...restArr] = arr4;
//console.log(f2, s2);
//console.log(restArr);
//console.log(arr4);


//with obj

const person = {
  name: 'Corner',
  web: 'FrontendExpert'
};

const {name} = person;
//console.log(name);
//console.log(person);

//rename
const {name: fName} = person;
//console.log(fName);

// rest 

const {web: webName, ...restObj} = person
//console.log(webName);
//console.log(restObj);

// destruc with defa value if not exst

//const {web: web1, ...restObj1, company="rajan"} = person ;// rest element must be last element
const {web: web1,company="rajan", ...rest1} = person ;
//console.log(company);
const p1 = {
  company1: "kumar"
}
const {web: web2,company1="rajan", ...rest2} = p1 ;
//console.log(company1); // kumar
//console.log(web2); //undefined no error

//destructure when passing obj as a param

function pName({name, add}){
  //console.log(name, add);
}

pName({name: "ss", add: "dsd", ae: "DS", d:"dsd"});
// spread operator
//arr -> seperate into value

/*
let arr5 = [1,2,3,4];
arr5 = [1,2,3];
arr5 = [1,2];
arr5 = [1];
function add(x, y){
  console.log(x+y);
}
*/
//add(arr5[0], arr5[1]);
//add(...arr5); // all 4 will be passed to add, but 2nd to will be ignored

//case 2
const arr6 = [1,2,3,4];
const arr7 = [5,6,7];

const combined = [...arr6, ...arr7]; //new arr with value from both arr

//console.log(combined);

// but can add more value than just 2 arr

const c1 = [0,1, ...arr6, 4.5,"raj", ...arr7];
//console.log(c1);

//case 3
//for taking indefinite param for a function

/*
const p2 = [2,3,4,5,6,7];

function logParam(x, ...params) {
  console.log(x);
  console.log(params);
  
}

logParam(1);
logParam(1,3,4,5)
*/

//Template literals
const n1 = 'John'; //undefined;//null;
//console.log('Hello ' + n1);

//console.log(`Hello ${name}`); //cocatenation -> template literal

//default to a var

//const n2Def = name != null ? name : "Def Name";
//Nullish Coalescing
const n2Def = n1 ?? 'Defa name';
//console.log(n2Def);

//optional chaining
let p3 ={
  company: {
    website: 'Algo'
  }
}

//
 p3 ={
  company: {
    //website: 'Algo'
  }
}

 p3 ={
  //company: {
    //website: 'Algo'
  //}
} // produce error -> p3.company -> undefined


//
//console.log(p3.company.website);
//optional chaining
//this saying that-> if person -> undeifned => (person?.company) -> undefined and if 
//(person?.company -> undefined) => (person?.company?.website) -> undefined
console.log( p3?.company?.website ?? 'Foo' );

console.log( p3?.company?.website ?? 'Foo' );


 p3 ={
  company: {
    //website: 'Algo'
  //}
}
 }
 p3 ={
  company: {
    website: 'Algo'
  }
}

console.log( p3?.company?.website ?? 'Foo' );

// Short circuit evaluation

const sRuncode = true;
function logWorld() {
  console.log('Hwllo World');
}

if(sRuncode){
  logWorld();
}

//
const flag = true;
flag && logWorld();

function logWorld1() {
  console.log('Hwllo Worldhhh');
}
(!flag) && logWorld1();

flag || logWorld(); //not run
!flag || logWorld1(); //run