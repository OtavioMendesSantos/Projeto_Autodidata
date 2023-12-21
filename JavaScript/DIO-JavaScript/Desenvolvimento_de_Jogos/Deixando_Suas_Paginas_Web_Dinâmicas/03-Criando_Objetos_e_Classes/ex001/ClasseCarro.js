/* 
Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gato médio de combustível por km rodado.
Crie um método que dado a quantidade de km rodados e o preço do combustível nos dê o valor do gasto em reais para realizar este percurso
*/

class Carro{
    constructor(marca, modelo, cor, consumoMedio){
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.consumoMedio = consumoMedio;
    }
    custoViagem(distancia, precoCombustivel){
        return (`O custo da viagem será de R$${precoCombustivel * (distancia / this.consumoMedio).toFixed(2)}`)
    }
}
const fordka = new Carro("Ford", "Ka", "Vermelho", 15);
console.log(fordka.custoViagem(550, 5.50))