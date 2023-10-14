algoritmo "Soma Parâmetros de Referência"
var
X, y : Inteiro
Procedimento soma(var A, B : inteiro)//Passagem por referência
Inicio
  A <- A + 1
  B <- B + 1
  Escreval("Valor de A = ", A)
  Escreval("Valor de B = ", B)
  Escreval("A soma  vale ", A+B)
Fimprocedimento
inicio
  X <- 4
  Y <- 8
  Soma(X, Y)
  Escreval("Valor de X =", X)
  Escreval("Valor de Y =",Y)
 fimalgoritmo
