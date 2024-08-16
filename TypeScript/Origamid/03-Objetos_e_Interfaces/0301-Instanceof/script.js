"use strict";
class Produto {
    nome;
    preco;
    cor;
    constructor(nome, preco, cor) {
        this.nome = nome;
        this.preco = preco;
        this.cor = cor;
    }
    precoReal() {
        return this.preco.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
    }
}
const livro1 = new Produto("Dorohedoro 1", 24.5);
const livro2 = new Produto("Dorohedoro 2", 34.5, "Azul");
console.log(livro1.nome);
console.log(livro1.precoReal());
console.log(livro1 instanceof Produto);
class Livro {
    autor;
    constructor(autor) {
        this.autor = autor;
    }
}
class Jogo {
    jogadores;
    constructor(jogadores) {
        this.jogadores = jogadores;
    }
}
function buscarProduto(busca) {
    if (busca === 'Dorohedoro 1') {
        return new Livro('Q. Hayashida');
    }
    if (busca === 'Dark Souls') {
        return new Jogo(1);
    }
    return null;
}
const produto = buscarProduto('Dorohedoro 1');
if (produto instanceof Livro) {
    console.log(produto.autor);
}
const jogo = buscarProduto('Dark Souls');
if (jogo instanceof Jogo) {
    console.log(jogo.jogadores);
}
