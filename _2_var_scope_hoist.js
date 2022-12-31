// Welcome to our Playground!
/* ex-1
console.log('letNum: ', letNum);
console.log('varNum:', varNum);

let letNum = 10;
var varNum = 10;
*/

/* ex-2
function test(){
  console.log('letNum: ', letNum);
  console.log('varNum:', varNum);
  let letNum = 10;
  var varNum = 10;
}
*/

//ex-3
/*
function test(){
   if(true) {
     let letNum = 10;
     var varNum = 10;

   }
  console.log('varNum:', varNum);
  console.log('letNum: ', letNum);
}
*/
/*
function test(){
   if(true) {
     let letNum = 10;
     var varNum = 10;

   }
  console.log('varNum:', varNum);
  console.log('letNum: ', letNum);
}
*/
function test() {
  const c1 = 0;
  let l1 = 0;

  const arr = [1, 2, 3];
  //arr = [1,2,3,40]; //error
  arr.push(4);
  console.log("arr", arr);

  l1 = 20;
  c1 = 4;
  console.log("constnum:", c1);
  console.log("letNum: ", l1);
}
test();
