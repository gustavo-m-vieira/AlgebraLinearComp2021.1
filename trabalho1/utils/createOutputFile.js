const fs = require('fs');

function createOutputFile(answer, ICOD, method) {
  let fileString = `Resolvido pelo método ${method}\n`;
  
  switch (ICOD) {
    case 1:
    case 2: {
      const {
        vectorX,
        determinant,
      } = answer || {};

      fileString += 'Solução X:\n';
      fileString += `${vectorX.map(([a]) => a).join(' ')}\n`;
      if (determinant) {
        fileString += `Determinante: ${determinant}\n`;
      }
      break;
    }
    case 3:
    case 4: {
      const {
        vectorX,
        determinant,
        iterations,
        errors,
        residues,
      } = answer || {};

      fileString += 'Solução X:\n';
      fileString += `${vectorX.map(([a]) => a).join(' ')}\n`;
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
      fileString += 'Histórico de variação do erro:\n';
      residues.forEach((residue) => {
        fileString += `${residue}\n`;
      });
      break;
    }
    default:
      fileString += `ICOD ${ICOD} inválido!\n`;
      break;
  }
  console.log({ file: fileString });
  fs.writeFileSync('answer.txt', fileString);
}

module.exports = createOutputFile;
