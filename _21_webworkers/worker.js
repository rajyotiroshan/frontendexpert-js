/* for (let i = 0; i < 3000000000; i++) {
    i + 2;
  }
  console.log("slow operation finished"); */

  //listen for msg from main file.
  //self refers to worker global scope, same as window in std js file.
/*   self.addEventListener('message', event=>{
    console.log(event.data);

    //sending msg./info from worker to main js file.
    postMessage(event.data * 100);
    //since postMessage is a method od self
    //self.postMessage(); ok
  });

  console.log("slow operation finished"); */

  //this worker happens asynchronously through event.
  //line 17 get printed first
  
  
  //can not do any dom manipulation, since it is seperate thread,
  //do not have access to dom.


  //For shared worker
  //fires when something connects to this worker.
  self.addEventListener('connect', event=>{

    const port = event.ports[0];
    
    port.onmessage = (event)=>{
        //console.log(event.data);
        port.postMessage(event.data * 10);
    };
  });

  console.log("slow operation finished");