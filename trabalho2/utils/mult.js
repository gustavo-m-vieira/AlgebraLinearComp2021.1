const { Matrix } = require('ml-matrix');
const createEmptyMatrix = require('./createEmptyMatrix');

function mult(A, B) {
  const n = A.length;
  const matrixA = new Matrix(A);
  const matrixB = new Matrix(B);

  const mul = matrixA.mmul(matrixB);

  console.log({ matrixA, matrixB, mul });

  const answer = createEmptyMatrix(n,n);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      answer[i][j] = mul.get(i,j);
    }
  }

  return answer;
}

module.exports = mult;
