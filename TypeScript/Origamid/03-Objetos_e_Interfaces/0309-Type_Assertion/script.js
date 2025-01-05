"use strict";
// const video = document.querySelector(".player") as HTMLVideoElement;
async function fetchProduto() {
    const response = await fetch("https://api.origamid.dev/json/notebook.json");
    const json = (await response.json());
    return json;
}
async function handleProduto() {
    const produto = await fetchProduto();
    console.log(produto.nome); // produto.nome;
    console.log(produto.preco);
}
// const video = document.querySelector("video")!;
// video.play()
// document.querySelector("a")!.href = "https://google.com.br"
const video1 = document.querySelector(".player");
const video2 = document.querySelector(".player");
const video3 = document.querySelector(".player");
const video4 = document.querySelector(".player");
// (video4 as HTMLVideoElement).volume = 0.5;
