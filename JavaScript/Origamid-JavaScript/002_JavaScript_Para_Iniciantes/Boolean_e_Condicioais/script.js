// Verifique se a sua idade é maior do que a de algum parente
let eu = 18
let pai = 53

// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
if (eu > pai){
    console.log("mais velho")
} else if(eu == pai) {
    console.log("mesma idade")
} else {
    console.log("mais novo")
}

// Qual valor é retornado na seguinte expressão? - 3
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
/* 
(5 - 2) == 3 - true
(5 - ' ') == 5 - true 
(5 - 2) == 3 - true <-- retorna o último valor verdadeiro
*/


// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; //Verdadeiro
if(nome){console.log("verdadeiro")} else {console.log("falso")}

var idade = 28; //Verdadeiro
if(idade){console.log("verdadeiro")} else {console.log("falso")}

var possuiDoutorado = false; //falso
if(possuiDoutorado){console.log("verdadeiro")} else {console.log("falso")}

var empregoFuturo; //falso
if(empregoFuturo){console.log("verdadeiro")} else {console.log("falso")}

var dinheiroNaConta = 0; //falso
if(dinheiroNaConta){console.log("verdadeiro")} else {console.log("falso")}

    //ou 

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
var diferenca = china - brasil
console.log(`A diferença de habitantes entre a China ${china} Milhões e o Brasil ${brasil} Milhões é de ${diferenca} Milhões`)

// O que irá aparecer no console? - Falso
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console? - Cão (&& retorna o último valor que for true)
if((5 > 2) || ('Gato' === 'gato')) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
} 