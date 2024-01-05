const listaAnimais = document.querySelector('.animais-lista')

console.log(listaAnimais.clientHeight) 
console.log(listaAnimais.scrollHeight)
console.log(listaAnimais.offsetHeight)

const animaisTopo = listaAnimais.offsetTop;

console.log(animaisTopo)

const rect = document.querySelector('h2').getBoundingClientRect().height;

console.log(rect)

// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImagem = document.querySelector('img').getBoundingClientRect().bottom
console.log(primeiraImagem)

// Retorne a soma da largura de todas as imagens
function larguraImagens(){
    let total = 0;
    let total2 = 0;
    const larguraTotal = document.querySelectorAll('img')
    larguraTotal.forEach((imagem)=>{
        total += imagem.getBoundingClientRect().width
        total2 += imagem.offsetWidth
    })
    console.log('Largura Total das imagens: ' + total)
    console.log('Largura Total das imagens: ' + total2)
}
window.onload = larguraImagens()

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const linksMenu = document.querySelectorAll('.menu li')
console.log(linksMenu)
linksMenu.forEach((link)=>{
    if((link.getBoundingClientRect().height >= 48) && (link.getBoundingClientRect().width  >= 48)){
        console.log('Tamanho ok!')
    }else{
        console.log('Tamanho pequeno!')
    }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const larguraBrowser = window.innerWidth

if(window.innerWidth < 720){
    document.querySelector('.menu').classList.add('menu-mobile')
}

const browserSmall = window.matchMedia('(max-width: 720px)').matches
if (browserSmall){
    document.querySelector('.menu').classList.add('menu-mobile2')
}