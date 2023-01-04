//to select ele
//all are on document obj
let secondLi = document.getElementById("second-li");
let fLi = document.querySelector("li");
let allLiItems = document.querySelectorAll("li"); // r@ NodeList ; iterator, but not all arr method available
//console.log(secondLi);
//console.log(fLi);
//console.log(allLiItems);

//
console.log(allLiItems.length);
allLiItems.forEach((l) => console.log(l));

//get an array from iterable then can use array methods.
Array.from(allLiItems).map((li) => console.log(li));

console.log(document.getElementsByClassName("fLi"));

console.log(
  document.getElementsByTagName("li") //HTMLcollection.
);

//Note: HTMLCollection(not have foreach) is not powerful as NODEList
//but can do Array.from(//htmlcollection).<arrmethod>();

//Editing this dom node.
//now in the first part we have seen how to access the DOM Node.
// now in this 2nd part we will look into how to edit the different property of a DOM Node
//like its style property, value, child, parent
//allLiItems[0].style.color = "red";
allLiItems[1].style.backgroundColor = "blue"; //since this is js code we cant just use blue it will be considered as an variable. hence need to juse as an string

//changing textcontent

allLiItems[2].textContent = "New list text 3";

//one interesting thing about list item
allLiItems[0].value = 5;

//changing DOM Node attribute
allLiItems[0].setAttribute("value", "7");
allLiItems[0].setAttribute("class", "blue");

//problem with above is that it will replace old class value with new one

//but other methods are available for these

//for class we have some special methods. since we are using class attribute frequently to add style dynamically based on user interaction.
allLiItems[2].classList.add("blue");
allLiItems[2].classList.remove("blue");
allLiItems[2].classList.toggle("blue"); // there -><- remove
allLiItems[2].classList.add("big");
allLiItems[0].className = "big blue";

//
//now we will create owr own dom node

const p = document.createElement("p");
//A new HTMLElement is returned if the document is an HTMLDocument, which is the most common case.
//Otherwise a new Element is returned.
//console.log(typeof p);

p.textContent = "Hello World";
const p2 = document.createElement("p");
p2.textContent = "2nd paragraph";
document.body.appendChild(p);
document.body.append(p2);
document.body.append("3rd paragraph"); //not add tag, just text
//document.body.appendChild("4th para will not work.0"); // only type of node or tag will take.
const p3 = document.createElement("p");
p3.textContent = "5th paragraph";
document.body.append(p3, "not a para 5th"); //text not creating a para, just adding to the dom

///
const p4 = document.createElement("p");
p4.textContent = "added at the start";
document.body.prepend(p4);
p4.classList.add("blue");
p4.classList.add("big");

const p5 = document.createElement("p");
const p5Text = document.createTextNode("Hello World");

p5.append(p5Text);

document.body.prepend(p5);

// accessing an element contents:
//using innerHTML
console.log(document.querySelector("ul").innerHTML);
/* const p6 = document.createElement('p');
p6.textContent = ""; */

document.body.innerHTML += `<p class="big blue">HTML Test String </p>`;

//clears out the entire element inside a container.
//document.body.innerHTML = '';  //can write script tag inside innerHTML and can do harmfull thing to the page.

//Adding elements in a loop

/* for(let i=0; i<=2; i++) {
    const parent = document.querySelector('ul');
    const li = document.createElement('li');
    li.textContent = `List item with i=${i}`;
    parent.append(li);
} */

//with above case for every iteration we are updating the dom and redering hapens
//it is kind of in efficient
const parent = document.querySelector("ul");

//const listItemToAdd = [];
const fragment = document.createDocumentFragment(); //only exist in js not in actual DOM

for (let i = 0; i <= 2; i++) {
  //every iteration browser has to render and pain
  const li = document.createElement("li");
  li.classList.add("big");
  li.classList.add("blue");
  li.textContent = `List item with i=${i}`;
  // listItemToAdd.push(li);
  fragment.append(li);
}

//parent.append(...listItemToAdd);
parent.append(fragment);
//removing a node

//allLiItems[0].parentNode.removeChild(allLiItems[0]);
//
//secondLi.remove();

//now look into the sizes of the dom
console.log(window.innerWidth, "And", innerHeight);

const liItems = document.querySelectorAll("li");
console.log(liItems[0].style.fontSize);
liItems[0].classList.remove("big");
console.log(window.getComputedStyle(liItems[0]).fontSize);

const scr = document.getElementById("scrollable");
console.log(scr.clientHeight); //content+padding
console.log(scr.offsetHeight); //conetn+padd+border+scrollbar

console.log(scr.scrollHeight); // cont+padd+border+total scrooled out of view content height

console.log(scr.offsetTop); //how far scrollable conent is from the top of the page.

console.log(scr.querySelectorAll("p")[1].offsetTop); // how far
//if parent container is not set to parent then the offset tis calculated from the parent element.

//scrolling
//automatically scroll the content.

scr.querySelectorAll('p')[2].scrollIntoView();

scr.scrollTo({
    top: scr.querySelector('p')[2].offsetTop,
    behavior: 'smooth'
})

