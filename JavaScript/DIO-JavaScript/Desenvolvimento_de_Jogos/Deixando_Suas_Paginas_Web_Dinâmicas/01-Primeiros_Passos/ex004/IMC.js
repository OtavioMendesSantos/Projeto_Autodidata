/* 
IMC - Índice de Massa Corporal é um critério da OMS para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Fórmrula: IMC = peso / (altura ^ 2)
Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
    -Abaixo de 18.5 Abaixo do peso;
    -Entre 18.5 e 25 Peso normal;
    -Entre 25 e 30 Acima do Peso;
    -Entre 30 e 40 Obeso
    -Acima de 40 Obesidade grave;
*/

let altura = 1.76;
let peso = 140;
let imc = (peso / (altura ** 2)) 

if (imc < 18.5){
    console.log(`O ${imc.toFixed(1)} é considerado Abaixo do peso`)
} else if (imc >= 18.5 && imc <= 25) {
    console.log(`O ${imc.toFixed(1)} é considerado Peso normal`)
} else if (imc > 25 && imc <= 30){
    console.log(`O ${imc.toFixed(1)} é considerado Acima do Peso`)
} else if (imc > 30 && imc <= 40){
    console.log(`O ${imc.toFixed(1)} é considerado Obeso`)
} else if (imc > 40){
    console.log(`O ${imc.toFixed(1)} é considerado Obesidade Grave`)
} 