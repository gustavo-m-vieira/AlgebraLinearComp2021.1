const createEmptyMatrix = require('./createEmptyMatrix');

function getXFromY({ vectorY, matrix }) {
  const n = vectorY.length;

  const vectorX = createEmptyMatrix(n , 1);

  for (let i = n - 1; i>=0; i-=1) {
    let sum = 0;
    for (let j = i + 1; j < n; j+=1) {
      sum += matrix[i][j]*vectorX[j][0];
    }

    vectorX[i][0] = (vectorY[i][0] - sum )/ matrix[i][i];
  }

  return vectorX;
}

module.exports = getXFromY;
