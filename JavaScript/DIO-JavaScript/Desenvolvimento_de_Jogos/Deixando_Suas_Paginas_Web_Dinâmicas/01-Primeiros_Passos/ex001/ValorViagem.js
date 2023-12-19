/* 
Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
    1- Preço do combustível;
    2- Gasto médio de combustível do carro por KM;
    3- Distância em KM da viagem;

Imprima o valor da viagem no console.
*/

let precoCombustivel = 5.56;
let consumoMedio = 11;
let distanciaViagem = 110;

let qntGasolina = Number(distanciaViagem / consumoMedio);
let gastoTotal = qntGasolina * precoCombustivel

console.log(`O gasto total é de R$${gastoTotal.toFixed(2)}]`)