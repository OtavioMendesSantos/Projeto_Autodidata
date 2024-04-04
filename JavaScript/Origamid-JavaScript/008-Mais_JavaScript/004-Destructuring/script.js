/*
const cliente = {
  nome: 'Andre',
  compras: {
    digitais: {
      livros: ['Livro 1', 'Livro 2'],
      videos: ['Video JS', 'Video HTML']
    },
    fisicas: {
      cadernos: ['Caderno 1']
    }
  }
}

//console.log(cliente.compras.digitais.livros);
//console.log(cliente.compras.digitais.videos);

//const {nome} = cliente
//const {digitais, fisicas} = cliente.compras
const {
  nome,
  compras: {
    digitais,
    fisicas, 
    fisicas: {cadernos}}
} = cliente
//const {livros, videos} = cliente.compras.digitais;

console.log(nome)
console.log(digitais)
console.log(cadernos)
console.log(fisicas)
*/

// Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn);
//console.log(btnStyles);

const {backgroundColor, color, margin} = btnStyles
console.log(backgroundColor);
console.log(color);
console.log(margin);



// Troque os valores das variáveis abaixo
let cursoAtivo = 'JavaScript';
let cursoInativo = 'HTML';

[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo];
console.log(cursoAtivo);
console.log(cursoInativo);

// Corrija o erro abaixo
const cachorro = {
  nome: 'Bob',
  raca: 'Labrador',
  cor: 'Amarelo'
}

const {cor: bobCor} = cachorro;

console.log(bobCor);