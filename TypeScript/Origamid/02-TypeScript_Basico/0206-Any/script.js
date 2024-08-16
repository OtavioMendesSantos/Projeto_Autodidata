"use strict";
// function normalizar(texto: any){
//   return texto.trim().toLowerCase();
// }
function mostrarCursos(cursos) {
    cursos.forEach((curso) => {
        document.body.innerHTML += `
      <div>
        <h2>${curso.nome}</h2>
        <p>Horas: ${curso.horas}</p>
      </div>
    `;
    });
}
mostrarCursos([{ nome: 'teste', horas: 10 }]);
const dados = 'o any gera problemas';
// mostrarCursos(dados); // TypeError: cursos.forEach is not a function
