// const produto: String = "Livro";
// let preco: Number = 213.45;

// // preco = 'texto'

// const carro: {
//   marca: string;
//   portas: number;
// } = {
//   marca: "Audi",
//   portas: 4,
// };

// carro.modelo = "R8";

// const barato: boolean | string = 2000 < 4000 ? true : "Caro";

// function somar(a: number, b: number): number {
//   return a + b;
// }

// console.log(somar(1, 2));
// // console.log(somar(1, '2'))

// function transformarNumero(produto: { nome: string; preco: string }): Object {
//   produto.preco = "R$ " + produto.preco;
//   return produto
// }

// const console = {
//   marca: 'Xbox',
//   preco: '3000'
// }

// function normalizarTexto(texto) {
//   return texto.trims().toLowercase();
// }


function normalizarTexto(texto: string) {
  return texto.trim().toLowerCase();
}
console.log(normalizarTexto('   TEXTinhO   '));

const input = document.querySelector('input');

const total = localStorage.getItem('total');
if(input && total){
  input.value = total;
  calcularGanho(Number(input.value));
}

function calcularGanho(value: number) {
  const p = document.querySelector('p');
  if (!p) return
  p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
}

function totalMudou() {
  if (!input) return
  localStorage.setItem('total', input.value);
  calcularGanho(Number(input.value));
}

if(input){
  input.addEventListener('keyup', totalMudou);
}
