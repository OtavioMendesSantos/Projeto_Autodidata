algoritmo "Sequência de Fibonacci"
Procedimento ProximoFibonacci(VAR A, B: inteiro)
var C: inteiro
inicio
C <- A + B
   Escreva(C)
   A <- B
   B <- C
fimprocedimento
var
T1, T2, T3, contador : inteiro
inicio
   T1 <- 0
   Escreva(T1)
   T2 <- 1
   Escreva(T2)
Para contador:= 1 ate 11 faca
   ProximoFibonacci(T1, T2)
Fimpara
fimalgoritmo
