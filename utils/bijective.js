const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const base = alphabet.length;

module.exports.encode = (inputNum) => {
  let encoded = '';
  let num = inputNum;
  if (num === 0) return alphabet[num];
  while (num) {
    const remainder = num % base;
    num = Math.floor(num / base);
    encoded = alphabet[remainder].toString() + encoded;
  }
  return encoded;
};

module.exports.decode = (inputStr) => {
  let str = inputStr;
  let decoded = 0;
  while (str) {
    const index = alphabet.indexOf(str[0]);
    const power = str.length - 1;
    decoded += index * (base ** power);
    str = str.substring(1);
  }
  return decoded;
};
