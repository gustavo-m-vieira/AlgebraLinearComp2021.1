const io = require('console-read-write');
const fs = require('fs');
const util = require('util');
const createOutputFile = require('./utils/createOutputFile');
const newtonMethod = require('./methods/newtonMethod');
const broydenMethod = require('./methods/broydenMethod');

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
    ICOD,
    teta1,
    teta2,
    TOLm
  ] = bufferAsString.split('\n');

  const shouldCalculateDeterminant = !parseInt(IDET);
  ICOD = parseInt(ICOD);
  teta1 = parseInt(teta1);
  teta2 = parseInt(teta2);

  const params = {
    teta1,
    teta2,
    tol: Math.pow(10, TOLm),
  };

  console.log({ params });

  let answer;
  let method;

  switch(ICOD) {
    case 1:
      answer = newtonMethod(params);
      method = 'Newton';
      break;
    case 2:
      answer = broydenMethod(params);
      method = 'Broyden';
      break;
    default:
      break;
  }

  createOutputFile(answer, ICOD, method);
}

main().then(response => console.log(response));