const frutas =['Banana', 'Maçã', 'Pêra']
const frase = 'JavaScript é Legal'

/* for (const fruta of frutas){
    console.log(fruta)
}

for (const caracter of frase){
    console.log(caracter)
}*/

/* fetch('https://pokeapi.co/api/v2/pokemon')
.then((({headers}) => console.log(headers))) */

/* const buttons = document.querySelectorAll('button');

for(const btn of buttons) {
  btn.style.background = 'blue';
}

console.log(...buttons); */

/* const btnUnico = document.querySelector('button');
const btnStyles = getComputedStyle(btnUnico)


for (const style of btnStyles){
    console.log(`${style}: ${btnStyles[style]}`);
} */

// Crie 4 li's na página utilizando o for...of adicione uma classe a cada li

function createLi(conteudo = 'vazio'){
    const li = document.createElement('li')
    li.innerHTML = conteudo
    return li
}

const conteudos = ['maçã', 'banana', 'laranja', 'pêra']
const lista = document.querySelector('#lista-dinamica')

for ( item of conteudos){
    const li = lista.appendChild(createLi(item))
    li.classList.add('dinamico')
}

// Utilize o for...in para listar todas as propriedades e valores do objeto window

for (item in window){
    console.log(`${item}: ${window[item]}`)
}


