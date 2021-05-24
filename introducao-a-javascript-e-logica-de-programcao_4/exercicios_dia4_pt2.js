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

function biggerNumber(array) {
    for (let i = 0; i < array.lenght; i += 1) {
               
    }
    console.log(biggerNumber[i])
}
console.log(biggerNumber[i])

biggerNumber([2, 3, 6, 7, 10, 1]);