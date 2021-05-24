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

// Escolho uma palavra;
// Verifico se a palavra tem o mesmo significado de trás pra frente;
// Se sim, é uma palíndromo. Se não, não é palíndromo.

//2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor.