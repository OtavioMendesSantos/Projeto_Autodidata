// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const valores = ["1", 2, 3, 4, "5", 6, 7, 8, 9, 10, "11"];

// function maiorQue10(data: Array<number>): number[] {
//   return data.filter((item) => item > 10);
// }

// // (number | string)[]
// function filtrarValores(data: Array<number | string>) {
//   return data.filter((item) => typeof item === "number");
// }

// console.log(maiorQue10(numeros));
// console.log(filtrarValores(valores));

// const dados = [
//   ['Harry Potter 0', 15],
//   ['Harry Potter 1', 20],
//   ['Harry Potter 2', 30],
// ]

/* 
Defina a interface da API: https://api.origamid.dev/json/cursos.json e mostre os dados na tela.
Existem apenas dois níveis de cursos, Iniciante (iniciante) e Avançado (avancado). Se for para iniciante pinte o título de azul, para avançado pinte de vermelho. 
*/

type Nivel = "iniciante" | "avancado";

interface Curso {
  nome: string;
  horas: number;
  aulas: number;
  gratuito: boolean;
  tags: Array<string>;
  idAulas: Array<number>;
  nivel: Nivel;
}

type Cursos = Array<Curso>;

async function fetchCursos() {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");
  const data = await response.json();
  mostrarCursos(data);
}

fetchCursos();

function mostrarCursos(cursos: Cursos) {
  cursos.forEach((item) => {
    const h1 = document.createElement("h1");
    h1.style.color = item.nivel === "iniciante" ? "blue" : "red";
    h1.innerText = item.nome;
    document.body.appendChild(h1);
  })
}
