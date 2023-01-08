//timers: broder category
// interval- > cb call repeatedly
// serTimeout : delay execution
// requestAnimationFrame : cb right before browser repain,  for every frame run cb

const start = document.getElementById("start");
const stop = document.getElementById("stop");
const count = document.getElementById("count");

start.addEventListener("click", startTime);
stop.addEventListener("click", stopTime);

/* let timerID;
function startTime() {
  //window.setInterval
  // by default if func not defined explicitely, look inside window
  timerID = setInterval(() => {
    count.textContent++; //convert to number add 1 -> string
  }, 1000);
}

function stopTime() {
  clearInterval(timerID); // timerID -> null => does nothing
}


let timeoutID = setTimeout(()=>{
    console.log("timeout");
}, 1000);

//even for 0s delay it will run
clearTimeout(timeoutID); //since immediately run setTimeout cb won't run
//clearInterval(timeoutID); alo work
 */
//animation frame
//like interval but run per frame -> 60/frae but depends on user system

let animationFrameID;

//does same as timestamp
/* setTimeout(() => {
  console.log(performance.now());
  console.log(Date.now()); //ms since jan 1st 1970
}, 1000); */

const date1 = new Date(1992, 2, 2, 9, 25, 10, 30); //ymdhms // more consistence, readable
const date2 = new Date('March 2, 1992');
console.log(date1);
console.log(date2);
console.log(date1.getMonth());
console.log(date1.getDate());
console.log(date1.getDay());
console.log(date1.getHours());
console.log(date1.getMinutes());
console.log(date1.getMonth());
console.log(date1.getMonth());
date1.setMonth(3);
console.log(date1.getMonth());
console.log(date1);


function startTime(timesstamp) {
  console.log(timesstamp); //amount of ms since frame is loaded when the animation frame is loading.
  count.textContent++;
  animationFrameID = requestAnimationFrame(startTime);
}

function stopTime() {
  cancelAnimationFrame(animationFrameID);
}
