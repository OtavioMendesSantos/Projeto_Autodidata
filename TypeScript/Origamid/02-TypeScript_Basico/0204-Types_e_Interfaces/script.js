"use strict";
function preencherDados(dados) {
    document.body.innerHTML += `
    <div>
        <h1>${dados.nome}</h1>
        <h2>${dados.idade}</h2>
        <p>${dados.teclado ? "Possui teclado" : "Não possui teclado"}</p>
    </div>
 `;
}
preencherDados({
    nome: "João",
    idade: 30,
    teclado: true,
});
preencherDados({
    nome: "Jorge",
    idade: 3783,
    teclado: false,
});
preencherDados({
    nome: "Jorge",
    idade: 3783,
    teclado: false,
});
const usuario1 = {
    nome: "Jorgin",
    idade: 3783374,
    teclado: true,
};
preencherDados(usuario1);
function pintarCategoria(categoria) {
    if (categoria === 'desing') {
        console.log('desing');
        return;
    }
    console.log('outro da lista');
}
pintarCategoria('desing');
// pintarCategoria('qa')
