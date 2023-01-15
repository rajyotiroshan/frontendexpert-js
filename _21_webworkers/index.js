/* console.log("Web workers demo");
//allows to run code in a seperate thread.
const slowBtn = document.querySelector("#slow");
const sayHelloBtn = document.getElementById("say-hello");

slowBtn.addEventListener("click", slowOperations);
sayHelloBtn.addEventListener("click", sayHello);

function slowOperations() {
  const worker = new Worker("worker.js");
  //sending msg to worker
  worker.postMessage(10);

  //listening for message from worker
  worker.addEventListener("message", (event) => {
    console.log(event.data);
  });

  //terminate worker.
  //worker.terminate();//stop anything from happening.
}

function sayHello() {
  console.log("hello world");
} */

//shared worker.:: accessible by different tabs in the same domain, even in iframes.
//above is worker is acesible fromwithin the js where it is created.

console.log("Web workers demo");
//allows to run code in a seperate thread.
const slowBtn = document.querySelector("#slow");
const sayHelloBtn = document.getElementById("say-hello");

slowBtn.addEventListener("click", slowOperations);
sayHelloBtn.addEventListener("click", sayHello);

function slowOperations() {
  const worker = new SharedWorker("worker.js");
  //sending msg to worker
  //specific to a singel port.
  //kkeps track of who it is communicating with
  worker.port.postMessage(10);

  //listening for message from worker
  //need to call worker.port.start to start  port when using addEventListener("message")
  worker.port.onmessage = (event) => {
    console.log(event.data);
  };

  //terminate worker.
  //worker.terminate();//stop anything from happening.
}

function sayHello() {
  console.log("hello world");
}
