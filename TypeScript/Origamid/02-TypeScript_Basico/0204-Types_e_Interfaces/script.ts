/* interface Aluno  {
  nome: string;
  idade: number;
  teclado: boolean;
};

function preencherDados(dados: Aluno) {
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

const usuario1: Aluno = {
  nome: "Jorgin",
  idade: 3783374,
  teclado: true,
}

preencherDados(usuario1);


type Categorias = 'desing' | 'frontend' | 'backend';

function pintarCategoria(categoria: Categorias) {
    if (categoria === 'desing') {
        console.log('desing')
        return
    }
    console.log('outro da lista')
}

pintarCategoria('desing')
// pintarCategoria('qa')
*/
//* Defina a interface da API: https://api.origamid.dev/json/notebook.json e mostre os dados na tela.

/* 
{
  "nome": "Notebook",
  "preco": 2000,
  "descricao": "Novo notebook com 128gb de memória ram.",
  "garantia": "3",
  "seguroAcidentes": true,
  "empresaFabricante": {
    "nome": "Ranek",
    "fundacao": 1850,
    "pais": "Dinamarca"
  },
  "empresaMontadora": {
    "nome": "Handel",
    "fundacao": 2000,
    "pais": "Polônia"
  }
}
*/

interface Empresa {
  nome: string;
  fundacao: number;
  pais: string;
}

interface Produto{
  nome: string;
  preco: number;
  descricao: string;
  garantia: string;
  seguroAcidentes: boolean;
  empresaFabricante: Empresa;
  empresaMontadora: Empresa;
}

async function fetchProduct() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  const data = await response.json();
  showProduct(data);
}

fetchProduct();

function showProduct(data: Produto) {
  document.body.innerHTML = `
      <div>
        <h2>${data.nome}</h2>
      </div>
    `;
}
