// 1 Faça cinco programas, um para cada operação aritmética básica(Adição, subtração, multiplicação, divisão e módulo). Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados.

/*/ let a = 5;
let b = 9;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b); /*/

//2 Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados. 

/*/ let x = 1;
let y = 5;

if (x > y) {
    console.log("x é maior que y");
}

else {
    console.log("y é maior que x");
} /*/

// 3 Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

let a = 4;
let b = 12;
let c = 10;

// if (a > b && a > c) {
//     console.log('a é o maior número');
// }
// else if (b > a && b > c) {
//   console.log('b é o maior número');
// }
// else {
//     console.log('c é o maior número');
// }

//4 Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

let valor = 0;

if (valor > 0) {
  console.log('positivo');
}
else if (valor < 0) {
  console.log('negativo');
}
else {
  console.log('zero');
}