"use strict";
// function somar(a: number, b: number, c?: number): number {
//   return a + b + (c || 0);
// }
function normalizar(valor) {
    if (Array.isArray(valor)) {
        return valor.map((v) => v.trim().toLowerCase());
    }
    else {
        return valor.trim().toLowerCase();
    }
}
function $(selector) {
    return document.querySelector(selector);
}
$("a");
$("video");
$(".item");
