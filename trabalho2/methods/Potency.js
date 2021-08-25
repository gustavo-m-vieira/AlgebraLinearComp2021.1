function Potency({ n, matrixA, vectorB, tol, shouldCalculateDeterminant }) {
  let x = createEmptyMatrix(n,1);
  let possibleAutoValor = 0;
  let i = 0;
  let residue;
  const residues = [];
  const autoValores = [];
  const autoVetores = [];

  for (let i = 0; i < n; i++) x[i][0] = 1;

  let converge = false;
  const axMult = new Array(n);

  while (!converge && i < 10000) {
    i += 1;

    for (let i = 0; i < n; i++) { // para cada linha da matriz
      for (let j = 0; j < n; j++) { // cada elemento da linha, multiplicado por um elemento do vetor
        axMult[i] += x[j][0] * matrixA[i][j]; // soma ao resultado
      }
    }
    const newPossibleAutoValor = y[0];
    const newPossibleAutoVetor = createEmptyMatrix(n,1);

    for (let i = 0; i < n; i++) {
      newPossibleAutoVetor[i][0] = y[i]/newPossibleAutoValor;
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
  }

  return {
    residues,
    autoValores,
    autoVetores,
  };
}

module.exports = Potency;
