"use strict";
const fetchCursos = async () => {
    const response = await fetch("https://api.origamid.dev/json/cursos.json");
    const json = await response.json();
    handleCursos(json);
};
fetchCursos();
const handleCursos = (data) => {
    if (data instanceof Array) {
        console.log("É instância de Array");
    }
    if (Array.isArray(data)) {
        console.log("É array");
    }
};
function isString(value) {
    return typeof value === "string";
}
const handleData = (data) => {
    if (isString(data)) {
        data.toUpperCase();
    }
};
async function fetchProduto() {
    const response = await fetch("https://api.origamid.dev/json/notebook.json");
    const json = await response.json();
    handleProduto(json);
}
fetchProduto();
function isProduto(value) {
    if (value &&
        typeof value === "object" &&
        "nome" in value &&
        "preco" in value) {
        return true;
    }
    else {
        return false;
    }
}
function handleProduto(data) {
    if (isProduto(data)) {
        console.log(data);
    }
}
