/* 
const animaisLista = document.querySelector('.animais-lista')
    //console.log(animaisLista.previousElementSibling.innerHTML = 'olá')
    //console.log(animaisLista.nextElementSibling.innerHTML = 'olá')
    //console.log(animaisLista.children)
    //console.log(animaisLista.children[0].innerHTML)

const animais = document.querySelector('.animais')
const contato = document.querySelector('.contato')
const titulo = document.querySelector('.titulo')
const mapa = document.querySelector('.mapa')

    //animais.appendChild(titulo) // move o item para o final da lista de filhos
    //contato.insertBefore(titulo, mapa) // move o item (1-titulo) para antes do elemento selecionado (2-mapa) 
    //contato.removeChild(titulo) // remove titulo de contato
    //contato.replaceChild(animaisLista, titulo); // substitui 2 elemento pelo 1

const novoH1 = document.createElement('h1')
    //novoH1.innerText = 'Título Adicionado Via JS'
    //novoH1.classList.add('titulo')
    //contato.insertBefore(novoH1, mapa)
    //console.log(novoH1)

const nav = document.querySelector('.menu')
    //const cloneTitulo = titulo.cloneNode(true) //O valor boleano diz se deve clonar seus filhos ou não
    //contato.appendChild(cloneTitulo)
*/

// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu')
const menu2 = menu.cloneNode(true)
const footer = document.querySelector('.copy')

footer.appendChild(menu2)
// Selecione o primeiro DT da dl de Faq
const definitionList = document.querySelector('.faq-lista')
const primeiroDt = definitionList.children[0]
//ou - primeiroDt = definitionList.querySelector('dt')
console.log(primeiroDt)

// Selecione o DD referente ao primeiro DT
const ddPrimeiroDt = primeiroDt.nextElementSibling
console.log(ddPrimeiroDt)

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais')
const faq = document.querySelector('.faq')

faq.replaceChild(animais, definitionList)