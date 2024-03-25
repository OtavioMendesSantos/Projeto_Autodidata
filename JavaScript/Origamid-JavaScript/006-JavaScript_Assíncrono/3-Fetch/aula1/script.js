/*
const cep = fetch('https://viacep.com.br/ws/01001000/json')

cep.then(resolucao =>{
    return resolucao.json()
}).then(body=>{
    console.log(body);
    const resultado = document.querySelector('.resultado')
    resultado.innerText += body.cep
    resultado.innerText += body.logradouro

})
*/

const doc = fetch('./style.css')

doc.then(resolucao =>{
    return resolucao.text()
}).then(body=>{
    console.log(body);

    const style = document.createElement('style')
    style.innerHTML = body
    document.body.appendChild(style)
})

const sobre = fetch('./sobre.html')
const div = document.createElement('div')

sobre.then(resolucao =>resolucao.text()).then(body=>{
    div.innerHTML = body
    const titulo = div.querySelector('h1')
    document.querySelector('h1').innerHTML = titulo.innerHTML
    console.log(titulo);
})