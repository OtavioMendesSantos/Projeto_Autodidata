// Retorne um número aleatório
// entre 1050 e 2000
function numeroAleatorio(min,max){
  return Math.round((Math.random() * (max - min)) + min)
}
console.log(numeroAleatorio(1050, 2000))

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
arrayNumeros = numeros.split(', ')
console.log(Math.max(...arrayNumeros))

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230  ', 'r$  200'];

function limpaPreco(preco){
  preco = +preco.toUpperCase().replace('R$','').trim().replace(',','.')
  preco = +preco.toFixed(2)
  return preco
}

let soma = 0;
listaPrecos.forEach((item)=>{
 soma += limpaPreco(item)
})


console.log(soma.toLocaleString('pt-BR',{style:'currency', currency:'BRL'}))