/* //Storage storage
//-> Diiferent way to store info in the brower
//persist: user closes tab, comes back stll have signed in, shopping cart info there

//Cookie
// string ;key and value

console.log(document.cookie); //containes all the diff cookie set by this page
//can be set by server,sent cokkie with the page and js
//has getter and setter func
//document.cookie = 'user=Conner';
document.cookie = "course=FrontEndExpert"; // will log out both previous and this one
console.log(document.cookie);

//prev wont deleted unless expires.
//default is when browse tab close, but can be changed.
//can be updated
document.cookie = "user=Rajan";
console.log(document.cookie);

//Deleting a cookie
//there is no delete like func.
//but can set cookie to be expired immedialty
//add semicolor at the end of the value;

document.cookie = `user=Rajan; expires=${new Date().toUTCString()}`;
document.cookie = `course=FrontEndExpert; expires=${new Date().toUTCString()}`;
console.log(document.cookie);
//

//another way
document.cookie = `name=Rajan; max-age=0`;
document.cookie = `class=9th; path/cookiePath`;
//secure: on https only wok over https,
//saesite=stict; => dont share cross oigin
document.cookie = `rollno=112; secure; samesite=strict`;
console.log(document.cookie);
//get value for a cookie

const course = document.cookie
  .split("; ")
  .find((cookie) => cookie.startsWith("class="))
  .split("=")[1];
console.log(course);
 */
/* const course = document.cookie;
console.log(course);

console.log(course.split("; ").find((c) => c.startsWith("rollno")).split('=')[1]);
 */

//lib for cookie: create func for set, get
//web storage api:
//easier to work with, set,get
//get little more space.
//localstorage doesnot expire abut session store expire after a session
//ls/ss -> set by js
///cookie set by server
/* localStorage.setItem("user", "rajan");
localStorage.setItem("course", "feEx");
console.log(localStorage.getItem("user"));
//localStorage.removeItem('user');
console.log(localStorage.getItem("user"));

//localStorage.clear();

console.log(localStorage.getItem("course")); */

//sessionStorage
//same as sessionStorage.
/* sessionStorage.setItem("user1", "rajan1");
sessionStorage.setItem("course1", "feEx1");
console.log(sessionStorage.getItem("user1"));
//sessionStorage.removeItem('user');
console.log(sessionStorage.getItem("user1"));

//sessionStorage.clear();

console.log(sessionStorage.getItem("course1")); */

//IndexdDB
//more complex storage system,,,
//more complex data than simple key value pair
//use indexed DB
//store js obj.
//can storage entire file. but nt any SQL
//(name, version)
const request = indexedDB.open("dbname", 1); //open/ create a new db
/* request.addEventListener("upgradeneeded", (event) => {
  //req creating a new db, or have a new verion
  const db = event.target.result;
  const store = db.createObjectStore("users", { keyPath: "id" }); //keyPath -> primry key for the user
  //every user will have a unique idetifier
  store.createIndex("name", "name");

  //ad data

  store.add({
    id: 0,
    name: "Rajan",
    course: "FrontEndExpert",
  }); //represent an record

  store.add({
    id: 1,
    name: "Samit",
    course: "AlgoExepert",
  });
}); */

//connect to a db that already exist
//success evt: run when connect to a db.
request.addEventListener("success", (event) => {
  //req creating a new db, or have a new verion
  const db = event.target.result;

  //use transaction to update the db
  db.transaction(["users"], "readwrite").objectStore("users").add({
    id: 2,
    name: "samit",
    course: "ssc",
  }); //doeanot any thing from db
  //deleting from db
  db.transaction(["users"], "readwrite")
  .objectStore("users")
  .delete(1); //index

  const req = db.transaction(["users"], "readwrite")
  .objectStore("users")
  .get(0); //index

  req.addEventListener('success', evt=>{
    console.log(evt.target.result.name);
  })

  

});
