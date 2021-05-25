//1. Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificaPalindrome(palindromo) {
  for (let index = 0; index < palindromo.length; index += 1) {
   let position = palindromo[palindromo.length - index - 1];
   if (position != palindromo[index]) {
       return false;
   } else {
    return true;
   }
  }
}
console.log(verificaPalindrome('arara'));

//2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function largestNumber(number) {
  let biggerNumber = 0;
  for (let index in number) {
    if (number[biggerNumber] < number[index]) {
      biggerNumber = index;
  }
  }
  return biggerNumber;
}


console.log(largestNumber([2, 4, 6, 7, 10, 0, -3]));
