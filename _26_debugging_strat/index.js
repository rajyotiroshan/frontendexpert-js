const btn = document.querySelector("button");

btn.addEventListener("click", moveRight);

function moveRight(evt){
    const circle = document.querySelector('#circle');
    const {left} = getComputedStyle(circle);
    circle.style.left = left + 10;
}