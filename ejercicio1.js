/*  Escribe un programa que solicite al usuario su nombre y apellido por separado, y luego muestre un mensaje de saludo concatenando ambos. */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Por favor, introduce tu nombre: ', (nombre) => {
  rl.question('Ahora, introduce tu apellido: ', (apellido) => {
    console.log(`Hola, ${nombre} ${apellido}!`);
    rl.close();
  });
});
