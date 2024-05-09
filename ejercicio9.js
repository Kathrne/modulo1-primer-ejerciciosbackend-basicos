/* 9. Escribe un programa que cuente el número de vocales en una palabra ingresada por el usuario. */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Por favor, introduce una palabra: ', (palabra) => {
  // Convertir la palabra a minúsculas para simplificar el conteo
  palabra = palabra.toLowerCase();
  
  const vocales = ['a', 'e', 'i', 'o', 'u'];
  let contadorVocales = 0;

  // Iterar sobre cada letra de la palabra y contar las vocales
  for (let letra of palabra) {
    if (vocales.includes(letra)) {
      contadorVocales++;
    }
  }

  console.log(`El número de vocales en la palabra "${palabra}" es: ${contadorVocales}`);
  rl.close();
});
