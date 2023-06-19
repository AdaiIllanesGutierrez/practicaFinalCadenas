import {ocurrencias} from "./cadenas";

const palabra = document.querySelector("#palabra");
const form = document.querySelector("#palabras-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const frase = palabra.value;
  if (frase===""){
    alert("no se puede ingresar texto vacio");
    return;
  }else{
     div.innerHTML = JSON.stringify(ocurrencias(frase));}
});
