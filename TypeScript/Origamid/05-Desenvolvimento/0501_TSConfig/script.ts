//* Duck Typing
//* "Se parece com um pato, nada como um pato e grasna como um pato, então provavelmente é um pato." - Wikipédia
interface Produto {
  nome: string;
  preco: number;
  quantidade: number;
}

const produto1 = {
  nome: "Camiseta",
  preco: 49.9,
  quantidade: 5,
  cor: "azul",
};

const produto2 = {
  nome: "carro",
  preco: 19000,
  quantidade: 10,
  rodas: 4,
};

const produto3 = {
  nome: "carro",
  quantidade: 10,
  rodas: 4,
};

function mostrarQnt(produto: Produto) {
  console.log(produto.quantidade + 0);
}

mostrarQnt(produto1);
mostrarQnt(produto2);
// mostrarQnt(produto3)

function mostrarQntPartial(produto: Partial<Produto>) {
  produto.quantidade && console.log(produto.quantidade + 0);
}
mostrarQntPartial(produto3);

interface Post {
  titulo: string;
  visualizacoes: number;
  tags: string[];
  [key: string]: unknown;
}

const artigo: Post = {
  titulo: "Como ser programador",
  visualizacoes: 300,
  tags: ["programacao", "html", "css"],
  autor: "Pedro",
};

if (typeof artigo.autor === "string") {
  artigo.autor.toUpperCase();
}

interface ObjetoLiteral {
  [key: string]: unknown;
}

type ObjetoLiteral2 = Record<string, unknown>;

// function mostrarTipo(obj: ObjetoLiteral){
function mostrarTipo(obj: ObjetoLiteral2) {
  if ("titulo" in obj) {
    console.log(obj.titulo);
  }
}

mostrarTipo(artigo);
