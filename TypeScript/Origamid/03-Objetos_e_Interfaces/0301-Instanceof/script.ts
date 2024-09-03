/* class Produto {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
}

const livro1 = new Produto("Dorohedoro 1");
const livro2 = new Produto("Dorohedoro 2");
console.log(livro1.nome);

console.log(livro1 instanceof Produto);

class Livro extends Produto {
  autor: string;
  constructor(nome: string, autor: string) {
    super(nome);
    this.autor = autor;
  }
}

class Jogo extends Produto {
  jogadores: number;
  constructor(nome: string, jogadores: number) {
    super(nome)
    this.jogadores = jogadores;
  }
}

function buscarProduto(busca: string){
    if (busca === 'Dorohedoro 1'){
        return new Livro('Dorohedoro 1', 'Q. Hayashida')
    }
    if (busca === 'Dark Souls'){
        return new Jogo('Hidetaka Miyazaki', 1)
    }
    return null
}

const produto = buscarProduto('Dorohedoro 1');
if (produto instanceof Livro){
    console.log(produto.autor)
}

const jogo = buscarProduto('Dark Souls');
if (jogo instanceof Jogo){
    console.log(jogo.jogadores)
}

if (produto instanceof Produto){ 
  // Produto é uma instancia de Produto, pois Livro herda de Produto
  console.log(produto.nome);
}

//* instanceof verifica se um objeto pertence a uma classe 

interface Carro {
  nome: string;
}

const honda: Carro = {
  nome: 'Honda',
}

interface Caminhao extends Carro {
  rodas: number;
}

const camburao: Caminhao = {
  nome: 'Camburão',
  rodas: 8
} 

//* Interface cria um contrato/modelo para um objeto. 
//* Interface ≠ Classe
*/

const linkOrigamid = document.getElementById('origamid')

if (linkOrigamid instanceof HTMLAnchorElement){
  linkOrigamid.href = linkOrigamid.href.replace('http://', 'https://')
}

