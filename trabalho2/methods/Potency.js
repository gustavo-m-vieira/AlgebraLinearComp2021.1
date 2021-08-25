const createEmptyMatrix = require('../utils/createEmptyMatrix');

function getResidue(newResidue, oldResidue) {
  return Math.abs(newResidue - oldResidue) / Math.abs(newResidue);
}


function Potency({ n, matrixA, tol, shouldCalculateDeterminant }) {
  let x = createEmptyMatrix(n,1);
  let possibleAutoValor = 0;
  let iterations = 0;
  let resterationsdue;
  const residues = [];
  const autoValores = [];
  const autoVetores = [];

  for (let i = 0; i < n; i++) x[i][0] = 1;

  let converge = false;
  const axMult = new Array(n);
  for (let i = 0; i < n; i++) axMult[i] = 0;

  while (!converge && iterations < 10000) {
    iterations += 1;

    for (let i = 0; i < n; i++) { // para cada linha da matriz
      for (let j = 0; j < n; j++) { // cada elemento da linha, multiplicado por um elemento do vetor
        axMult[i] += x[j][0] * matrixA[i][j]; // soma ao resultado
        console.log({ axMult, x, matrixA });
      }
    }
    const newPossibleAutoValor = axMult[0];
    const newPossibleAutoVetor = createEmptyMatrix(n,1);

    for (let i = 0; i < n; i++) {
      newPossibleAutoVetor[i][0] = axMult[i]/newPossibleAutoValor;
    }

    residue = getResidue(newPossibleAutoValor, possibleAutoValor);
    residues.push(Number.isNaN(residue) ? Infinity : residue);
    
    autoValores.push(newPossibleAutoValor);
    autoVetores.push(newPossibleAutoVetor);

    if (residue > tol) {
      x = newPossibleAutoVetor;
      possibleAutoValor = newPossibleAutoValor;
    } else {
      converge = true;
    }

    console.log({ autoValores, autoVetores });
  }

  return {
    residues,
    autoValores,
    autoVetores,
    iterations,
  };
}

module.exports = Potency;
