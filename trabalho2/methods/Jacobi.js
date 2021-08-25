const isSymetric = require('../utils/isSymetric');
const createEmptyMatrix = require('../utils/createEmptyMatrix');
const transpose = require('../utils/transpose');
const mult = require('../utils/mult');
const calculateDeterminant = require('../utils/LUHelper');

function Jacobi({ n, matrixA, shouldCalculateDeterminant, tol }) {
  if (!isSymetric(matrixA)) return { errors: ['Matriz precisa ser simetrica!']};

  const { determinant } = calculateDeterminant(n, matrixA, shouldCalculateDeterminant);

  let matrixX = createEmptyMatrix(n,n);

  for (let i = 0; i < n; i++) matrixX[i][i];

  let iterations = 0;
  let newP = [...matrixX];

  while(iterations < 10000) {
    iterations += 1;
    let biggestValue = 0;
    let biggestValueLine, biggestValueColumn;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (i !== j) {
          console.log({ matrixA, i, j});
          if (Math.abs(matrixA[i][j] > Math.abs(biggestValue))) {
            biggestValueLine = i;
            biggestValueColumn = j;
            biggestValue = matrixA[i][j];
          }
        }
      }
    }

    if (Math.abs(biggestValue) <= tol) {
      const autoValores = [];
      for (let i = 0; i < n; i++) autoValores.push(matrixA[i][i]);

      return {
        matrixX,
        autoValores,
        iterations,
        determinant,
      };
    }
    let angle, sen, cos;

    if (matrixA[biggestValueLine][biggestValueColumn] === matrixA[biggestValueColumn][biggestValueLine]) {
      angle = Math.PI/4;
    } else {
      const fraction = (2*biggestValue)/matrixA[biggestValueLine][biggestValueColumn];
      angle = Math.atan(fraction)/2;
    }

    sen = Math.sin(angle);
    cos = Math.cos(angle);
    console.log({ sen, cos });
    newP[biggestValueLine][biggestValueColumn] = sen;
    newP[biggestValueColumn][biggestValueLine] = sen;
    newP[biggestValueLine][biggestValueLine] = cos;
    newP[biggestValueColumn][biggestValueColumn] = cos;


    const transposed = transpose(newP);
    matrixX = mult(matrixX, newP);

    const temp = mult(transposed, matrixA);
    matrixA = mult(temp, newP);
  }

  return {
    errors: ['Não houve convergência!'],
    iterations,
    determinant,
  };

}

module.exports = Jacobi;
