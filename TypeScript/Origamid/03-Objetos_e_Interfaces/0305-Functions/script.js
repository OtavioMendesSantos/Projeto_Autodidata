"use strict";
function somar(a, b, c) {
    return a + b + (c || 0);
}
console.log(somar(1, 2));
console.log(somar(1, 2, 3));
function pintarTela(cor) {
    document.body.style.background = cor;
}
pintarTela('red'); // Aqui o retorno da função é void
