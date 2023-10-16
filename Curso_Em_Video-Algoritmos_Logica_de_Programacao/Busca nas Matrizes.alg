algoritmo "Busca nas Matrizes"

var
matriz : vetor[1..4, 1..4] de inteiro
l, c, Somadiagonal, produto2linha, maiornumero: inteiro
inicio
   Para l <- 1 ate 4 faca
      Para c <- 1 ate 4 faca
         Escreva("Escreva o valor da posição [",l,",",c,"]: ")
         Leia(Matriz[l,c])
      FimPara
   FimPara
Escreval("--------------------------------------")
   Escreval("Soma dos números da diagonal principal")
      Para l <- 1 ate 4 faca
         Para c <- 1 ate 4 faca
            Escreva(Matriz[l,c]:3)
            Se (l = c) entao
               Somadiagonal <- (Somadiagonal + Matriz[l,c])
            Fimse
         FimPara
         Escreval()
      FimPara
   Escreval("A soma dos números da diagonal é: ", Somadiagonal)
Escreval("--------------------------------------")
   Escreval("Multiplicação dos números da 2° linha")
      produto2linha <- 1
      Para c <- 1 ate 4 faca
         Escreva(Matriz[2,c]:3)
         produto2linha <- (produto2linha * Matriz[2,c])
      FimPara
      Escreval()
   Escreval("O produto dos números da 2 linha é:", produto2linha)
Escreval("--------------------------------------")
   Escreval("Maior valor da 3° coluna")
       Para l <- 1 ate 4 faca
          Escreva(Matriz[l,3]:3)
             se (Matriz[l,3] > maiornumero) entao
                maiornumero <- Matriz[l,3]
             fimse
       FimPara
   Escreval("O maior valor da 3° coluna é: ", maiornumero)
fimalgoritmo

