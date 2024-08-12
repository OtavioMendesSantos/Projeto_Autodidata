const produto: String = "Livro";
let preco: Number = 213.45;

// preco = 'texto'

const carro: {
  marca: string;
  portas: number;
} = {
  marca: "Audi",
  portas: 4,
};

carro.modelo = "R8";

const barato: boolean | string = 2000 < 4000 ? true : "Caro";

function somar(a: number, b: number): number {
  return a + b;
}

console.log(somar(1, 2));
// console.log(somar(1, '2'))

function transformarNumero(produto: { nome: string; preco: string }): Object {
  produto.preco = "R$ " + produto.preco;
  return produto
}

const console = {
  marca: 'Xbox',
  preco: '3000'
}