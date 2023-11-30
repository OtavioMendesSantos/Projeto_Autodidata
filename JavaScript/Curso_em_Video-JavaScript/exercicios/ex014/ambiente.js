let num = [5, 2, 8, 9, 3]
num[6] = 8
num.push(7) //coloca um valor na última do array
console.log(`Nosso vetor é o ${num}`) //mostra os números de nosso array
console.log(`O tamanho de nosso vetor é: ${num.length}`) //Mostra o tamanho de nosso vetor
console.log(`O primeiro número do vetor é: ${num[0]}`) //mostra o valor de determinada posição 
console.log(`O vetor em ordem crescente: ${num.sort()}`) //Ordena os valores dos vetores de forma crescente, porém, mostra de forma 'Alfabética'

console.log('Usando a estrutura DO WHILE para incrementar e mostrar os valores de um array')
var contador = []
var cont = 0
do {
    contador[cont] = cont
    cont ++
} while (cont <= 10);
console.log(contador)

console.log('Usando a estrutura FOR para incrementar e mostrar os valores de um array') //Percurso para exibição de vetores
var variavelComposta = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (indice = 0; indice <= variavelComposta.length; ++indice) {
    console.log(variavelComposta[indice])
}

console.log('Usando a estrutura FOR IN para incrementar e mostrar os valores de um array, só funciona para arrays e objetos')
for ( var indice in variavelComposta) {
    console.log(`A posição ${indice} possui o valor ${variavelComposta[indice]}`)
}

console.log('Buscando Valores dentro de objetos')
var testeIndice = [10, 5, 8, 4, 3, 7, 6]
console.log(testeIndice.indexOf(7))
console.log(testeIndice.indexOf(2)) //Retorna -1, o que significa: valor não encontrado