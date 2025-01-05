"use strict";
function typeGuard(value) {
    if (typeof value === "string") {
        return value.toLowerCase();
    }
    if (typeof value === "number") {
        return value.toFixed();
    }
    if (value instanceof HTMLElement) {
        return value.innerText;
    }
}
typeGuard("Origamid");
typeGuard(200);
typeGuard(document.body);
const obj = {
    name: "Origamid",
};
if ("name" in obj) {
    console.log(obj.name);
}
function handleProduto(data) {
    console.log(data);
    if ('preco' in data) {
        document.body.innerHTML += `
      <p>Nome: ${data.nome}</p>
      <p>Preço: ${data.preco}</p>
    `;
    }
}
async function fetchProduto() {
    const produto = await fetch("https://api.origamid.dev/json/notebook.json").then((r) => r.json());
    handleProduto(produto);
}
;
fetchProduto();
