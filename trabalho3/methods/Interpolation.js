function Interpolation({ n, mainX, pairs }) {
  let total = 0;
  for (const { x: currentX, y: currentY } of pairs) {
    let upSum = 1;
    let downSum = 1;
    for (const { x } of pairs) {
      if (x === currentX) continue;
      upSum *= (mainX - x);
      downSum *= (currentX - x);
    }

    total += currentY*(upSum/downSum);
  }

  console.log({ total });

  return {
    y: total,
  };
}

module.exports = Interpolation;