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

if (a > b && a > c) {
    console.log('a é o maior número');
}
else if (b > a && b > c) {
  console.log('b é o maior número');
}
else {
    console.log('c é o maior número');
}

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

let porcentagem = 40;

if (porcentagem < 0 || porcentagem > 100) {
    console.log('Erro: valor inválido');
} else if (porcentagem >=90) {
  console.log('Sua nota é A');
}
else if (porcentagem >= 80) {
  console.log('Sua nota é B');
}
else if (porcentagem >= 70) {
  console.log('Sua nota é C');
}

else if (porcentagem >= 60) {
  console.log('Sua nota é D');
}
else {
  console.log('Sua nota é F');
}

//8 Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .

let number1 = 1;
let number2 = 5;
let number3 = 3;

if (number1 % 2 == 0 || number2 % 2 == 0 || number3 == 0) {
  console.log(true);
}
else {
  console.log(false);
}

//9 Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .

let x = 8;
let y = 4;
let z = 10;

let isOdd = true;

if(x % 2 === 0 || y % 2 === 0 || z % 2 === 0) {
  isOdd = false;
}
console.log(isOdd);

//10 Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

let custoProduto = 8;
let valorVenda = 20;


if (custoProduto >= 0 && valorVenda >= 0) {
  let custoProdutoTotal= custoProduto * 1.2;
  let lucro = (valorVenda - custoProdutoTotal) * 1000;
  console.log(lucro);
}
else {
  console.log("Erro: valor inválido");
}

//11 Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

let salario = 3000;
let aliquota;
let impostoRenda;

if (salario <= 1556.94) {
  let aliquota = salario * 0.08;
  let salarioLiquido = salario - aliquota;
  console.log(salarioLiquido);
}
else if (salario >= 1556.95 && salario <= 2594.92) {
  let aliquota = salario * 0.09;
  let salarioLiquido = salario - aliquota;
  console.log(salarioLiquido);
}
else if (salario >= 2594.93 && salario <= 5189.82) {
  let aliquota = salario * 0.11;
  let salarioLiquido = salario - aliquota;
  console.log(salarioLiquido)
}
else {
  let aliquota = 570.88;
  console.log(salario - aliquota);
}

let salarioLiquido = salario - aliquota;

if(salarioLiquido < 1903.98) {
  let impostoRenda = 0;
}
else if (salarioLiquido <= 2826.65) {
 let impostoRenda = (salarioLiquido * 0.075) - 142.80;
}
else if (salarioLiquido <= 3751.05) {
  let impostoRenda = (salarioLiquido * 0.15) - 354.80;
}
else if (salarioLiquido <= 4664.68) {
  let impostoRenda = (salarioLiquido * 0.225) - 636.13;
}
else {
  let impostoRenda = (salarioLiquido * 0.275) - 869.36;
}

console.log(salarioLiquido - impostoRenda);