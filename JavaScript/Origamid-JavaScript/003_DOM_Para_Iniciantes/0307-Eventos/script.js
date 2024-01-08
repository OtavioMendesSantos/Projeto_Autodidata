/*
const img1 = document.querySelector('img')

function callback(event){
    console.log(event)
}

//img1.addEventListener('click', callback)

const animaisLista = document.querySelector('.animais-lista')

function callback2(event){
    console.log(event.currentTarget)
    console.log(event.target)
    //console.log(event.type)
    //console.log(event.path) 
}

animaisLista.addEventListener('click', callback2)

const linkExterno = document.querySelector('a[href^="http"]')

function preventLinkExterno(event){
    event.preventDefault()
    console.log('bloqueado')
}

linkExterno.addEventListener('click', preventLinkExterno)


const imgs = document.querySelectorAll('img')
function mostrarElemento(event){
    console.log(event.target)
}

imgs.forEach((img)=>{
    img.addEventListener('click', mostrarElemento)
})
*/

//------------------------------------------------------------------------//

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInterno = document.querySelectorAll('a[href^="#"')

function linkInternoClass(event){
    //console.log(event)
    //console.log(event.target)
    event.preventDefault()
    const x = event.target
    x.classList.add('ativo')
    linksInterno.forEach((link)=>{
        if (link != x){
            link.classList.remove('ativo')
        }
    })
}

linksInterno.forEach((link, index)=>{
    link.addEventListener('click', linkInternoClass)
})

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const todosElementosSite = document.querySelectorAll('body *')

function handleElement(e) {
    e.currentTarget.remove()
}

/* todosElementosSite.forEach((elemento)=>{
    elemento.addEventListener('click', handleElement)
})
 */
// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
function handleKeyboardT(event){
    //if(event.key === t){}
    switch (event.key){
        case 't':
            document.documentElement.classList.toggle('textoMaior');
            break 
    }
}

window.addEventListener('keydown', handleKeyboardT)