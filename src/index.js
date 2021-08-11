module.exports = function reverse (n) {
    let p = Math.abs(n);

  let str = String(p);
  console.log('str '  + str)
  let newNum = '';
  for( let i = str.length-1; i >= 0; i--) {
   newNum += str[i];
  }
  console.log(newNum)
  newNum = Number(newNum);
  return newNum;
}
