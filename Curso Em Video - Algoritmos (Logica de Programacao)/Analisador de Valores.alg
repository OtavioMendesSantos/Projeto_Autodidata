algoritmo "Analisador de Valores"
var
media : real
numero, soma, nulo, somapares, divisiveis5, contador : inteiro
inicio
Escreval("----------------------------------------------")
Para contador:= 1 ate 5 faca
   Escreva("informe o valor do ", contador, "° número: ")
      Leia(numero)
   Se numero = 0 entao
      nulo <- nulo + 1
   Fimse
   Se (numero % 2 = 0) entao
      somapares <- somapares + numero
   Fimse
   Se (numero % 5 = 0) entao
      divisiveis5 <- divisiveis5 + 1
   Fimse
   Se (contador = 5) entao
      media <- soma / contador
   Fimse
   soma <- soma + numero
fimpara
Escreval("----------------------------------------------")
Escreval("A soma entre todos os números é: ", soma)
Escreval("A média entre esses valores é: ", media)
Escreval("A soma dentre os números pares é: ", somapares)
Escreval("Valore nulos: ", nulo)
Escreval("Divisiveis por 5: ", divisiveis5)
Escreval("----------------------------------------------")
fimalgoritmo
