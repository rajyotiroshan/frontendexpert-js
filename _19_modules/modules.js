//case 1
/*
frontendExpert();
const conner = new Person("Conner");
conner.sayHello();
//polutting the global namespace..
//added all vars to the global nmesspace-> accessible from everywhere.

// but want scoped locally, file scope.
//amazon-> no naming conflict from diff file
// or framework-> naming conflicts with file and local
*/

//case 2
///////----->>>>>
/*
function myModule() {
  frontendExpert();
  const conner = new Person("Conner");
  conner.sayHello();

  //not globally scoped, but new indentifier in the global scope
  //need to call this to run
}

myModule();
*/

//so solution -> anonymous but can't call -> IIFE

/* (function () {
  frontendExpert();
  const conner = new Person("Conner IIFe");
  conner.sayHello();
})(); */

//worked for the simple case

//now use type="module" in script tag -> instead of defer, automatically added.

//so remove IIFE
/*
frontendExpert();
const conner = new Person("Conner IIFe");
conner.sayHello();
*/
// now also the issue exist.
// since those are modules and not accessible ..it is not globally scoped
// first use import

//import * as helpers from "./helpers";
/* import { algoExpert, frontendExpert} from './helpers.js';
//import * as person from "./Person";
import {Person} from './Person.js'; //here without extension not worked
frontendExpert();
algoExpert();
const conner = new Person("Conner IIFe");
conner.sayHello(); */

/* import { algoExpert as algo, frontendExpert as front } from "./helpers.js";
//import * as person from "./Person";
import { Person as P } from "./Person.js"; //here without extension not worked
front();
algo();
const conner = new P("Conner IIFe");
conner.sayHello(); */

/* import { algoExpert as algo, frontendExpert as front } from "./helpers.js";
//import * as person from "./Person";
import { Person as P } from "./Person.js"; //here without extension not worked
front();
algo();
const conner = new P("Conner IIFe");
conner.sayHello(); */
/* 
import algo from "./helpers.js";
//import * as person from "./Person";
import { Person as P } from "./Person.js"; //here without extension not worked
algo();
const conner = new P("Conner IIFe");
conner.sayHello(); */

/* import algo, {frontendExpert} from "./helpers.js";
//import * as person from "./Person";
import P from "./Person.js"; //here without extension not worked
algo();
frontendExpert();
const conner = new P("Conner IIFe");
conner.sayHello(); */

//dynamic import

//some conditional import

//import {frontendExpert} from "./helpers.js";
const shouldSayFront = true;
//frontendExper();

if (shouldSayFront) {
  //  frontendExpert(); //here simple but if coming from server
  //so
  //const importedObj = await import('./helpers.js');
  const { frontendExpert } = await import("./helpers.js");
  frontendExpert();
}
