/* 
Uma sala contém 5 alunos e cada aluno foi sorteado com um número de 1- 100
Faça um programa que receba os 5 números sosteados e mostre o maior número sorteado.
Dados para entrada:
5
50
10
98
23

saída
98
*/

const {gets, print} = require('./funcoes_auxiliares')
const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);
}

let maiorValor = -1

for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i];
    if (numeroSorteado > maiorValor){
        maiorValor = numeroSorteado
    }
}

console.log(maiorValor)