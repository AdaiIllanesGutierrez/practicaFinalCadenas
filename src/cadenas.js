function ocurrencias(frase) {
    frase = frase.toLowerCase();
    // Definir los caracteres de separación entre palabras
    const separadores = /[.,;\- ]+/;
    // Dividir la frase en palabras utilizando los separadores
    const palabras = frase.split(separadores);
  
    // Crear un objeto para almacenar el conteo de ocurrencias
    const conteo = {};
  
    // Recorrer todas las palabras y realizar el conteo
    palabras.forEach(palabra => {
      // Ignorar las palabras vacías
      if (palabra !== "") {
        // Incrementar el conteo de la palabra actual
        if (conteo[palabra]) {
          conteo[palabra]++;
        } else {
          conteo[palabra] = 1;
        }
      }
    });
  
    // Retornar el objeto con el conteo de ocurrencias
    return conteo;
  }
  
  
  module.exports = {ocurrencias};
  