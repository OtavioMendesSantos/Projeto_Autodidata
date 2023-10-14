algoritmo "Calculadora Fatorial"
var
fatorial, contador, resultado, aux : inteiro
resposta : literal
inicio
repita
   Escreva("Informe o fatorial desejado a encontrar o resultado: ")
   Leia(Fatorial)
   contador <- Fatorial
   Resultado <- Fatorial
   repita
       resultado <- resultado * (contador - 1)
       contador <- (contador - 1)
   ate (contador = 1)

   Escreval("O resultado de ", fatorial, "! é : ", resultado)
   Escreval ("Você deseja continuar ? [S][N]")
       Leia(resposta)
ate (resposta = "N")

fimalgoritmo
