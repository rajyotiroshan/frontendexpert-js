// Welcome to our Playground!
//const arr = [1,2,3]; //do not care about types for an elements.
/*
const arr = new Array(1,2,3);
const arr1 = new Array(5);// 5 empty place, empty array of length 5
arr1.fill(0); //in-place 
console.log(arr1);

const arr2 = new Array();
arr2.length = 10; //arr.length is setable
arr2.fill(1);
console.log(arr2);
console.log(arr2.length);

//length to truncate the array

arr2.length = 5; // after 5th ele ,,completely removed

console.log(arr2);
arr2.length  = 10;
console.log(arr2); // the last 5 elemetn is completely removed
console.log(arr2.length);
*/

//find if an element in the array

/* READ
const arr3 = [1,2,3,3,0,2];
arr3[1] = 10;
console.log(arr3[1]);

console.log(arr3.includes(3)); //true or false
console.log(arr3.indexOf(3)); //left to right
console.log(arr3.lastIndexOf(3)); //right to left

*/
//create, update delete
//adding removing from last position
/*
arr3.push(4);
console.log(arr3);

arr3.pop();
arr3.pop(); //return removed element
//calling pop on an empty arr does not give any error.
console.log(arr3);
console.log(arr3.pop());

arr3.push(9,6,7); //add these elements as well in order at last

console.log(arr3);

console.log(arr3.pop());

console.log(arr3);
*/
//update delete from first position
//adding removing from the first place
/*
const arr4 = [1,2,3,4];
arr4.unshift(4,5,6);//far less efficient than push // in-place

/*  Explanation:: 
  for push: [1,2,3]
  1. extends length 
  2. add at the end
  for unshift:
  1. [4,2,3] //but lost 1
  2. so iterate entire array one place to the right then add value at the start
  3. O(n)
  */ /*
console.log(arr4);

console.log(arr4.shift()); // in-place

console.log(arr4);
 console.log(typeof arr4); // what object..yes most thing in js is object.
//but to check if an array

console.log(Array.isArray(arr4));

//or
console.log(arr4 instanceof Array);

*/
//Deleting and replacing in between an array
const arr5 = [1, 2, 3, 6, 7];

//splice(sIndex, nOfElToDel)
//arr5.splice(1); // delete from specified index to last
//arr5.splice(1, 2); //started at index 1 delete 2 elements
//arr5.splice(1,2,"Hello","World"); //replace:
//arr5.splice(1,2, "Hello");
//arr5.splice(1,2,"Hello", "World" , "!");//
//arr5.splice(1,0,"HEllo","Wolrd");// without deleting insertion
//console.log(arr5);

//slice(SIndInclusinve, eIndExclusive) ;// like substr for str but for arr
//not in-place
/*
const arr6 = arr5.slice(1,2);
console.log(arr6);
console.log(arr5);

//arr.concate(toconArr); // not inplace @r new Arr

const arr7 = arr5.concat(["hello", 'world']);
console.log(arr7);
console.log(arr5);

//arr.reverse(); //in-place
const arr8 = [1,2,3,4,5];
console.log(arr8);
arr8.reverse();
console.log(arr8);

//arr.join(delemeter) ;// combine all the elemetns in an arr into single arr
//@r new array
const arr9 = arr8.join(", ");
console.log(arr9);
console.log(arr8);
*/
//iterating over an array
const arr10 = [1, 6, 2, 8, 3, 9];

//opt 1
//for(let i=0; i<arr10.length; i++){
// console.log(arr10[i]);
//}

//opt 2
//con: not index
// let i=0;
//or(const value of arr10){
//  console.log(value);
//  i++;
//} // but better to use for loop

//opt 3
//arr10.forEach(function(value, index, arr) {
//  console.log(index, value, arr); // but can use arr10 directly
//});

//arr10.forEach(function(value, index, arr) {
// console.log(index, value,this); // but can use arr10 directly
//}, {num:10});

//opt 4 map

//const arr11 = arr10.map(function(value, index, arr) {
//console.log(arr);
//return value + index + this.num;
//}, {num: 10});

//console.log(arr11);
//console.log(arr10);

//filter: removes any element from new arr based on filter/cond
const arr12 = arr10.filter(
  function (value, index, array) {
    return value > this.num;
  },
  { num: 5 }
);
//console.log(arr10);
//console.log(arr12);

//arr.find() ; // first value that matched the cndition
const foundValue = arr10.find(
  function (value, index, array) {
    return this.num < value;
  },
  { num: 10 }
);

//console.log(foundValue);

const arr13 = [5, 6, 8, 5, 2, 8];
const valueInd = arr13.findIndex(
  function (value, index, array) {
    return this.num < value;
  },
  { num: 7 }
);

//console.log(valueInd);
const arr14 = [5, 6, 3, 5, 2, 0];
const isgt7 = arr14.every(
  function (value /*, index, array*/) {
    return this.num > value;
  },
  { num: 7 }
);

//console.log(isgt7);
const arr15 = [5, 6, 3, 5, 2, 0, 8];
const isSomegt7 = arr15.some(
  function (value /* index, array*/) {
    return this.num < value;
  },
  { num: 7 }
);

//console.log(isSomegt7);

//

//note :: can't bind this val to an external obj
//start from left to right.
console.log("Reduce");
const sum = arr15.reduce(function (acc, curr /*, ind, array*/) {
  console.log("here", acc);
  return acc + curr;
}, 0); // def acc-> first val, may be ommited

//console.log(sum);

// start from right to left.
const diff = arr15.reduceRight(function (acc, curr /*, ind, array*/) {
  return acc - curr;
}); // def acc-> first val, may be ommited

//console.log(arr15);
//console.log(diff);

const arr16 = [5, 7, 3, 0];
arr16.sort(); // in-place , increasing
console.log(arr16);

arr16.sort(function (a, b) {
  return b - a;
});

console.log(arr16);

arr16.sort(function (a, b) {
  //3 always 1st
  if (a === 3) {
    return -1;
  }

  if (b === 3) {
    return 1;
  }
  return a - b;
});

console.log(arr16);

console.log("Reduce with empty error");

let s = [].reduce((acc, curr, ind) => {
  return acc + curr;
});

console.log(s);
