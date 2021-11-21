let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; let base = alphabet.length;

function encode(num){
    let encoded = '';
    if(num==0) return alphabet[num];
    while (num){
        let remainder = num % base;
        num = Math.floor(num / base);
        encoded = alphabet[remainder].toString() + encoded;
    }
  return encoded;
}

function decode(str){
    let decoded = 0;
    while (str){
        let index = alphabet.indexOf(str[0]);
        let power = str.length - 1;
        decoded += index * (Math.pow(base, power));
        str = str.substring(1);
    }
    return decoded;
}

module.exports.encode = encode;
module.exports.decode = decode;