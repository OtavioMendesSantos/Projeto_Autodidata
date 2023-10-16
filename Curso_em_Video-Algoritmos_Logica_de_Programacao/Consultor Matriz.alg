algoritmo "Consultor Matriz"
// Função : Criar na tela uma matriz 4x4 e permitir que o usário escolha entre mostrar a matriz completa, a diagonal principal, ou o triangulo superior e inferior
var
l, c, opcao : inteiro
matriz : vetor[1..4, 1..4] de inteiro
inicio
Para l <- 1 ate 4 faca
   Para c <- 1 ate 4 faca
      Escreva("Informe os valores de [",l,",",c,"]: ")
         Leia(matriz[l,c])
   FimPara
FimPara

Repita
   Escreval("================================")
   Escreval("           M E N U ")
   Escreval("[1] - Mostrar matriz completa")
   Escreval("[2] - Mostrar Diagonal Principal")
   Escreval("[3] - Mostrar triangulo superior")
   Escreval("[4] - Mostrar triangulo inferior")
   Escreval("[5] - Sair")
      Escreva("Opção escolhida: ")
      Leia(opcao)
   Escreval("================================")
   
      Se opcao = 1 entao
         Para l <- 1 ate 4 faca
            Para c <- 1 ate 4 faca
               Escreva(matriz[l,c]:3)
            FimPara
            Escreval()
         FimPara
      Fimse
      
      Se opcao = 2 entao
         Para l <- 1 ate 4 faca
            Para c <- 1 ate 4 faca
               Se (c = l) entao
                  Escreva(matriz[l,c]:3)
               Senao
                  Escreva("  0":3)
               Fimse
            FimPara
            Escreval()
         FimPara
      Fimse
      
      Se opcao = 3 entao
         Para l <- 1 ate 4 faca
            Para c <- 1 ate 4 faca
               Se (l < c) entao
                  Escreva(matriz[l,c]:3)
               Senao
                  Escreva("  0":3)
               Fimse
            FimPara
            Escreval()
         Fimpara
      Fimse
      
      Se opcao = 4 entao
         Para l <- 1 ate 4 faca
            Para c <- 1 ate 4 faca
               Se (l > c) entao
                  Escreva(matriz[l,c]:3)
               Senao
                  Escreva("  0":3)
               Fimse
            FimPara
            Escreval()
         Fimpara
      Fimse

ate(opcao = 5)
fimalgoritmo
