//the evt loop, "concurrency model in js" -> misnomer a wrong or inaccurate name or designation
//js -> single threaded,

//but how js listen for evt, waiting for the timeouts and running other code??

//answer lies in ->  "evts loop and how browser runs js code"

//br-> js engine (chrome, v8 )
//2 comp -> heap , stack
//heap-> memory alocation-> obj, arr
//call stack,-> keeping tracks of currently executing fuction calls
// stack -> lifo
//called statem -> func pushed to call stack -> execution end -> called off, popp off the call stack.
//call stack empty empty -> no code running

//but what if setTimeout pushed with delay of 500ms.

//settimeout(
//  foo, 500
//); // now call stack wait for 500ms -> then callstack freeze and can not run another code/func
//say if settimeout poped off -> how do we know to call foo.
//so another component is needed.

//js engine runs in js runtime env
//Javascript runtime env -> on top core js lang + web api
//api -> {timers, https(fetch), dom()maniput}

//settimeout -> calls web api -> browser keeps rack of the delau and callbakc to foo for us.
//so settimeout grt pop off the call stack.

//after 500ms

//comes task queue/msg que fifo
//delay finished wb api pushes to msg que
//task que waits for the call stack to be empty.
//only when mains(last func in call stack) complete from call stack, foo pushed to call stack for execution
//this whole loop is called evt loop.

//constantly running loop- > deq -> oushed ->
//browser rendered changes to the dom.
//rendering doesnot happen in middle , after the task complete

/* function logWorld(){
    console.log("log world");
}

function main(){
    console.log("hello");
    setTimeout(logWorld, 500);
    console.log("goodBye");
}

main(); */
//the evt loop
/**
 * So first main is called hence main function get pushed to the call stack,
 * now 1st log func get pushed on top of main;
 * after logging out hello, it gets poped off the stack,
 * next setTimeout func get pushed to the call stack,
 * now a time webapi gets called.
 * now the browe will keep track of delay and callback logWorld.
 * now setTimeout func get poped off the call stack.
 * next log func get pushed nad called poped offf after printing the goodBye
 * now main func get popped off sice o line to execute.
 * in the meantime if 500 ms is up, api will push the logWorld to in the msg que.
 * when call stack is empty and 500ms is up logworld is pushed onto the call stack.
 * afte executing it will get popped of the call stack.
 * now call stack is empty and msg que is empty.
 * so js stop execution ended.
 */

//special cases
//setTimeout with no delay.
//cb not necessiraily run immediately.
//stack is empty and task infront of it run
//given low pririty
/* function logWorld() {
  console.log("log world");
}

function main() {
  console.log("hello");
  setTimeout(logWorld, 0);
  console.log("goodBye");
}

main(); */

//in above case also, cb pushed to msg q first t
//then when call stack is empty push onto the call stack,
// so executing in the same order.

//Since we have only one call stack need to put heavy computational
//code on server side.
//otherwise, page will be blocked from updating, and callback from timers will be
//kept from execution for a long time.

//if must to run slow task, use web workers that run task independently
//or divide big task into chunks.
//

/* function logWorld() {
    console.log("log world");
  }
  
  function main() {
    console.log("hello");
    setTimeout(logWorld, 1000);
    superSlowTask();
    console.log("goodBye");
  }
  
  main(); */

//event loop
//main -> log -> setTimeout -> logWord to web api to task q after 1s->
//-> superSlowTask -> ui will be non responsive for the time the func run
//-> log -> main -> logWorld

//challenge Example:
/* function mystery() {
  console.log("first");
  setTimeout(() => {
    console.log("second");
  }, 2000);

  setTimeout(() => {
    console.log("third");
  }, 2000);
  console.log("fourth");
}

mystery(); */
// order of log: first, fourth, third, second
//log ->  second to api, 1s -> third,0 to api -> fourth -> third to msg q -> second to msg q ->
//third to call stack -> second to call stack
//first:

//microtask q
//when promises were added to the lang,a compoenent added
//

//2nd q -> microtask q/ job q
//promise callback added to the job q, async await cb
//or
// queueMicrotask() -> to add explicitely to job q,

//followed slightly diff rule

//Rules:
/**
 * 1. De q 1 task
 * 2. Execute untill call stack is empty
 * 3. Execute all microtask until microtask q is empty
 * 4. render dom changes
 * 5. Goto step 1
 */

//pseudo code
/**
 * while˘(true){
 *  if(!taskQ.isEmpty()){
 *      execute(taskQ.dequeue());
 *  }
 *  while(!microtaskQ.isEmpty()){
 *      execute(microtaskQ.dequeque());
 *  }
 *  reRender();
 * }
 */

//all cocept together

function logOne() {
  console.log("1");
}

function superSlowFunction() {
  console.log(2);
}
function main() {
  setTimeout(logOne, 0);
  Promise.resolve(2)
    .then((val) => val * 2)
    .then(console.log);
  superSlowFunction();
  console.log(3);
}

//main();
//log order: 2, 3,4,1

//The event loop execution
//log order
//main => settimeout-> webapi-> logOne -> task q immed => setTimeout pop
//Promise.resolve to call stack->since promise is fullfilled called off the stack
// returna promise with 2-> (val=> val*2) to job task
//  -> then(console.log(2)) -> until the previous promise in the chain
//resolve new promise cb wont be added to the micro task
//once val *2 resolve will be added to microtask -> called off then(console.log)
//=>slowTask => poped off => coso 3 => poped off => main poped off
//=>first complete microtask   => add val => val*2 to call back => add con log to microtask => popped off val => console.log to call stack =>
//poped of consolelog=> call stack empty
//=> add logOne from task q to call stack => log 1 => remove cosole log
//both call stack, microstask, task q empty
//execution stop.

//chunking
//split task into smaller one , ,,by taking advantage of timer
function chunkedSlowFunc(){
    setTimeout(processChunk, 0, 0); //cb, delay, para
}

function processChunk(start){
    const end = start + 100000;
    for(let i=start; i<end; i++){
        doCalculations(i);
    }
    if(end <100000000){
        setTimeout(processChunk, 0, i+1);
    }
}