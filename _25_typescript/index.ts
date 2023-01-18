//ts: superscript of js
//all js valid
//add type

/* let test = 123; //ts assuming this as peermanent number
test = '456'; //Error: type string is not assigned to a number 
console.log(test); */

//defining type: number, string , any
//
//let test:any = 123; //ts assuming this as peermanent number
/* let test: number | string |object = 123;
test = '456'; //Error: type string is not assigned to a number 
test = {}; */
//console.log(test);

//custom type

/* type NumStr = number | string;
let test1: NumStr = 123;
test1 = '456';
//console.log(test1)

//state
type State = 'off' | 'on';

let test3:State = 'off';
test3 = 'on'; */
//console.log(test3);

//enum : enumerated value , for a state

/* enum State2 {
    On = 'on',
    Off = 'off'
}

let test4: State2 = State2.Off;
test4 = State2.On
//console.log(test4)


enum State3 {
    On,
    Off
}

let test5: State3 = State3.Off;
test5 = State3.On */
//console.log(test5)

//
/* function add(x: number, y:number):number {
    console.log(x+y);
    return x+y;
} */

/* function add(x: number, y:number):void {
console.log(x+y);
}
add(1,2); */
//console.log(add(1,3));

//Objects:
/* interface Instructor {
  name: String;
  course: String;
}

const conner: Instructor = {
  name: "Corner",
  course: "Frontendexpert",
  //age: 24, gives error, since not included in the Instructor type
};
//this seems fine
const clement = {
  name: "Clement",
  course: "algooexpert",
}; */
/* interface Instructor {
  name: String;
  course: String;
  age?: number; //age is optional but ust be a number
}

const conner: Instructor = {
  name: "Corner",
  course: "Frontendexpert",
  age: 24,
  //age: '24' // gives an error
};
//this seems fine
const clement = {
  name: "Clement",
  course: "algooexpert",
};
 */
/* interface Instructor {
  name: string;
  course: string;
  age?: number;
}
//class implements
class AlgoExpertInstructor implements Instructor {
  name: string;
  course: string;
  constructor(name: string) {
    this.name = name;
    this.course = "algoexpert";
  }
}

//string: primitive , String : js class
const tim = new AlgoExpertInstructor("Tim");

console.log(tim); */

/**
 * Generics
 */
