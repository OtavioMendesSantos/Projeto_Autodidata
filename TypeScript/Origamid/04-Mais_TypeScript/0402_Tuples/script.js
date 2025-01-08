"use strict";
const produto1 = ["Notebook", 2500];
const produto2 = ["Notebook", 2500];
const nome1 = produto1[0]; // string | number
const nome2 = produto2[0]; // string
const [nomeP1, precoP1] = produto1;
const [nome, preco] = produto2;
function getText(selector) {
    const el = document.querySelector(selector);
    if (el) {
        return [el, el.innerText];
    }
    return null;
}
const button = getText("button");
if (button) {
    button[0].innerText = "Comprar";
    button[1] = "Comprar";
}
