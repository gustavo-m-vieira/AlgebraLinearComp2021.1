function getNorm(newVectorX,oldVectorX) {
  let norm = 0;
  for (let i = 0; i < newVectorX.length; i++) {
    if (oldVectorX) norm += (newVectorX[i][0] - oldVectorX[i][0])*(newVectorX[i][0] - oldVectorX[i][0]);
    else norm += newVectorX[i][0]*newVectorX[i][0];
  }

  return Math.sqrt(norm);
}

function getResidue(newVectorX, oldVectorX) {
  return getNorm(newVectorX,oldVectorX)/getNorm(newVectorX);
}

module.exports = getResidue;