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
selecionar('a');
