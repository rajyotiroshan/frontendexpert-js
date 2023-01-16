const btn = document.querySelector("button");
//debug
//console.log(btn);
btn.addEventListener("click", moveRight);

/* function moveRight(evt) {
  //console.log("clicked");
  const circle = document.querySelector("#circle");
  const { left } = getComputedStyle(circle);
  //console.log(parseInt(left));
  circle.style.left = parseInt(left) + 10 + "px";
} */

//debug without console.log
function moveRight(evt) {
  //debugger;  //open js debugger with src code in chrom devtools.
  const circle = document.querySelector("#circle");
  const { left } = getComputedStyle(circle);

  circle.style.left = left + 10;
}
