//1 Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .

let n = 5;
let linha = ' ';
let asteriscos = '*';


for (let indexLinha = 0; indexLinha < n; indexLinha += 1) {
    linha = linha + asteriscos;
}
for (let indexLinha = 0; indexLinha < n; indexLinha += 1) {
    console.log(linha);
}

//2 Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

let n = 5;
let linha = '';
let asteriscos = '*';

for (let index = 0; index < n; index += 1) {
    for (let index2 = 0; index2 < index + 1; index2 += 1) {
      linha = linha + asteriscos;             
  }
  console.log(linha);
  linha = '';  
}

//3 Agora inverta o lado do triângulo.
let n = 5;
let linha = '';
let asteriscos = '*';
let base = n;

for (let indexLinha = 0; indexLinha < n; indexLinha += 1) {
  for (let indexColuna = 0; indexColuna <= n; indexColuna += 1) {
    if (indexColuna < base) {
        linha = linha + ' ';
    }
    else {
    linha = linha + asteriscos;
    }
  }
  console.log(linha);
  linha = '';
  base -= 1;

