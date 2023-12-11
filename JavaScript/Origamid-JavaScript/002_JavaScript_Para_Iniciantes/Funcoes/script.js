// Crie uma função para verificar se um valor é Truthy
function checaValor(valor){
    if(!!valor == true){
        console.log(`O valor ${valor} é verdadeiro`)
    }else{
        console.log(`O valor ${valor} é verdadeiro`)
    }
}
let valor = 1
checaValor(valor)

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado1, lado2, lado3, lado4){
    let perimetro = (lado1 + lado2 + lado3 + lado4)
    return (`A soma dos lados desse quadrado é: ${perimetro}`)
}
let lado1 = 2
let lado2 = 2
let lado3 = 2
let lado4 = 2
console.log(perimetroQuadrado(lado1, lado2, lado3, lado4))

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome){
    // 'nome' e 'sobrenome' agem como variáveis locais aqui
    return (`${nome} ${sobrenome}`)
}
console.log(nomeCompleto("Otávio", "Mendes Santos")) 

// Crie uma função que verifica se um número é par
function parImpar(num){
    if((num % 2) != 0){
        return (`O número ${num} é ímpar`)
    } else {
        return (`O número ${num} é par`)
    }
}
console.log(parImpar(69))

// Crie uma função que retorne o tipo de dado do argumento passado nela (typeof)
function tipoDado(dado){
    return (typeof dado)
}
console.log(tipoDado("Olá Mundo"))

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.
addEventListener("click", function(){console.log("Otávio Mendes Santos")})

// Corrija o erro abaixo - O erro era que a variável let estava dentro da function precisoVisitar, por conta disso, a function jaVisitei não estava conseguindo localizar a variável totalPaises.
function precisoVisitar(paisesVisitados) {
    
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
let totalPaises = 193;
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
  