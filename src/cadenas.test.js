import {ocurrencias}from "./cadenas.js";

describe("Contar Palabras", () => {
  it("deberia recibir una palabra y devolver 1", () => {
    expect(ocurrencias("tu")).toEqual(1);
  });
});
