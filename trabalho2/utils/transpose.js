const createEmptyMatrix = require('./createEmptyMatrix');

function transpose(matrix) {
  const n = matrix.length;
  const transposed = createEmptyMatrix(n,n);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      transposed[i][j] = matrix[j][i];
    }
    
  }
  return transposed;
}

module.exports = transpose;