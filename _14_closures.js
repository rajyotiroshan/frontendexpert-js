/* let g = 5;
function logNum() {
  const l = 1;
  console.log(g + l);
}
//lexical scoping : func has access to their parent scope.
// logNum  -> g
//closure: there's access in a function to the outer scope within the inner function.
//created when the func is declared.
// formally:  a closure is a function + lexical env it was declared in. env =(local identifier + ref to the parent env)
//func - executed -> local -> parent env.

g = 10;
logNum(); */

/* function example() {
    const num = 5;

    function logNum(){
        console.log(num);
    }

    logNum();
}

example();
 */
/* function example() {
    const num = 5;

    function logNum(num){
        console.log(num); //local scope
    }

    logNum(10); // 10 
}

example(); */

/* function example() {
    const num = 8;

    return function (){
        console.log(num); 
    } 
}

const inF = example(); //already run and execution completed
// but created closure at declaration and has access to num.
inF(); // */

//useful app :: pvt methods.

/* function makeFunc() {
  let pvtNum = 0;

  function pvtInc() {
    pvtNum++;
  }

  return {
    logNum: () => console.log(pvtNum),
    inc: () => {
      pvtInc();
      console.log("increamented");
    },
  };
}

const { logNum, inc:increament  } = makeFunc();
const {logNum: l1, inc: i2} = makeFunc();
logNum();
increament();
logNum();

l1(); //have diff parent env.
i2();
i2();
i2();
l1();
 */
//interview question example
/* for (let i = 0; i < 3; i++) {
  console.log(i);
} */

/* for (let i = 0; i < 3; i++) {// 0,1 ,2
  setTimeout(() => { //created a closure, and still has access to i even after for loop ended.
    console.log(i);
  }, 500);
} */

for (var i = 0; i < 3; i++) {
  //3, 3, 3
  setTimeout(() => {
    //created a closure, and still has access to i even after for loop ended.
    console.log(i);
  }, 500);
}

// let :: bloc scope, each time a new var created , in each clousure which is created each iteration
// var :: same i available for each iteration,
//have 3 diff closure -> but pointing to the same vriable

console.log(i); // i in global scope hence has access to the var i.
