/* Crea un programa que cuente el número de caracteres en una cadena ingresada por el usuario. */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Por favor, introduce una cadena de texto: ', (cadena) => {
  const numCaracteres = cadena.length;
  console.log(`La cadena tiene ${numCaracteres} caracteres.`);
  rl.close();
});
