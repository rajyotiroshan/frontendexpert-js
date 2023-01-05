//select some dom ele to lisen evt on tethem
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
 */
function onClick(evt) {
  console.log("btn clicked");
  console.log(evt.target);
  btn.removeEventListener("click", onClick);
}

btn.addEventListener("click", onClick);
//btn.removeEventListener("click", onClick);

//common events.
