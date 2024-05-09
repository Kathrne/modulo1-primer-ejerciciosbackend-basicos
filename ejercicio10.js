/* Crea un programa que tome una frase ingresada por el usuario y capitalice la primera letra de cada palabra. */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Por favor, introduce una frase: ', (frase) => {
  const palabras = frase.split(' ');
  const fraseCapitalizada = palabras.map((palabra) => {
    return palabra.charAt(0).toUpperCase() + palabra.slice(1);
  }).join(' ');

  console.log(`La frase capitalizada es: ${fraseCapitalizada}`);
  rl.close();
});
