// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const allP = document.querySelectorAll('p')

const arrayAllP = Array.from(allP)

let totalCaracteres = arrayAllP.reduce((total, p)=>{
  return total += p.innerText.length
}, 0)

console.log(totalCaracteres)

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

/* function newElements(){
  novoElemento = document.createElement(this.tag)
  novoElemento.classList.add(this.classe)
  novoElemento.innerText = this.content

  document.querySelector('section').appendChild(novoElemento)
}

const pDinamico = {
  tag: 'p',
  classe: 'p-dinamico',
  content: 'lorem lorem lorem lorem',
}

newElements.apply(pDinamico) */

function newElements(tag, classe, content){
  novoElemento = document.createElement(tag)
  classe ? novoElemento.classList.add(classe) : ''
  content ? novoElemento.innerHTML = content : ''
  
  return novoElemento
}

console.log(newElements('h1', 'dinamico', 'lorem'))


// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1Titulo = newElements.bind(null, 'h1', 'titulo')
console.log(h1Titulo('H1 dinâmico'))
