//Array é um objeto, e um Objeto é um Objeto
let amigo = {nome: 'José',
sexo: 'M',
peso: 85.4,
engordar(p=0){
    console.log('Engordou')
    this.peso += p //'this' autorreferencia o objeto
}
}
console.log(amigo) //Mostra os atributos e valores do objeto

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`) 