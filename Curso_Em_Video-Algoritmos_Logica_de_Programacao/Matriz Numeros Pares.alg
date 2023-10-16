algoritmo "Matriz Pares"
var
   valores : vetor[1..5, 1..5] de inteiro
   l, c, numpares : inteiro
inicio
   Para l <- 1 ate 5 faca
      Para c <- 1 ate 5 faca
          Escreva("Digite um valor para [",l,",",c,"]: ")
          Leia(valores[l,c])
      FimPara
   FimPara
   Escreval("======================")
   Escreval("M A T R I Z")
   Para l <- 1 ate 5 faca
      Para c <- 1 ate 5 faca
          Escreva(valores[l,c]:3)
      FimPara
      Escreval()
   FimPara
   Escreval("======================")
   Escreval("M A T R I Z  P A R E S")
    Para l <- 1 ate 5 faca
      Para c <- 1 ate 5 faca
          se (valores[l,c] % 2 = 0) entao
             Escreva(valores[l,c]:3)
             numpares <- numpares + 1
          senao
             Escreva("  X":3)
          fimse
      FimPara
      Escreval()
   FimPara
   Escreval(" Total de números pares: ", numpares)
fimalgoritmo
