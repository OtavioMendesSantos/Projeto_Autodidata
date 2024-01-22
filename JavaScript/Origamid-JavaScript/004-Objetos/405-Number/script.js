// Retorne um número aleatório
// entre 1050 e 2000
function numeroAleatorio(min,max){
  return Math.round((Math.random() * (max - min)) + min)
}
for(i = 0; i < 11; i++){
  console.log(numeroAleatorio(1050, 2000))
  console.log(numeroAleatorio(1, 2))
}

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
console.log(Math.max(test))

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];
