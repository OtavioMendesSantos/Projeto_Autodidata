/* 
Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor de seu IMC (IMC = PESO / ALTURA ^2 )
Instancie uma pessoa chamada José que tenha 70 kg de peso e 1.75 de altura e peça para dizer o valor de seu IMC
*/

class Pessoa{
    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso; 
        this.altura = altura;
    }
    imc() {
        return ((this.peso * (this.altura**2)).toFixed(1))
    }
}

const jose = new Pessoa("José", "70", "1.75");
console.log(`${jose.nome}, tem ${jose.peso}kg e ${jose.altura} de altura, seu IMC é de ${jose.imc()}`);

const otavio = new Pessoa("Otávio", "60", "1.76");
console.log(`${otavio.nome}, tem ${otavio.peso}kg e ${otavio.altura} de altura, seu IMC é de ${otavio.imc()}`);