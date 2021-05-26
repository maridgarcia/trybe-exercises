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
      biggerNumber = number[index];
  }
  }
  return biggerNumber;
}

console.log(largestNumber([2, 4, 6, 7, 10, 0, -3]));

//3. Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function largestNumber(number) {
  let smallestNumber = 0;
  for (let index in number) {
    if (number[smallestNumber] > number[index]) {
      smallestNumber = index;
  }
  }
  return smallestNumber;
}

console.log(largestNumber([2, 4, 6, 7, 10, 0]));



//4. Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function maiorNome (names) {
  let maiorNome = names[0];
  for (let key in names) {
      if (maiorNome.length < names[key].length) {
          maiorNome = names[key];
      }
    }
    return maiorNome;
}

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

//5. Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function numeros () {

}