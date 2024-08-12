"use strict";
const produto = "Livro";
let preco = 213.45;
// preco = 'texto'
const carro = {
    marca: "Audi",
    portas: 4,
};
carro.modelo = "R8";
const barato = 2000 < 4000 ? true : "Caro";
function somar(a, b) {
    return a + b;
}
console.log(somar(1, 2));
// console.log(somar(1, '2'))
function transformarNumero(produto) {
    produto.preco = "R$ " + produto.preco;
    return produto;
}
const console = {
    marca: 'Xbox',
    preco: '3000'
};
