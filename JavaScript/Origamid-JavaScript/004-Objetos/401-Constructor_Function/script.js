/* function Pessoa(nome, idade, sexo, altura, peso){
    this.nome = nome,
    this.idade = idade,
    this.sexo = sexo,
    this.altura = altura,
    this.peso = peso
}

const otavio = new Pessoa('Otávio', 18, 'M', 1.76, 61)
console.log(otavio) 
*/
/* 
function Dom(seletor) {
    this.selecionar = function (){
        return document.querySelector(seletor)
    }
    this.ativar = function (){
        this.selecionar().classList.add('ativo')
    }
}

const ul = new Dom('ul')
ul.ativar()

const li = new Dom('li')
li.ativar() 
*/


// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nome, idade){
    this.nome = nome,
    this.idade = idade,
    this.andar = function () {
      console.log(this.nome + ' andou')
    }
}
 
// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

const joao = new Pessoa('João', 20)
const maria = new Pessoa('Maria', 25)
const bruno = new Pessoa('Bruno', 15)

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom (seletor){
    this.element = seletor
    this.elements = document.querySelectorAll(this.element)
    this.addClasse = function (classe){
        this.elements().forEach((item)=>{
            item.classList.add(classe)
        })
    }
    this.removeClasse = function (classe){
        this.elements().forEach((item)=>{
            item.classList.remove(classe)
        })
    }
}

const li = new Dom('li')
console.log(li.elements())
console.log(li.addClasse('ativo'))
//console.log(li.removeClasse('ativo'))