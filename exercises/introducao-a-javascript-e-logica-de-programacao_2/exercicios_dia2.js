let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1 Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

for (let index = 0; index < numbers.length; index+=1) {
    console.log(numbers[index]);
}

// 2 Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sumOfNumbers = 0;

for (let index = 0; index <numbers.length; index+=1) {
 sumOfNumbers+= numbers[index];
}
console.log(sumOfNumbers);

//3 Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let index = 0; index <numbers.length; index+=1) {
    sum+= (numbers[index]);
   }

   let mediaAritmetica = sum / numbers.length;
   console.log(mediaAritmetica);

//4 Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let index = 0; index <numbers.length; index+=1) {
    sum+= (numbers[index]);
   }
   
   let mediaAritmetica = sum / numbers.length;

   if (mediaAritmetica > 20) {
       console.log('valor maior que 20');
   }
   else {
       console.log('valor menor que 20');
   }

//5 Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = [0];

for (index = 0; index < numbers.length; index+=1) {
    if (numbers[index] > maiorNumero ) {
        maiorNumero = numbers[index];
    }
}
console.log(maiorNumero);

//6 Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0;

for (index=0; index < numbers.length; index+=1) {
    if (numbers[index] % 2 !== 0) {
        impar+= 1;
    }
    
}
    if (numbers[index] % 2 === 0) {
        console.log ('Nenhum valor ímpar encontrado');
    }
    else {
        console.log(impar);
    }

//7 Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = numbers[0];

for (let index = 0; index < numbers.length; index+=1) {
    if (numbers[index] < menorNumero) {
        menorNumero = numbers[index];
    }
}
console.log(menorNumero);

//8 Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let number = [];

for (let index = 1; index <= 25; index += 1) {
    number.push(index);
}

console.log(number);

//9 Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

let numbers = [1,  2,  3,  4,  5,  6,  7,  8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,23, 24, 25];

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index] / 2);
  };