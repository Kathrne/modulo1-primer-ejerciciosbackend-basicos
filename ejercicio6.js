/*  Crea un programa que cuente el número de palabras en una frase ingresada por el usuario. */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Por favor, introduce una frase: ', (frase) => {
  const palabras = frase.split(/\s+/);
  const numeroPalabras = palabras.length;
  console.log(`El número de palabras en la frase es: ${numeroPalabras}`);
  rl.close();
});
