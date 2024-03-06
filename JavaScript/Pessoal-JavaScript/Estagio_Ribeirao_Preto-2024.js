/* 1- Observe o código abaixo:

int INDICE = 13, SOMA = 0, K = 0;
enquanto K < INDICE faça
{
K = K + 1;
SOMA = SOMA + K;
}
imprimir(SOMA);

Ao final do processamento, qual será o valor da variável SOMA?*/
console.log("--------Questão-1--------")

let indice = 13;
let soma = 0;

for(let k = 0; k < indice; k++){
    soma += k;
}

console.log(soma) //78

/* 2- Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência. 

Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;*/
console.log("--------Questão-2--------")
const numerosDeFibonacci = []

function sequenciaDeFibonacci(repeticoes, numero){
    let antecessor = 0
    let sucessor = 1
    let soma = 0
    numerosDeFibonacci.length = 0

    for(let i = 1; i <= repeticoes; i++){        
        soma = antecessor + sucessor
        antecessor = sucessor
        sucessor = soma

        numerosDeFibonacci.push(soma)
    }

    if(numerosDeFibonacci.includes(numero)){
        console.log(`O número: ${numero}, pertence a sequência de Fibonnaci.`)
    }else{
        console.log(`O número: ${numero}, NÃO pertence a sequência de Fibonnaci.`)
    }
    
}

sequenciaDeFibonacci(13, 233)
sequenciaDeFibonacci(13, 127)
sequenciaDeFibonacci(13, 8)

console.log("Os 13 primeiros números de fibonacci: " + numerosDeFibonacci)

/* 3) Descubra a lógica e complete o próximo elemento:
a) 1, 3, 5, 7, ___ = 9
b) 2, 4, 8, 16, 32, 64, ____ = 128
c) 0, 1, 4, 9, 16, 25, 36, ____ = 49
d) 4, 16, 36, 64, ____ = 100
e) 1, 1, 2, 3, 5, 8, ____ = 13
f) 2,10, 12, 16, 17, 18, 19, ____ = 200
*/

/* 4) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.

Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada? 

Resposta: 
    Ligaria um interruptor e iria a sala ver qual lâmpada está ligada, anotaria qual interruptor ligou aquela lâmpada, depois faria o mesmo com a segunda lâmpada e anotaria o resutado, por eliminação, a terceira lâmpada ficaria com a que sobrou.
*/

/* 5) Escreva um programa que inverta os caracteres de um string.
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse; */
console.log("--------Questão-5--------")

function inverterString(palavra){
    let novaPalavra = "";
    for(let i = palavra.length - 1; i >= 0; i--){
        novaPalavra += palavra[i]
    }
    return novaPalavra
}

console.log(inverterString("Olá Mundo!"))
console.log(inverterString("Sou um ótimo candidato para esta vaga :)"))

