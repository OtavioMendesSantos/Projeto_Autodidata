class Veiculo{
	constructor(rodas, combustivel){
		this.rodas = rodas;
        this.combustivel = combustivel;
	}
	acelerar(){
		console.log('acelerou')
	}
	buzinar(){
		console.log('buzinou')
	}
}

class Moto extends Veiculo{
    //para termos constructor numa subclasse, é necessário o uso do super
    constructor(rodas, combustivel, capacete){
        super(rodas, combustivel)
        this.capacete = capacete
    }
	empinar(){
		console.log(`Empinou com ${this.rodas} rodas`)
	}
}

class Carro extends Veiculo{
    drift(){
        console.log(`Carro derrapou com ${this.rodas}`)
    }
    acelerar(){
        super.acelerar()
        console.log('acelerou muito')
    }
}

const honda = new Moto(2, 'Gasolina', true)
console.log(honda);

const mitsubishi = new Carro(4, 'Gasolina')
console.log(mitsubishi);
