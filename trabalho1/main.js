const { Matrix, inverse } = require('ml-matrix');
const io = require('console-read-write');
const fs = require('fs');
const util = require('util');
const CholeskyDecomposition = require('./methods/CholeskyDecomposition');
const LUDecomposition = require('./methods/LUDecomposition');
const Jacobi = require('./methods/Jacobi');
const GaussSeidel = require('./methods/GaussSeidel');
const createOutputFile = require('./utils/createOutputFile');

util.inspect.defaultOptions.depth = null;

async function main() {
  console.log('Digite o nome do arquivo:(ele deve estar na mesma pasta do executavel)');
  const fileName = await io.read();
  // const fileName = 'matrixGS.txt';

  let buffer;
  try {
    buffer = fs.readFileSync(`./${fileName}`);
  } catch (error) {
    console.log('Arquivo não encontrado!');
    return;
  }

  const bufferAsString = buffer.toString();

  let [
    n,
    ICOD,
    IDET,
    ...rest
  ] = bufferAsString.split('\n');

  const shouldCalculateDeterminant = !parseInt(IDET);
  ICOD = parseInt(ICOD);
  n = parseInt(n);

  const matrix_elements = rest.slice(0, n);
  const vector_elements = rest[n];
  const TOLm = rest[n + 1] || -1;

  const matrixA = matrix_elements.map((line) => line.split(' ').map((a) => parseInt(a)));
  const vectorB = vector_elements.split(' ').map((a) => [parseInt(a)]);

  try {
    const matrix = new Matrix(matrixA);
    inverse(matrix);
  } catch (error) { console.log({ error });
    console.log('Essa matriz é singular!');
    return;
  }

  const params = {
    n,
    matrixA,
    vectorB,
    shouldCalculateDeterminant,
    tol: Math.pow(10, TOLm),
  };

  console.log({ params });

  let answer;
  let method;

  switch(ICOD) {
    case 1:
      answer = LUDecomposition(params);
      method = 'Decomposição LU';
      break;
    case 2:
      answer = CholeskyDecomposition(params);
      method = 'Decomposição Cholesky';
      break;
    case 3:
      answer = Jacobi(params);
      method = 'Procedimento Jacobi';
      break;
    case 4:
      answer = GaussSeidel(params);
      method = 'Procedimento GaussSeidel';
      break;
    default:
      break;
  }

  createOutputFile(answer, ICOD, method);
}

main().then(response => console.log(response));