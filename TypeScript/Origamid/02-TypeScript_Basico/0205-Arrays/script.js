"use strict";
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const valores = ["1", 2, 3, 4, "5", 6, 7, 8, 9, 10, "11"];
async function fetchCursos() {
    const response = await fetch("https://api.origamid.dev/json/cursos.json");
    const data = await response.json();
    mostrarCursos(data);
}
fetchCursos();
function mostrarCursos(cursos) {
    cursos.forEach((item) => {
        const h1 = document.createElement("h1");
        h1.style.color = item.nivel === "iniciante" ? "blue" : "red";
        h1.innerText = item.nome;
        document.body.appendChild(h1);
    });
}
