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
// console.log(numbers.length);

for (let index = 0; index <numbers.length; index+=1) {
    sum+= (numbers[index]) / numbers.length;
   }

//    let mediaAritmetica = sum / numbers.length;
   console.log(sum);
