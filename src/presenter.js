import {ocurrencias} from "./cadenas";

const palabra = document.querySelector("#palabra");
const form = document.querySelector("#palabras-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const frase = palabra.value;
  div.innerHTML = JSON.stringify(ocurrencias(frase));
});
