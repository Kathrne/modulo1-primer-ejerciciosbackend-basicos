/* Escribe un programa que tome una cadena ingresada por el usuario y extraiga una subcadena de ella. */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Por favor, introduce una cadena de texto: ', (cadena) => {
  rl.question('Introduce el índice de inicio de la subcadena: ', (indiceInicio) => {
    rl.question('Introduce el índice de fin de la subcadena: ', (indiceFin) => {
      const subcadena = cadena.substring(indiceInicio, indiceFin);
      console.log(`La subcadena extraída es: ${subcadena}`);
      rl.close();
    });
  });
});
