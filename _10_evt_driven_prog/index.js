/* //select some dom ele to lisen evt on tethem
const btn = document.querySelector("button");
//btn.addEventListener("click", onClick);

/* function onClick(evt) {
  //console.log(evt);
  console.log("btn clicked");
  console.log(evt.type);
  console.log(evt.target);
  console.log(this);
  //Note: this -> whatever on the addEventListener is called
  // evt.target -> whatever on the evt happen
} */

//document.body.addEventListener("click", onClick);
//for above this -> body
//evt.target -> button

//event propagation: capturing phase -> no evt listener is called
//evt-> starts root of the dom ->..-> until to the actual element on which the evt happen

//2nd phase : target phase
// here move down the dom to the actual element on which evt occurs

//3rd phase Bubbeling phase, evt is called on all the elment up the dom
//going back up the DOM

//evt.stopPropagation(); //stop the bubbleing phase -> only
/*
function onClick(evt) {
  //evt.stopPropagation(); //no body click fired
  //console.log(evt);
  console.log("btn clicked");
  console.log(evt.type);
  console.log(evt.target);
  console.log(this);
  //Note: this -> whatever on the addEventListener is called
  // evt.target -> whatever on the evt happen
}

//document.body.addEventListener("click", onClick, true);
// 3rd -> treue -> capture in the capturing phase instead of bubbling phase.

//Note ; not all event propagated, like scroll

//evt.preventDefault()
// stop browser default for an evt.
/* const abortController = new AbortController();

btn.addEventListener("click", onClick, {
  capture: true, //in capture phase
  once: true, //only once
  passive: true, //not going to call evt.preventDefault(), like in touchStart and touchMove, tells browser to do theor default work
  signal: AbortController.signal,
});
abortController.abort();
function onClick(evt) {
  //evt.stopPropagation(); //no body click fired
  //console.log(evt);
  console.log("btn clicked");
  console.log(evt.type);
  console.log(evt.target);
  console.log(this);
  //Note: this -> whatever on the addEventListener is called
  // evt.target -> whatever on the evt happen
}
 */ /*
function onClick(evt) {
  console.log("btn clicked");
  console.log(evt.target);
  btn.removeEventListener("click", onClick);
}

btn.addEventListener("click", onClick);
//btn.removeEventListener("click", onClick);
 */
//common events.

//mouseclick : evt fired when mouse is clicked and released
//-> both mousedown and mouseup
//only left btn on the mouse

//mousedown : fired when mouse down, do not wait for release
//both buton
//mouseup: when mouse is released

/* window.addEventListener("keyup", (evt) => {
  console.log(evt.code);
}); */

//keypress -> deprecated

//scrollable
/* 
const scrollable = document.getElementById("scrollable");
scrollable.addEventListener("scroll", (evt) => {
  console.log(evt.target.scrollTop); // how far down scrolled
});

scrollable.addEventListener("mouseenter", (evt) => {
  console.log(evt.pageX, evt.pageY); // how far down scrolled
});

scrollable.addEventListener("mouseenter", (evt) => {
  console.log(evt.pageX, evt.pageY); // how far down scrolled
});

scrollable.addEventListener("mousemove", (evt) => {
  console.log(evt.pageX, evt.pageY); // how far down scrolled
}); */

/* const btn = document.querySelector("button");
const scrollable = document.querySelector("#scrollable");
btn.addEventListener("dragstart", (evt) => {
  console.log(evt);
});

scrollable.addEventListener("drop", (e) => {
  scrollable.prepend(btn);
});

scrollable.addEventListener("dragover", (e) => {
  e.preventDefault(); //allow call of drop evt
});

const back = document.querySelector("#back");

back.addEventListener("drop", (e) => {
  back.prepend(btn);
});

back.addEventListener("dragover", (e) => {
  e.preventDefault(); //allow call of drop evt
}); */

/* document.body.addEventListener('drop', e=>{
  document.body.append(btn);
})

document.body.addEventListener('drogover', e=>{
  e.preventDefault();
}) */

//event delegation
const btn = document.querySelector("button");
const scrollable = document.querySelector("#scrollable");

//evt to run on container
//all element of container have same evt listener

scrollable.addEventListener("click", (evt) => {
  if (evt.target !== this) {
    //click is not on the container
    evt.target.textContent = "Clicked";
  }
});
