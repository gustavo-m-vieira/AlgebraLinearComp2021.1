const createEmptyMatrix = require('../utils/createEmptyMatrix');
const LUDecomposition = require('../utils/LUHelper');
const getResidue = require('../utils/getResidue');

function calculateNewPossibleSolution(matrixA, vectorX, vectorB) {
  const newVectorX = createEmptyMatrix(vectorX.length, 1);

  for (let i = 0; i < vectorX.length; i++) {
    let sum = 0;
    for (let j = 0; j < vectorX.length; j++) {
      if (i !== j) sum += matrixA[i][j]*vectorX[j][0];
    }

    newVectorX[i][0] = (vectorB[i][0] - sum)/matrixA[i][i];
  }

  return newVectorX;
}

function Jacobi({ n, matrixA, vectorB, shouldCalculateDeterminant, tol }) {
  let possibleSolution = createEmptyMatrix(n,1);
  let i = 0;
  let residue;
  while (i < 10000) {
    i += 1;
    const newPossibleSolution = calculateNewPossibleSolution(matrixA, possibleSolution, vectorB);

    residue = getResidue(newPossibleSolution, possibleSolution);

    if (residue > tol) {
      possibleSolution = newPossibleSolution;
    } else {

      const { determinant } = shouldCalculateDeterminant ? LUDecomposition(n, matrixA, shouldCalculateDeterminant) : undefined;

      return {
        vectorX: newPossibleSolution,
        iterations: i,
        determinant,
        residue: Number.isNaN(residue) ? Infinity : residue,
      };
    }
  }

  const { determinant } = shouldCalculateDeterminant ? LUDecomposition(n, matrixA, shouldCalculateDeterminant) : undefined;

  return {
    vectorX: possibleSolution,
    iterations: i,
    determinant,
    residue: Number.isNaN(residue) ? Infinity : residue,
  };
}

module.exports = Jacobi;
