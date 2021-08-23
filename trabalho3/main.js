const io = require('console-read-write');
const fs = require('fs');
const util = require('util');
const createOutputFile = require('./utils/createOutputFile');
const Interpolation = require('./methods/Interpolation');
const Regression = require('./methods/Regression');

util.inspect.defaultOptions.depth = null;

async function main() {
  console.log('Digite o nome do arquivo:(ele deve estar na mesma pasta do executavel)');
  const fileName = await io.read();
  // const fileName = 'input2.txt';

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
    n,
    ...rest
  ] = bufferAsString.split('\n');

  ICOD = parseInt(ICOD);
  n = parseInt(n);

  const pairs = rest.slice(0, n).map((line) => {
    const [x,y] = line.split(' ');
    return { x: parseFloat(x), y: parseFloat(y) };
  });
  const mainX = parseFloat(rest[n]);

  const params = {
    n,
    mainX,
    pairs,
  };

  console.log({ params });

  let answer;
  let method;

  switch(ICOD) {
    case 1:
      method = 'Interpolação';
      answer = Interpolation(params);
      break;
    case 2:
      method = 'Regressão';
      answer = Regression(params);
      break;
    default:
      break;
  }

  createOutputFile(answer, method);
}

main().then(response => console.log(response));