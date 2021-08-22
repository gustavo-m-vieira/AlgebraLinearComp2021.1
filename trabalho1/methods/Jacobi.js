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
  while (true) {
    i += 1;
    const newPossibleSolution = calculateNewPossibleSolution(matrixA, possibleSolution, vectorB);

    const residue = getResidue(newPossibleSolution, possibleSolution);

    const { determinant } = shouldCalculateDeterminant ? LUDecomposition(n, matrixA, shouldCalculateDeterminant) : undefined;

    if (residue > tol) {
      possibleSolution = newPossibleSolution;
    } else {
      return {
        vectorX: newPossibleSolution,
        iterations: i,
        determinant,
        residue,
      };
    }
  }
}

module.exports = Jacobi;
