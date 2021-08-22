const createEmptyMatrix = require('../utils/createEmptyMatrix');
const LUDecomposition = require('../utils/LUHelper');
const getResidue = require('../utils/getResidue');

function calculateNewPossibleSolution(matrixA, vectorX, vectorB) {
  const newVectorX = createEmptyMatrix(vectorX.length, 1);

  for (let i = 0; i < vectorX.length; i++) {
    let sum1 = 0;
    for (let j = 0; j < i; j++) {
      sum1 += matrixA[i][j]*newVectorX[j][0];
    }

    let sum2 = 0;
    for (let k = i + 1; k < matrixA.length; k++) {
      sum2 += matrixA[i][k]*vectorX[k][0];
    }

    newVectorX[i][0] = (vectorB[i][0] - sum1 - sum2)/matrixA[i][i];
  }

  return newVectorX;
}

function GaussSeidel({ n, matrixA, vectorB, shouldCalculateDeterminant, tol }) {
  let possibleSolution = createEmptyMatrix(n,1);
  let i = 0;
  let residue;
  const residues = [];

  while (i < 10000) {
    i += 1;
    const newPossibleSolution = calculateNewPossibleSolution(matrixA, possibleSolution, vectorB);

    residue = getResidue(newPossibleSolution, possibleSolution);
    residues.push(Number.isNaN(residue) ? Infinity : residue);

    if (residue > tol) {
      possibleSolution = newPossibleSolution;
    } else {
      const { determinant } = shouldCalculateDeterminant ? LUDecomposition(n, matrixA, shouldCalculateDeterminant) : undefined;

      return {
        vectorX: newPossibleSolution,
        iterations: i,
        determinant,
        residue: Number.isNaN(residue) ? Infinity : residue,
        residues,
      };
    }
  }

  const { determinant } = shouldCalculateDeterminant ? LUDecomposition(n, matrixA, shouldCalculateDeterminant) : undefined;

  return {
    vectorX: possibleSolution,
    iterations: i,
    determinant,
    residue: Number.isNaN(residue) ? Infinity : residue,
    residues,
    errors: ['possibilidade de não convergência']
  };
}

module.exports = GaussSeidel;
