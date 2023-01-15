/**
 * Map,WeakMap, Set, WeakSet
 */

//array as an stack
/* const stack = [];

stack.push(1);
stack.push(2);
//[1,2]
//console.log(stack.pop()); //2

//queue: fifo
const q = [];
q.push(1);
q.push(2);
//[1,2]
//console.log(q.shift());// less efficient than pop. //1

//Maps Dictionary
const map = new Map();
map.set("test", 123); //key can be anything unlike obje where key -> string/Sybmol
map.set(10, "ten");

console.log(map.get(10)); //ten

console.log(map.size); //2

console.log(map.has(10)); //true
console.log(map.has("10")); //false

map.set({}, 42);
console.log(map.has({})); //fasle

const obj = {};
map.set(obj, 42);

console.log(map.has(obj)); //true

map.delete(10);

//map.clear();("//removes everything from the map");
console.log(map.size); */

//iterating through a map
/* for([key, value] of map) {
    console.log(key, value);
}

map.forEach((value, key)=>{
    console.log(key, value);
}) */
/* 
const iter = map.entries();
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);

const keys = map.keys();
console.log(keys.next().value);
console.log(keys.next().value);
console.log(keys.next().value);
console.log(keys.next().value);

const value = map.values();
console.log(value.next().value);
console.log(value.next().value);
console.log(value.next().value);
console.log(value.next().value); */

//map ->  key anything, iterate in insertion order.
//not recommended to rely on order in object. but object do have an order
//seding obj to server via json, need to useobject
//cz map is not serializable to json.
//manually need prototype chain => object not map.
//

//
/* const map1 = new Map([["test", 123], [10, "ten"]]);
const val = map1.entries();
console.log(val.next().value);
console.log(val.next().value);
console.log(val.next().value); */

/**
 * Set()
 */



