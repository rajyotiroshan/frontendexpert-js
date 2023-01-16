const btn = document.querySelector("button");
//debug
//console.log(btn);
btn.addEventListener("click", moveRight);

function moveRight(evt) {
  //console.log("clicked");
  const circle = document.querySelector("#circle");
  const { left } = getComputedStyle(circle);
  //console.log(parseInt(left));
  circle.style.left = parseInt(left) + 10 + "px";
}
