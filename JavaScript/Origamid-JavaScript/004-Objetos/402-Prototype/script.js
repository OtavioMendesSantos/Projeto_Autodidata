/* 
function Pessoa (nome, idade){
    this.nome = nome;
    this.idade = idade;
}

const otavio = new Pessoa('otavio', 18)

Pessoa.prototype.sexo = 'M'



console.log(Pessoa())
console.log(otavio.prototype)
 */
// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoa(nome, sobrenome, idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.nomeCompleto = function (){
        return this.nome + ' ' + this.sobrenome
    }
}


Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome
}

const otavio = new Pessoa('Otávio', 'Mendes Santos', 18)
console.log(otavio.nomeCompleto())

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
console.log(NodeList)
console.log(NodeList.prototype)
console.log(HTMLCollection)
console.log(HTMLCollection.prototype)
console.log(Document)
console.log(Document.prototype)

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');
/* 

Se usa -> li.constructor.name

li; 'HTMLLIElement'
li.click; 'Function' 
li.innerText; 'String'
li.value; 'Number'
li.hidden; 'Boolean'
li.offsetLeft; 'Number'
li.click(); 'undefined'

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; 'String'
 */
