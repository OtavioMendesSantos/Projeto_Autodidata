// Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll('p')
paragrafos.forEach((paragrafo, index) => {console.log(paragrafo + ' ' + index )})

// Mostre o texto dos parágrafos no console
paragrafos.forEach((paragrafo, index) => {console.log(paragrafo.innerHTML + ' ' + index )})

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach( () => {
  console.log(i++);
});

imgs.forEach((img) => i++);
