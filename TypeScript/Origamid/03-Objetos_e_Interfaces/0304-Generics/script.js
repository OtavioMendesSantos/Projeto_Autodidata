"use strict";
// Um generic é uma forma de dizer ao TypeScript que um tipo pode ser substituído por outro tipo
// Permitindo um código flexivel e reutilizável
// Um generic é uma função, classe, interface ou tipo que recebe
// um ou mais parâmetros de tipo, permitindo que você defina tipos
// de forma dinâmica. O parâmetro de tipo é representado por uma
// letra maiúscula (por convenção, geralmente se usa T, que significa
// "Type", mas você pode usar qualquer letra).
// function retorno<variavel>(a: variavel): variavel {
//   return a;
// }
// const string = retorno("teste");
//* string.toUpperCase() -> completa autoáticamente
// const number = retorno(200);
//* number.toFixed(2)
// const boolean = retorno(true);
//* boolean.valueOf()
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const frutas = ['Banana', 'Macã', 'Pera', 'Uva', 'Melancia'];
// function firstFive<T>(lista: T[]){
//   return lista.slice(0, 5);
// }
// console.log(firstFive(numeros));
// console.log(firstFive(frutas));
// function notNull<T>(arg: T){
//   if (arg !== null) {
//     return arg
//   } else {
//     return null
//   }
// }
// notNull(200)?.toFixed(2)
// notNull('teste')?.charAt(0)
function tipoDado(a) {
    const resultado = {
        dado: a,
        type: typeof a,
    };
    return resultado;
}
tipoDado(200).type;
