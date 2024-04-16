/* const regexp = /\w+/gi
const regexp1 = new RegExp('\\w+', 'gi')
const frase = 'JavaScript é legal 404'
console.log(frase.replace(regexp, '1'));
console.log(frase.replace(regexp1, '2')); */

/* const regexp = /Java/g
const frase = 'JavaScript e Java Linguagem 101'
 */
/* let i = 0
while(regexp.test(frase)){
    console.log(i++, regexp.lastIndex);
} */

//.test() retorna um valor booleano

/* console.log(regexp.lastIndex);   //0
console.log(regexp.test(frase)); //true
console.log(regexp.lastIndex);   //4
console.log(regexp.test(frase)); //true
console.log(regexp.lastIndex);   //17
console.log(regexp.test(frase)); //false
console.log(regexp.lastIndex);   //0 -reinicia */

//.exec() retorna uma array com um array de informações, mais que um booleano 
const regexp = /\w{2,}/g
const frase2 = 'JavaScript, TypeScript e CoffeeScript';
let regexpResult

while((regexpResult = regexp.exec(frase2)) !== null){
    console.log(regexpResult);
}

/* console.log(regexp.exec(frase2)); //['JavaScript', index: 0, ...]
console.log(regexp.exec(frase2)); //['TypeScript', index: 12, ...]
console.log(regexp.exec(frase2)); //['CoffeeScript', index: 25, ...]
console.log(regexp.exec(frase2)); //null */