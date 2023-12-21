const arrayNumero = [];
function calcularTabuada(numero){
    for (let i = 0; i <= 10; i++ ){
        console.log(`${i} x ${numero} = ${i * numero}`)
        arrayNumero.push(i * numero)
    }
}
calcularTabuada(47)
console.log(arrayNumero)