algoritmo "Matriz Identidade de 3 ordem"

var
identidade:  vetor[1..3, 1..3] de inteiro
l, c : inteiro
inicio
Para l <- 1 ate 3 faca
   Para c <- 1 ate 3 faca
      Se (l = c) entao
         identidade[l,c] <- 1
         Escreva(identidade[l,c])
      Senao
         identidade[l,c] <- 0
         Escreva(identidade[l,c])
      Fimse
   FimPara
   Escreval()
FimPara
fimalgoritmo
