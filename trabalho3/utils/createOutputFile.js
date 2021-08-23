const fs = require('fs');

function createOutputFile(answer, method) {
  let fileString = `Resolvido pelo método ${method}\n`;

  const {
    y,
    errors,
  } = answer || {};

  fileString += `y: ${y}\n`;

  if (errors && errors.length) {
    fileString += 'Erros:\n';
    errors.forEach((error) => {
      fileString += `${error}\n`;
    });
  }

  fileString += 'Ressalta-se que existe um erro associado a esses valores, pois são aproximações.\n';

  console.log({ file: fileString });
  fs.writeFileSync('answer.txt', fileString);
}

module.exports = createOutputFile;
