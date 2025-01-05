"use strict";
// const fetchCursos = async () => {
//   const response = await fetch("https://api.origamid.dev/json/cursos.json");
//   const json = await response.json();
//   handleCursos(json);
// };
// fetchCursos();
const fetchCursos = async () => {
    const response = await fetch("https://api.origamid.dev/json/cursos.json");
    const json = await response.json();
    handleCursos(json);
};
fetchCursos();
function isCurso(value) {
    if (value &&
        typeof value === "object" &&
        "nome" in value &&
        typeof value.nome &&
        "horas" in value &&
        typeof value.horas === "number" &&
        "tags" in value &&
        Array.isArray(value.tags)) {
        return true;
    }
    return false;
}
const handleCursos = (data) => {
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
