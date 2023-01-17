//Storage storage
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

/* const course = document.cookie;
console.log(course);

console.log(course.split("; ").find((c) => c.startsWith("rollno")).split('=')[1]);
 */

//lib for cookie: create func for set, get
