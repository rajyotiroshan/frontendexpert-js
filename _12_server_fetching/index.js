const BASE_API = "https://v2.jokeapi.dev/joke/Dark,Pun";

//to fetch data from api
const url = new URL(BASE_API);
url.searchParams.set('blacklistFlags','sexist');
url.searchParams.set('containes', 'sex');
fetch(url)//BASE_API + "?contains= girl")
  .then((res) => res.text())
  .then(console.log)
  .catch((error) => console.error("Oh no " + error));

console.log("After fetch");
