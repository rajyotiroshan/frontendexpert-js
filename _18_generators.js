//

//Note: need to be an std functions.
function* getNumbers() {
  yield 1;
  yield 2;
  yield 3;
  return 4;
}

const gen = getNumbers();

//console.log(gen.next()); // {value:1, done: false/true}
//console.log(gen.next());
//console.log(gen.next());
//console.log(gen.next()); //{value:4, done: true}

//Ex 2
/* function* genNum1(count){
    for(let i=0; i<count; i++){
        yield i;
    }
}

const gen1 = genNum1(3);
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next()); */

//Ex 3
/* function* genNum2(count){
    for(let i=0; i<count; i++){
        yield i;
    }

    return 10; //ignored by for
}


const gen2 = genNum2(4);

for(let value of gen2){ // ignore return statment--> so not recommended
    console.log(value);
} */

//Ex 4
// function* genNum3(count) {
//   const value = yield 0;
//   yield value + 3;
// }

// const gen3 = genNum3(5);
// console.log(gen3.next()); // return {0, false}
// console.log(gen3.next(5)); // 5 + 3 // Note:: make 5 be the return value of the previous yield i.e value = 5;

//Ex 5
/* function* genNum3(count) {
    const value = yield 0;
    yield value + 3;
  }
  
  const gen3 = genNum3(5);
  console.log(gen3.next()); // return {0, false}
  //console.log(gen3.return(5));//gen3 already returned.
  console.log(gen3.throw(new Error("There was an error"))); //halt execution.
  console.log(gen3.next(5)); */// wont get called.

  //Ex 6: Gen func have called each other
  function* genNum5() {
    yield 1;
    yield 2;
  }

  function* genNum6() {
    yield 3;
    yield 4;
  }
  function* genNum4() {
    yield* genNum5(); //keep using gennum5 until it finishes
    yield 2.5;
    yield* genNum6(); //then move on to tis gen
  }
  
  const gen4 = genNum4();

 /*  console.log(gen4.next());
  console.log(gen4.next());
  console.log(gen4.next());
  console.log(gen4.next());
  console.log(gen4.next());
  console.log(gen4.next()); */

  for(let value of gen4) {
    console.log(value);
  }





