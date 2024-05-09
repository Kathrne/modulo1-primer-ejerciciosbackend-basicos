/*  Escribe un programa que tome una cadena ingresada por el usuario y la muestre completamente en mayúsculas. */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Por favor, introduce una cadena de texto: ', (cadena) => {
  const cadenaEnMayusculas = cadena.toUpperCase();
  console.log(`La cadena en mayúsculas es: ${cadenaEnMayusculas}`);
  rl.close();
});
