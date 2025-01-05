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
