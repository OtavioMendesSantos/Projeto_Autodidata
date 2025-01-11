"use strict";
/* interface Produto {
  nome: string;
  preco: number;
  novo: boolean;
}

let chave: keyof Produto = "novo";
let chave2: keyof Produto = "preco";

function somar(a: number, b: number): number {
  return a + b;
}

let cord: typeof somar

cord = somar */
function selecionar(seletor) {
    return document.querySelector(seletor);
}
selecionar("a");
async function fetchData(url) {
    const base = "https://api.origamid.dev/json/";
    const response = await fetch(base + url);
    return response.json();
}
function checkInterface(obj, key) {
    if (obj && typeof obj === "object" && key in obj) {
        return true;
    }
    return false;
}
async function handleData() {
    const jogo = await fetchData("jogo.json");
    console.log(checkInterface(jogo, "desenvolvedora"), jogo);
    const livro = await fetchData("livro.json");
    console.log(checkInterface(livro, "autor"), livro);
}
