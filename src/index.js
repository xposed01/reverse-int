module.exports = function reverse(n) {
  let numberToString = (Math.abs(n)).toString();
  let result = '';

  for (let i = 0; i < numberToString.length; i++) {
    result = `${numberToString[i]}${result}`;
  }
  return Number(result);
}
