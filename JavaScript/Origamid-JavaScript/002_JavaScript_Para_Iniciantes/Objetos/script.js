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
