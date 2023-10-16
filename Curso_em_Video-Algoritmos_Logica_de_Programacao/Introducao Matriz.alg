algoritmo "Ler Matriz"
var
mat: vetor[1..3, 1..2] de inteiro //MATRIZ É um vetor com mais uma dimensão
l, c : inteiro
inicio
para l <- 1 ate 3 faca
   Para c <- 1 ate 2 faca
      Escreval("Digite o valor de [", l, ",", c ,"]")
      leia(mat[l,c])
   FimPara
FimPara

para l <- 1 ate 3 faca
   Para c <- 1 ate 2 faca
      Escreva(mat[l,c])
   FimPara
   ESCREVAL()
FimPara

fimalgoritmo
