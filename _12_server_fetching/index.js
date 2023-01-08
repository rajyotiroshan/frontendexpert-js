const BASE_API = "https://v2.jokeapi.dev/joke/Dark,Pun";
const POST_API = "https://reqres.in/api/users";

//to fetch data from api
const url = new URL(BASE_API);
url.searchParams.set("blacklistFlags", "sexist");
url.searchParams.set("containes", "sex");
/*
fetch(url)//BASE_API + "?contains= girl")
  .then((res) => res.text())
  .then(console.log)
  .catch((error) => console.error("Oh no " + error));

console.log("After fetch");
 */

//method #2: XMLHttpRequest()

/* const request = new XMLHttpRequest(); // donot use promise

request.addEventListener("load", function () {
  console.log(this.responseText);
});

// error evt
//make requets by opening the req
request.open("GET", BASE_API);
request.send(); */

//method # 3

/* async function main() {
  try {
    const response = await fetch(url);
    //response obj
    console.log(response.status);
    console.log(response.ok);
    console.log(response.headers.get('content-type'));
    const text = await response.text();
    console.log(text);
    console.log(JSON.parse(text));
  } catch (error) {
    console.log("Oh no " + error);
  }
} */

//POST API
/*async function main() {
     const data = {
    name: "mohan",
    job: "front end developer",
  };

  const headers = new Headers();
  headers.append("Content-Type", "application/json; charset=utf-8");

  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers,
  };

  try {
    const response = await fetch(POST_API, options);
    //response obj
    console.log(response.status);
    console.log(response.ok);
    console.log(response.headers.get("content-type"));
    const text = await response.text();
    console.log(text);
    console.log(JSON.parse(text));
  } catch (error) {
    console.log("Oh no " + error);
  }
}
main(); */

//response type :: response.headers.get('content-type');
// text: response.text() => JSON.parse(text)
//json: response.json()

//interacting with form in html
/* const form = document.querySelector("form");
form.addEventListener("submit", onSubmit);

async function onSubmit(evt) {
  //by default it will go to the url you are submitted to
  // and refresh the page
  //but we do not want
  // we want to handle our own form submission.own fetch req
  evt.preventDefault();

  console.log(Array.from(new FormData(form).values()).forEach(v=> console.log(v)));
  const options = {
    method: "POST",
    body: new FormData(form), //formData diff from json
  };

  try {
    const response = await fetch(POST_API, options);
    //response obj
    console.log(response.status);
    console.log(response.ok);
    console.log(response.headers.get("content-type"));
    const res = await response.json();
    console.log(res);
    console.log(res.data);
  } catch (error) {
    console.log("Oh no " + error);
  }
} */

//handling slow aapi

const slowAPIURL = new URL(POST_API + "/308");
slowAPIURL.searchParams.set("delay", "1");

async function main() {
  const abortController = new AbortController();

  setTimeout(() => abortController.abort(), 7000);

  try {
    let res = await fetch(slowAPIURL, {
      signal: abortController.signal,
    });

    res = await res.json();
    console.log(res);
  } catch (error) {
    console.log("Aborted: Need more time, " + error);
  }
}

main();
