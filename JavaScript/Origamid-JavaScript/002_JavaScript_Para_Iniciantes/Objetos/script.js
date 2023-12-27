let pessoa = {
    nome: "Otávio",
    sobrenome: "Mendes Santos",
    idade: 18,
    profissao: "estudante",
}
console.log(typeof pessoa)
console.log(typeof pessoa.nome)

var quadrado = {
    lados: 4,
    area: function(lado) {
      return lado * lado;
    },
    perimetro: function(lado) {
      return this.lados * lado; //"this" é o próprio objeto, this == quadrado 
    },
}
  
console.log(quadrado.lados); // 4
console.log(quadrado.area(5)); // 25
console.log(quadrado.perimetro(5)); // 20

const multiplicar = function(a, b) {
    return a * b;
};
console.log(typeof multiplicar)

/* Atividade */
// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome
let eu = {
  nome: "Otávio",
  sobrenome: "Mendes Santos",
  nomeCompleto: function(){
    return this.nome + " " + this.sobrenome
  }
}

console.log(eu.nomeCompleto())

// Crie um método no objeto anterior, que mostre o seu nome completo

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;
console.log(carro.preco)

// Crie um objeto de um cachorro que represente um labrador, preto com 10 anos, que late ao ver um homem
const cachorro = {
  raca: "Labrador",
  cor: "preto",
  idade: 10,
  latir: function(pessoa) {
    if (pessoa === 'homem'){
      return 'Au Au'
    } else {
      return 'nada'
    }
  }
}
console.log(cachorro.latir('homem'))