"use strict";
// 1 - Crie uma interface UserData para o formulário abaixo
// 2 - Crie uma variável global UserData no window, ela será um objeto qualquer
// 3 - Adicione um evento de keyup ao formulário
// 4 - Quando o evento ocorrer adicione a {[id]: value} ao UserData
// 5 - Salve UserData no localStorage
// 6 - Crie uma User Type Guard, para verificar se o valor de localStorage é compatível com UserData
// 7 - Ao refresh da página, preencha os valores de localStorage (caso seja UserData) no formulário e em window.UserData
window.UserData = {};
function isUserData(data) {
    console.log(data);
    if (data &&
        typeof data === "object" &&
        (("nome" in data && typeof data.nome === "string") ||
            ("email" in data && typeof data.email === "string") ||
            ("cpf" in data && typeof data.cpf === "string"))) {
        return true;
    }
    return false;
}
function handleInput(e) {
    const target = e.target;
    if (target instanceof HTMLInputElement) {
        window.UserData[target.id] = target.value;
        localStorage.setItem("UserData", JSON.stringify(window.UserData));
    }
}
const form = document.querySelector("#form");
form?.addEventListener("keyup", handleInput);
function validJSON(str) {
    try {
        JSON.parse(str);
    }
    catch (e) {
        return false;
    }
    return true;
}
const loadLocalStorage = () => {
    const local = localStorage.getItem("UserData");
    if (local && validJSON(local)) {
        const userData = JSON.parse(local);
        if (isUserData(userData)) {
            Object.entries(userData).forEach(([key, value]) => {
                const input = document.querySelector(`#${key}`);
                if (input)
                    input.value = value;
                window.UserData[key] = value;
            });
        }
    }
    ;
};
loadLocalStorage();
