type Produto = {
  preco: number;
};

type Carro = {
  rodas: number;
  portas: number;
};

function handleProdutoCarro(dados: Carro & Produto) {
  dados.rodas;
  dados.portas;
  dados.preco;
}

handleProdutoCarro({
  preco: 20000,
  rodas: 4,
  portas: 5,
});

type TipoCarro = {
  rodas: number;
  portas: number;
};

type TipoCarroComPreco = TipoCarro & {
  preco: number;
}

interface Carro2 {
  rodas: number;
  portas: number;
}

interface Carro2 {
  preco: number;
}

function handleCarro2(dados: Carro2) {
  dados.rodas;
  dados.portas;
  dados.preco;
}

interface Window {
  userId: number
}

window.userId = 200