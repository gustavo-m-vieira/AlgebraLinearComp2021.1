function isSymetric(matrix) {
  for (let i = 0; i < matrix.rows; i++) {
    for (let j = 0; j <= i; j++) {
      if (matrix[i][j] !== matrix[j][i]) {
        return false;
      }
    }
  }
  return true;
}

module.exports = isSymetric;