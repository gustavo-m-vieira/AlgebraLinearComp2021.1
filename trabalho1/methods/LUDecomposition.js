const generateY = require('../utils/generateY');
const LUDecomposition = require('../utils/LUHelper');
const getXFromY = require('../utils/getXfromY');

function resolveXThroughLUDecomposition({ n, matrixA, vectorB, shouldCalculateDeterminant }) {

  const {
    matrixL,
    matrixU,
    determinant,
  } = LUDecomposition(n, matrixA, shouldCalculateDeterminant);

  const vectorY = generateY({ n, matrix: matrixL, vectorB });

  console.log({ matrixL, matrixU, vectorY });

  const vectorX = getXFromY({ vectorY, matrix: matrixU });

  return {
    vectorX,
    determinant,
  };
}

module.exports = resolveXThroughLUDecomposition;