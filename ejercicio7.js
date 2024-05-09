/* Escribe un programa que tome una cadena ingresada por el usuario y la muestre invertida. */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Por favor, introduce una cadena de texto: ', (cadena) => {
  const cadenaInvertida = cadena.split('').reverse().join('');
  console.log(`La cadena invertida es: ${cadenaInvertida}`);
  rl.close();
});

