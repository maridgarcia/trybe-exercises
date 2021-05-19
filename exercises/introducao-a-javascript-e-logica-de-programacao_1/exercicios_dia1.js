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

//5 Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

let num1 = 100;
let num2 = 2;
let num3 = 30;

let somaDosAngulos = num1 + num2 +num3;
let todosOsAngulos =  num1 > 0 && num2 > 0 && num3 > 0;

if (todosOsAngulos) {
    if (somaDosAngulos === 180) {
        console.log(true);
    }
    else {
        console.log(false);
    };
}else {
        console.log('ângulo inválido');
    }

//6 Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let chessPiece = 'Peão';

switch(chessPiece.toLowerCase()) {
    case 'rei':
    console.log('Rei: anda uma casa em todas em direções');
    break;

    case 'rainha':
    console.log('Rainha: anda quantas casas quiser, em todas em direções');
    break;

    case 'torre':
    console.log('Torre: anda em linha reta, quantas casas quiser, na horizontal e vertical');
    break;

    case 'bispo':
    console.log('Bispo: anda na diagonal');
    break;

    case 'cavalo':
    console.log('Cavalo: movimenta-se em L');
    break;

    case 'peão':
    console.log('Peão: anda apenas uma casa pra frente');
    break;
    default:
        console.log('Erro: peça inválida');
}