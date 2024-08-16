// const button = document.querySelector("button");
// const config = localStorage.getItem("config");

// button?.addEventListener("click", () => alert("CLICK"));

// let total;

// console.log(total);

// function teste(){}

// console.log(typeof total)

// if (total) console.log("Total Foi Definido");
// else console.log("Total Não Foi Definido"); 

interface Produto{
  nome?: string;
}

const jogo: Produto = {
  nome: "Xbox"
}

const livro: Produto = {
}

jogo.nome?.toLocaleLowerCase(); // Operador ? automático
livro.nome?.toLocaleLowerCase();
