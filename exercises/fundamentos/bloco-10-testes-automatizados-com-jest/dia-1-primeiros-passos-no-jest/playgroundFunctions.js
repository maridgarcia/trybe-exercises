const encode = str => {
  str = str.replace(/a/g, '1');
  str = str.replace(/e/g, '2');
  str = str.replace(/i/g, '3');
  str = str.replace(/o/g, '4');
  str = str.replace(/u/g, '5');
  return str;
};
  
const decode = strD => {
  strD = strD.replace(/1/g, 'a');
  strD = strD.replace(/2/g, 'e');
  strD = strD.replace(/3/g, 'i');
  strD = strD.replace(/4/g, 'o');
  strD = strD.replace(/5/g, 'u');
  return strD;
};

module.exports = { encode, decode };
