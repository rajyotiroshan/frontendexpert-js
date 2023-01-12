// create a new func:: transform a function st each func para is a func calls

function sum(a, b, c) {
  return a + b + c;
}

//console.log(sum(1, 4, 10));
//Goal:: --> sum(1)(4)(10);

//curried version

/* function curriedSum(a) {
  return function (b) {
    return function (c) {
      //console.log(`a: ${a}, b:${b}, c:${c}`);
      return a + b + c;
    };
  };
} */
//console.log(curriedSum(10)(13)(15));
function curry(func) {
  return function (a) {
    return function (b) {
      return function (c) {
        //console.log(`a: ${a}, b:${b}, c:${c}`);
        return func(a, b, c);
      };
    };
  };
}

const curriedSum = curry(sum);
console.log(sum(11,22,33));
console.log(curriedSum(11)(22)(33));

function substract(a,b,c){
    return a-b-c;
}

const curriedSub = (func) => (a) => (b) => (c) => {return func(a-b-c)};

const currySub = curriedSub(substract);

console.log(substract(1,2,3));
console.log(currySub(1)(2)(3));