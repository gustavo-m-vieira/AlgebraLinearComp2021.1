function Regression({ n, mainX, pairs }) {
  let sumx = 0;
  let sumy = 0;
  let sumxy = 0;
  let sumx2 = 0;
  
  for (const { x, y } of pairs) {
    sumx += x;
    sumy += y;
    sumxy += x*y;
    sumx2 += x**2;
  }

  const alfa = (n*sumxy - sumx*sumy)/(n*sumx2 - sumx**2);

  const beta = sumy/n - alfa*sumx/n;

  const y = alfa*mainX + beta;

  console.log({ alfa, beta });
  
  return {
    y,
  };
}

module.exports = Regression;