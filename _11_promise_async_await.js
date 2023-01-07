// Welcome to our Playground!
//promise:  an object that containes the value for some async operation
//obj has state
//pending: 
//fullfiled: ope succ
//rejected: error, promise not fullfilled, rew neve r came back, or get an error

//resove, reject -> cb funct
/*const promise = new Promise( (resolve, reject)=>{
  resolve(2);
  //reject(2);
});

//console.log(promise);
*/

//async nature of a promise.
const promise = new Promise( (resolve, reject)=>{
    setTimeout(()=> resolve(2), 1000);
    //reject(2);
    //setTimeout(()=> reject(new Error(
  //"Something went wrong")), 1000);
  });
  //console.log(promise); //not resolved yet.
  //till when cb in st execute promise finished
  //setTimeout(()=> console.log(promise), 1500);
  //but above not a good way,  since not always know how much time promise need
  // to resolve.
  //hence need to have a way s.t when promise resolve
  //the callback function get called.
  
  //or way of knowing that promise finishes and we can continute
  //running some code based on that result.
  //we have then func on promise obj that take cb function that you would want to run
  //promise.then((value => console.log(vale));
  //or if error
  //promise.then(value=> console.log(value), error=> console.log("Getting error", error))
  
  
  //A more nicer way of handling promise
  /*
  promise
    .then(console.log)
    .catch(error => console.log('Oh no ', error));
  */
  //then func returns a new promise
  //catch will catch the rejected promise
  
  //or
  /*
  const promise1 = Promise.resolve(3); //already in resolve stte
  console.log(promise1);
  promise1
    .then(console.log) // get called
    .catch(error => console.log('Oh no ', error));
  */
  //
  //note: then return a promise with value vlue*2, then ...
  
  /*promise1
    .then(value => value*2)
    .then(value => value + 1)
    .then(value => {
      throw new Error('Something went wrong');
    })
    .then(console.log)
    .catch(error => { 
      console.log('Oh no ' + error );
      return 10;// return 10 as promise
    })
    .then(console.log)
    .finally( ()=> console.log("Done"));
  */
  //note: catch does not need to be the at the end
  // at the end can use finnaly, alway run, fullfilled or rejected
  
  //Promise.all
  /*
  Promise.all([
    Promise.resolve(3),
    Promise.reject(2),
    new Promise((res, rej)=> { setTimeout(()=>res(5), 2000)})
  ]).then(console.log).catch(console.log); */
  //wait for a promise to finish
  //as soon as one promise is rejected the whoole thing reect.
  
  
  //Promise.race()
  //which ever resolve/settled first will be handled
  /*Promise.race([
  new Promise((res, rej)=> { setTimeout(()=>res(3), 3000)}),
    new Promise((res, rej)=> { setTimeout(()=>res(2), 2000)}),
    new Promise((res, rej)=> { setTimeout(()=>res(1), 1000)})
  ]).then(console.log).catch(console.log); //1
  
  
  Promise.race([
  new Promise((res, rej)=> { setTimeout(()=>res(3), 3000)}),
    new Promise((res, rej)=> { setTimeout(()=>rej(2), 2000)}),
    new Promise((res, rej)=> { setTimeout(()=>rej('Oh no'), 1000)})
  ]).then(console.log).catch(console.log);
  
  //any: first one that fulfilled, if neothre -> new error deescribing that all rejected
  Promise.any([
  new Promise((res, rej)=> { setTimeout(()=>res(3), 3000)}),
    new Promise((res, rej)=> { setTimeout(()=>rej(2), 2000)}),
    new Promise((res, rej)=> { setTimeout(()=>rej('Oh no'), 1000)})
  ]).then(console.log).catch(console.log);
  */
  
  
  //async await
  //async : mark as asynchronous, 
  //implicitely return  a promise of return value
  //alow to use await -> waits for a promise to settle before continue
  /*async function tester(){
    try {
      const value = await new Promise((res, rej)=>
        setTimeout(()=> rej(
  3), 1000));
      console.log(value);
    }catch(error){
      console.log("Ph no "+ error)
    }
    
  }*/
  
  async function tester(){
    return await new Promise((res, rej)=>
        setTimeout(()=> res(
  5), 1000));
  
    
  }
  
  tester().then(console.log).catch(error => console.log("Oh no "+error));