/* window.addEventListener("DOMContentLoaded", main);
//window.addEventListener("load", main);

// load: wait for everything to finish loading img,
// DOMContentLoaded : only wait to create the dom.
// so if larger img is to load it will give error.
function main() {
  const button = document.querySelector("#btn");
  button.addEventListener("click", btnclicked);
  document.querySelector("#solar").style.border = "5px solid lightblue";
  function btnclicked(evt) {
    document.body.style.backgroundColor = "lightblue";
  }
} */

/* const button = document.querySelector("#btn");
button.addEventListener("click", btnclicked);
function btnclicked(evt) {
  document.body.style.backgroundColor = "lightblue";
} */

const button = document.querySelector("#btn");
button.addEventListener("click", btnclicked);
function btnclicked(evt) {
  document.body.style.backgroundColor = "lightblue";
}
