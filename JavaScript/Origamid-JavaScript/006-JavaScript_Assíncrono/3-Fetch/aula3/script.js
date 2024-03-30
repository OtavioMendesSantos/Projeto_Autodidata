// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const btnCep = document.querySelector('.btn-cep')

function consultaCep(event){
    event.preventDefault()
    console.log(event)
    const cep = document.querySelector('#cep').value
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response)=>response.text())
    .then((body)=>{
        console.log(body)
        document.querySelector('#cep-resultado').innerText = body
    })
}

btnCep.addEventListener('click', consultaCep)

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s
const bitcoinPreco = document.querySelector('.bitcoin-preco')

function fetchBtc(){
    fetch('https://blockchain.info/ticker')
    .then(resolve=> resolve.json()    )
    .then(data=>{ 
        const bitcoin = data.BRL.buy
        bitcoinPreco.innerHTML = ('R$' + bitcoin).replace('.',',')
    })
}

fetchBtc()
setInterval(fetchBtc, 30000)


// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
const btnPiada = document.querySelector('.btn-piada')
const chuckPiada = document.querySelector('.chuck-piada')

function randomPiada(){
    fetch('https://api.chucknorris.io/jokes/random')
    .then(resolve=>resolve.json())
    .then(body=>{
        chuckPiada.innerText = body.value
    })
}

btnPiada.addEventListener('click', randomPiada)