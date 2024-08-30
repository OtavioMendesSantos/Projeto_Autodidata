"use strict";
class Produto {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
}
const livro1 = new Produto("Dorohedoro 1");
const livro2 = new Produto("Dorohedoro 2");
console.log(livro1.nome);
console.log(livro1 instanceof Produto);
class Livro extends Produto {
    autor;
    constructor(nome, autor) {
        super(nome);
        this.autor = autor;
    }
}
class Jogo extends Produto {
    jogadores;
    constructor(nome, jogadores) {
        super(nome);
        this.jogadores = jogadores;
    }
}
function buscarProduto(busca) {
    if (busca === 'Dorohedoro 1') {
        return new Livro('Dorohedoro 1', 'Q. Hayashida');
    }
    if (busca === 'Dark Souls') {
        return new Jogo('Hidetaka Miyazaki', 1);
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
if (produto instanceof Produto) {
    // Produto é uma instancia de Produto, pois Livro herda de Produto
    console.log(produto.nome);
}
const honda = {
    nome: 'Honda',
};
const camburao = {
    nome: 'Camburão',
    rodas: 8
};
//* Interface cria um contrato/modelo para um objeto. 
//* Interface ≠ Classe
