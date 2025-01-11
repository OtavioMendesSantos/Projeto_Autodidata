"use strict";
const produto1 = {
    nome: "Camiseta",
    preco: 49.9,
    quantidade: 5,
    cor: "azul",
};
const produto2 = {
    nome: "carro",
    preco: 19000,
    quantidade: 10,
    rodas: 4,
};
const produto3 = {
    nome: "carro",
    quantidade: 10,
    rodas: 4,
};
function mostrarQnt(produto) {
    console.log(produto.quantidade + 0);
}
mostrarQnt(produto1);
mostrarQnt(produto2);
// mostrarQnt(produto3)
function mostrarQntPartial(produto) {
    produto.quantidade && console.log(produto.quantidade + 0);
}
mostrarQntPartial(produto3);
const artigo = {
    titulo: "Como ser programador",
    visualizacoes: 300,
    tags: ["programacao", "html", "css"],
    autor: "Pedro",
};
if (typeof artigo.autor === "string") {
    artigo.autor.toUpperCase();
}
// function mostrarTipo(obj: ObjetoLiteral){
function mostrarTipo(obj) {
    if ("titulo" in obj) {
        console.log(obj.titulo);
    }
}
mostrarTipo(artigo);
