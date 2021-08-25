const fs = require('fs');

function createOutputFile(answer, ICOD, method) {
  let fileString = `Resolvido pelo método ${method}\n`;
  
  const {
    matrixX,
    autoValores,
    autoVetores,
    iterations,
    errors,
    determinant,
  } = answer || {};

  fileString += 'AutoVetores:\n';
  if (matrixX) {
    matrixX.forEach((line) => {
      fileString += `${line.join(' ')}\n`;
    });
  } else if (autoVetores) {
    console.log({ autoVetores })
    autoVetores.forEach((autoVetor) => {
      fileString += `${autoVetor.join(' ')}\n`;
    });
  }

  fileString += 'AutoValores:\n';
  autoValores.forEach((autoValor) => {
    if(!Number.isNaN(autoValor)) fileString += `${autoValor}\n`;
  });

  if (errors && errors.length) {
    fileString += 'Erros:\n';
    errors.forEach((error) => {
      fileString += `${error}\n`;
    });
  }
  if (determinant) {
    fileString += `Determinante: ${determinant}\n`;
  }
  fileString += `Iterações: ${iterations}\n`;
      
  console.log({ file: fileString });
  fs.writeFileSync('answer.txt', fileString);
}

module.exports = createOutputFile;
