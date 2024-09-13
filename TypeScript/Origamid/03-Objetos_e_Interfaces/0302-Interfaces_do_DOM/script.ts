// const video = document.querySelector('video');
// const anchor = document.querySelector('a');
// const img = document.querySelector('img');

// if (video instanceof HTMLVideoElement) {
//   console.log(video.currentTime);
//   console.log(video.volume);
// }

// const links = document.querySelectorAll('.link');

// // console.log(NodeListOf) -> Interface != classe
// // console.log(NodeList) -> Classe

// links.forEach((link) => {
//   if (link instanceof HTMLAnchorElement){
//     console.log(link.href)
//   } else {
//     console.log(typeof link)
//   }
// })

// // links.filter - Não funciona
// const ArrayDeLinks = Array.from(links)
// console.log(ArrayDeLinks.filter((link) => link instanceof HTMLAnchorElement))

// 1 - Selecione os elementos com a classe link.

// 2 - Crie uma função que deve ser executada para cada elemento.

// 3 - Modificar através da função o estilo da color e border.

const links = document.querySelectorAll(".link");

function ativarElemento(el: HTMLElement) {
  el.style.color = "red";
  el.style.border = "1px solid red";
}

links.forEach((link) => {
  console.log(link.__proto__)
  if (link instanceof HTMLElement) { ativarElemento(link) } }
);
