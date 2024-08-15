interface Aluno  {
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

