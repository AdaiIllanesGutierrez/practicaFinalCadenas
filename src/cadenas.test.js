import {ocurrencias}from "./cadenas.js";

describe("Contar Palabras", () => {
  it("deberia recibir una palabra y devolver 1", () => {
    expect(ocurrencias("tu")).toEqual({ tu: 1 });
  });
  it("deberia recibir una Frase con palabras separadas por comas", () => {
    expect(ocurrencias("tu,hola")).toEqual({ tu: 1,hola:1 });
  });
  it("deberia recibir una Frase con palabras separadas por punto", () => {
    expect(ocurrencias("tu.hola")).toEqual({ tu: 1,hola:1 });
  });
  it("deberia recibir una Frase con palabras separadas por espacios", () => {
    expect(ocurrencias("tu hola")).toEqual({ tu: 1,hola:1 });
  });
  it("deberia recibir una Frase con palabras separadas por punto y coma", () => {
    expect(ocurrencias("tu hola")).toEqual({ tu: 1,hola:1 });
  });
  it("deberia recibir una palabra en mayusculas y minusculas y devolver 1", () => {
    expect(ocurrencias("tu TU Tu")).toEqual({ tu: 3 });
  });
  
});
