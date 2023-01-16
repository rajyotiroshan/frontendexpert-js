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

/* const set = new Set();
//or
const set2 = new Set([123, 459]);
set.add(123);
set.add(356);

//no get methd, nothing to get
//no value to get

console.log(set.has(123)); //true
console.log(set2.has(456)); //true

set2.delete(123);
console.log(set2.has(123)); //false

//iteration

for (const value of set) {
  console.log(value);
}

set.forEach((value) => {
  console.log(value);
});

let iter = set.values(); //or set.entries() ; [val, key] ; //set.keys()
console.log(iter.next().value);

let iter1 = set2.keys();

console.log(iter1.next().value); */

//remove duplicate from array.
/* const arr = [1, 2, 2, 3, 3, 4, 5, 6, 8, 8, 9];
//console.log(Array.from(new Set(arr)));

//WeakSet

const weakSet = new WeakSet(); //works just like set, simliraly weakmap
//keys can only be objects in weakmap
//values can only be objects in a weakset
//weakSet.add(123); //TypeError: Invalid value used in weak set

//but what actual aim:
//weakset doesnot prevent garbage collection.
//if the object get garbage collceted it will be actually removed from the
//weakset/weakmap

let obj = {};
(function () {
  //const obj = {};
  weakSet.add(obj); //could be garbage collected.
})();

//ws cannot be iterated and no actual way to check the size.

console.log(weakSet.size); //woudnot worked //undefined

//only way to know is has()

console.log(weakSet.has(obj)); */

//map,set,weakset,weakmap are provided by js.
//other than that need to implement
//or get from alibrary.

//LinkedList.
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class LinkedList {
    constructor(){
        this.head = null;
    }


    addStart(value){
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
    }

    addEnd(value) {
        const node = new Node(value);
        let curr = this.head;

        if(curr == null){
            this.head = node;
            return;
        }

        while(curr != null && curr.next !=null){
            curr = curr.next;
        }
        curr.next = node;
    }
}


const list =new LinkedList();
list.addStart(1);
list.addStart(2);
list.addEnd(3);
list.addEnd(4);

console.log(list.head.next.next.next);
















