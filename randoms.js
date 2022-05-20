module.exports = function randoms(cant) {
  const res = {};
  
  for (let i = 0; i < cant; i++) {
    let rand = Math.floor(Math.random() * 1000) + 1;
    if (res[`${rand}`] === undefined) {
      res[`${rand}`] = 1;
    } else {
      res[`${rand}`]++;
    }
  }
  
  return res;
}
