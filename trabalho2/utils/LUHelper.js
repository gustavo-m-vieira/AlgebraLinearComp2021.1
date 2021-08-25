const createEmptyMatrix = require('./createEmptyMatrix');

function determinantLU(matrix, pivot) {
  const n = matrix.length;
  let det = 1;
  for (let i = 0; i < n; i++) {
    det *= matrix[i][i];
  }

  if (pivot % 2) {
    console.log('Inverteu o sinal do det');
    det = -det;
  }

  console.log({ det });
  return det;
}

function LUDecomposition(n, matrixA, shouldCalculateDeterminant) {

  let pivot = 0;
  const matrixL = createEmptyMatrix(n,n);
  for (let i = 0; i < n; i++) matrixL[i][i] = 1;

  for (let k = 0; k < n - 1; k++) {
    // agora vou percorrer todas as linhas e pegar o maior valor na posição k,k
    let biggerValue = matrixA[k][k];
    let biggerLine = k;
    for (let i = k + 1; i < n; i++) {
      if (Math.abs(biggerValue) < Math.abs(matrixA[i][k])) {
        biggerValue = matrixA[i][k];
        biggerLine = i;
      }
    }

    //se biggerLine nao for k, trocar essas linhas
    if (biggerLine !== k) {
      const temp = matrixA[k];
      matrixA[k] = matrixA[biggerLine];
      matrixA[biggerLine] = temp;
      pivot++;
    }

    for (let i = k + 1; i < n; i++) {
      const m = - matrixA[i][k]/matrixA[k][k];
      matrixL[i][k] = -m;
      for (let j = k; j < n; j++) {
        matrixA[i][j] = m * matrixA[k][j] + matrixA[i][j];
      }
    }
  }

  return {
    matrixL,
    matrixU: matrixA,
    determinant: shouldCalculateDeterminant ? determinantLU(matrixA, pivot) : undefined,
  };
}

module.exports = LUDecomposition;
