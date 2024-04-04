/* 
function somar (a,b){
    return a +b
} 
*/
/* 
const somar = function (a, b){
    return a + b
}
*/

// Remova o erro
const priceNumber = n => +n.replace('R$', '').replace(',', '.');
priceNumber('R$ 99,99');

// Crie uma IIFE e isole o escopo
// de qualquer código JS.
const nome = 'Adalberto'; //Interessante, neste caso, é preciso colocar um ponto e vírgula

(()=>{
    const nome = 'Jucerularus'
    console.log(nome)
})()
console.log(nome)


// Como podemos utilizar a função abaixo.
const active = callback => callback();

active(()=>{
    console.log('Teste Active');
})
