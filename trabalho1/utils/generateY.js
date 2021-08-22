const createEmptyMatrix = require('./createEmptyMatrix');

function generateY({ n, matrix, vectorB }) {
  const vectorY = createEmptyMatrix(vectorB.length , 1);

  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = 0; j <= i; j++) {
      if (j === i) {
        vectorY[i][0] = (vectorB[i][0] - sum)/matrix[i][j];
        sum = 0;
      } else {
        sum += matrix[i][j]*vectorY[j][0];
      }
    } 
  }

  return vectorY;
}

module.exports = generateY;