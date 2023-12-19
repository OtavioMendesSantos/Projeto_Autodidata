/* 
Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
    1- Preço do Etanol;
    2- Preço da Gasolina;
    3- Tipo de combustível que está no seu carro;
    4- Gasto médio de combustível do carro por KM;
    5- Distância em KM da viagem;

Imprima o valor que será gasto para realizar a viagem no console.
*/

let precoEtanol = 3.64;
let precoGasolina = 5.63;
let tipoCombustivelAtual = "etanol"; //gasolina/etanol
let distanciaViagem = 550;

//Valor Padrão
let desempenho = 11; //desempenho com gasolina, e eficiencia do etanol é equivalente a 70% da gasolina
let preco = precoGasolina;

if (tipoCombustivelAtual == "etanol"){
    desempenho *= 0.7
    preco = precoEtanol;
}

let qntCombustivel = Number(distanciaViagem / desempenho);
let gastoTotal = qntCombustivel * preco

console.log(`Sua viagem de ${distanciaViagem}Km, gastou ${qntCombustivel.toFixed(2)}L de ${tipoCombustivelAtual}, resultando o gasto de R$${gastoTotal}`);