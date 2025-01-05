"use strict";
const { body } = document;
function handleData({ nome, preco, descricao, }) {
    console.log(nome.split(""));
    console.log(descricao);
    console.log(preco?.toFixed(2));
}
handleData({
    nome: "543657",
    preco: 2999,
});
function handleClick({ currentTarget, pageX, pageY }) {
    if (!currentTarget)
        return;
    requestAnimationFrame(() => {
        const element = document.createElement("div");
        element.style.width = "20px";
        element.style.height = "20px";
        element.style.backgroundColor = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
        element.style.position = "absolute";
        element.style.transform = "translate(-50%, -50%)";
        element.style.borderRadius = "50%";
        element.style.left = `${pageX}px`;
        element.style.top = `${pageY}px`;
        body.appendChild(element);
        setTimeout(() => element.remove(), 5000);
    });
}
document.documentElement.addEventListener("click", handleClick);
function comparar(tipo, ...numeros) {
    if (tipo === "maior") {
        console.log(Math.max(...numeros));
    }
    else {
        console.log(Math.min(...numeros));
    }
}
comparar("menor", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
