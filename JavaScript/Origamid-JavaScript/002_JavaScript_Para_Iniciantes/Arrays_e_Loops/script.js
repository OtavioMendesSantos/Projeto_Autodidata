// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
const brVenceu = [1959, 1962, 1970, 1994, 2002]

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for (let index = 0; index < brVenceu.length; index++) {
    console.log(`O Brasil ganhou a copa de ${brVenceu[index]}`);   
}
console.log('------------------------------')
// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melancia']
let index = 0;
let fruta;
do{
    fruta = frutas[index]
    console.log(fruta)
    index++;
} while (fruta != 'Pera');

console.log('-------------ou---------------')
for (let index = 0; index < frutas.length; index++) {
    console.log(frutas[index])
    if (frutas[index] == 'Pera'){
        break
    }
}
console.log('------------------------------')

frutas.forEach(function(item){
    console.log(item)
});

console.log('------------------------------')
// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

//fruta = frutas[4]
fruta = frutas[frutas.length -1]
console.log(fruta)