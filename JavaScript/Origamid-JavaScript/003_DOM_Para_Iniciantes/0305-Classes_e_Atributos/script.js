const menu = document.querySelector('.menu');

menu.classList.add('ativo', 'teste', 'azul');
menu.classList.remove('azul')
menu.classList.toggle('azul')

if (menu.classList.contains('azul')){
    menu.classList.add('possuiAzul')
} else {
    menu.classList.add('naoPossuiAzul')
}

console.log(menu.classList)
//menu.className += " classe" //forma antiga de adicinar classes

console.log(menu.attributes)

const img = document.querySelector('img');

console.log(img.getAttribute('src'))

img.setAttribute('alt', 'é uma raposa')
console.log(img.getAttribute('alt'))



// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu>ul>li>a')
itensMenu.forEach((item) => {
    item.classList.add('ativo')
})
console.log(itensMenu)

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((item, index) => {
    if(index !=0 ){
        item.classList.remove('ativo')
    }
})

// Verifique se as imagens possuem o atributo alt
const imagens = document.querySelectorAll('img')
imagens.forEach((img) => {
    console.log(img.hasAttribute('alt'), img)
})

// Modifique o href do link externo no menu
const linksMenu = document.querySelectorAll('.menu a[href^="http"]')
linksMenu.forEach((link) => {
    link.setAttribute('href' , 'https://otaviomendessantos.github.io/Sites_Portifolio/')
})
console.log(linksMenu)
