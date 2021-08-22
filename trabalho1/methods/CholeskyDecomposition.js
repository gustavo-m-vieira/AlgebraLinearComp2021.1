const isSymetric = require('../utils/isSymetric');
const transpose = require('../utils/transpose');
const generateY = require('../utils/generateY');
const getXFromY = require('../utils/getXfromY');
const createEmptyMatrix = require('../utils/createEmptyMatrix');
const LUDecomposition = require('../utils/LUHelper');

function CholeskyDecomposition({ n, matrixA, vectorB, shouldCalculateDeterminant }) {
  if (!isSymetric(matrixA)) throw new Error('Matrix isn\'t symetric');

  const matrixG = createEmptyMatrix(n,n);

  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = 0; j < i; j++) {
      sum += matrixG[i][j]*matrixG[i][j];
    }
    
    const newValue = Math.sqrt(matrixA[i][i] - sum);
    if (newValue <= 0) throw new Error('Matrix isn\'t definite positive!');
    matrixG[i][i] = newValue;

    for (let j = i + 1; j < n; j++) {
      sum = 0;
      for (let k = 0; k < i; k++) sum += matrixG[i][k]*matrixG[j][k];
      matrixG[j][i] = (1/matrixG[i][i]) * (matrixA[i][j]-sum );
    }
  }

  const matrixGT = transpose(matrixG);

  const vectorY = generateY({ n, matrix: matrixG, vectorB });

  console.log({ matrixG, matrixGT, vectorY });

  const vectorX = getXFromY({ vectorY, matrix: matrixGT });

  const { determinant } = shouldCalculateDeterminant ? LUDecomposition(n, matrixA, shouldCalculateDeterminant) : undefined;

  return {
    vectorX,
    determinant,
  };
}

module.exports = CholeskyDecomposition;
