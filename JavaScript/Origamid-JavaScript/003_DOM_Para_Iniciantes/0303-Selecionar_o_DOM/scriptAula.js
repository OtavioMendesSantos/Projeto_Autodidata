console.log('================================================')
// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll('img')
console.log(imagens)

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagensAnimais = document.querySelectorAll('img[src^="assets/img/imagem"]')
console.log(imagensAnimais)

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]')
console.log(linksInternos)

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector('.animais-descricao section h2')
console.log(primeiroH2.innerHTML);

// Selecione o último p do site
const p = document.querySelectorAll("p");
const ultimoP = p[p.length -1];
console.log(ultimoP)
