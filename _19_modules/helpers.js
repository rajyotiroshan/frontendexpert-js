/*
 * function algoExpert() {
  console.log("AlgoExpert is the best!");
}

function frontendExpert() {
  console.log("FrontendExpert is the best!");
}
 */

/* (function () {
  function algoExpert() {
    console.log("AlgoExpert is the best!");
  }

  function frontendExpert() {
    console.log("FrontendExpert is the best!");
  }
})(); */

//but now these function is not accessible to others-> since not global
//now after adding type =module in the script tag can remove the IIFE around 2 functions

/* function algoExpert() {
  console.log("AlgoExpert is the best!");
}

function frontendExpert() {
  console.log("FrontendExpert is the best!");
}

//export {algoExpert, frontendExpert};
export { algoExpert as algoExpert1, frontendExpert as frontendExpert1 }; */


export default function algoExpert() {
    console.log("AlgoExpert is the best!");
  }
  
  export function frontendExpert() {
    console.log("FrontendExpert is the best!");
  }
  


