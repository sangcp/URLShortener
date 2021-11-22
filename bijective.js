const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const base = alphabet.length;

function encode(inputnum){
    let encoded = '';
    let num = inputnum;
    if(num === 0)
        return alphabet[num];
    while (num){
        const remainder = num % base;
        num = Math.floor(num / base);
        encoded = alphabet[remainder].toString() + encoded;
    }
  return encoded;
}

function decode(inputstr){
    let decoded = 0;
    let str = inputstr;
    while (str){
        const index = alphabet.indexOf(str[0]);
        const power = str.length - 1;
        decoded += index * (base**power);
        str = str.substring(1);
    }
    return decoded;
}

module.exports.encode = encode;
module.exports.decode = decode;