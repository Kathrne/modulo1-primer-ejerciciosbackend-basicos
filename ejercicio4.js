/* Crea un programa que tome una frase ingresada por el usuario y reemplace una palabra específica por otra. */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Por favor, introduce una frase: ', (frase) => {
  rl.question('Ahora, introduce la palabra que deseas reemplazar: ', (palabraAntigua) => {
    rl.question('Finalmente, introduce la palabra por la que deseas reemplazarla: ', (palabraNueva) => {
      const nuevaFrase = frase.replace(palabraAntigua, palabraNueva);
      console.log(`La frase modificada es: ${nuevaFrase}`);
      rl.close();
    });
  });
});
