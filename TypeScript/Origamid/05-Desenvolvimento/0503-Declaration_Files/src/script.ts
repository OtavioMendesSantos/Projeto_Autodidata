declare global {
  interface Usuario {
    nome: string;
    id: string;
  }
  type Livro = {
    nome: string;
    preco: number;
    quantidade: number;
  };
}

interface Produto {
  nome: string;
  preco: number;
  quantidade: number;
}

export const livro: Produto = {
  nome: "Livro",
  preco: 49.9,
  quantidade: 1,
};
