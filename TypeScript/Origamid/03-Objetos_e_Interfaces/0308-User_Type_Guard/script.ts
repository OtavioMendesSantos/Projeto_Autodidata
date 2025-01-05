// const fetchCursos = async () => {
//   const response = await fetch("https://api.origamid.dev/json/cursos.json");
//   const json = await response.json();
//   handleCursos(json);
// };
// fetchCursos();

// const handleCursos = (data: unknown) => {
//   if (data instanceof Array) {
//     console.log("É instância de Array");
//   }
//   if (Array.isArray(data)) {
//     console.log("É array");
//   }
// };

// function isString(value: unknown): value is string {
//   return typeof value === "string";
// }

// const handleData = (data: unknown) => {
//   if (isString(data)) {
//     data.toUpperCase();
//   }
// };

// async function fetchProduto() {
//   const response = await fetch("https://api.origamid.dev/json/notebook.json");
//   const json = await response.json();
//   handleProduto(json);
// }
// fetchProduto();

// interface Produto {
//   nome: string;
//   preco: number;
// }

// function isProduto(value: unknown): value is Produto {
//   if (
//     value &&
//     typeof value === "object" &&
//     "nome" in value &&
//     "preco" in value
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function handleProduto(data: unknown) {
//   if (isProduto(data)) {
//     console.log(data);
//   }
// }

// 1 - Faça um fetch da API: https://api.origamid.dev/json/cursos.json
// 2 - Defina a interface da API
// 3 - Crie um Type Guard, que garanta que a API possui nome, horas e tags
// 4 - Use Type Guards para garantir a Type Safety do código
// 5 - Preencha os dados da API na tela.

interface Curso {
  aulas: number;
  gratuito: boolean;
  horas: number;
  idAulas: number[];
  nivel: "iniciante" | "avancado";
  nome: string;
  tags: string[];
}

const fetchCursos = async () => {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");
  const json = await response.json();
  handleCursos(json);
};
fetchCursos();

function isCurso(value: unknown): value is Curso {
  if (
    value &&
    typeof value === "object" &&
    "nome" in value &&
    typeof value.nome &&
    "horas" in value &&
    typeof value.horas === "number" &&
    "tags" in value &&
    Array.isArray(value.tags)
  ) {
    return true;
  }
  return false;
}

const handleCursos = (data: unknown) => {
  if (Array.isArray(data)) {
    data
      .filter((curso) => isCurso(curso))
      .forEach((curso) => {
        document.body.innerHTML += `
          <div>
            <h2>${curso.nome}</h2>
            <p>Horas: ${curso.horas}</p>
            <p>Tags: ${curso.tags.join(", ")}</p>
          </div>
        `;
      });
  }
};
