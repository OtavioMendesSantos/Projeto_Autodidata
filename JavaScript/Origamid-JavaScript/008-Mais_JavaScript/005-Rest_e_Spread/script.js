/* const numeroMaximo = Math.max(4,5,20,10,30,2,33,5); // 33

const listaNumeros = [1,13,21,12,55,2,3,43];
const numeroMaximoSpread = Math.max(...listaNumeros);
const numeroMaximoErrado = Math.max(listaNumeros);

console.log(numeroMaximoErrado); //NaN
console.log(numeroMaximoSpread); //55 */

/* function anunciarGanhadores(premio, ...ganhadores){
    console.log(ganhadores);
    ganhadores.forEach(ganhador => {
        console.log(`${ganhador} ganhou um(a) ${premio}`);
    });
}

// Com operador rest, esta array fica assim: 
// [ [ 'Otávio', 'Matheus', 'Jorge' ] ]

const pessoas = ['Otávio', 'Matheus', 'Jorge']

anunciarGanhadores('Bicicleta', ...pessoas) */

/* const btns = document.querySelectorAll('button'); 
console.log(btns);

//const btnsArray = Array.from(btns);  
const btnsArray = [...btns];       
console.log(btnsArray); */

// Reescreva a função utilizando
// valores iniciais de parâmetros com ES6
/* function createButton(background, color) {
    background = background || 'blue';
    if(color === undefined) {
      color = 'red';
    }
    const buttonElement = document.createElement('button');
    buttonElement.style.background = background;
    return buttonElement;
}  */

function createButton(background = 'blue', color = 'red'){
    const buttonElement = document.createElement('button');
    buttonElement.style.background = background;
    buttonElement.style.color = color;
    return buttonElement;
}

const redButton = createButton();

// Utilize o método push para inserir as frutas ao final de comidas.
const frutas = ['Banana', 'Uva', 'Morango'];
const comidas = ['Pizza', 'Batata'];

comidas.push(...frutas)
