algoritmo "Torneio de Futebol"
// Função : Ler o nome de 3 times, mostrar os possiveis jogos, sem repetir
var
   time : vetor[1..3] de literal
   c, aux : inteiro
inicio
   Para c <- 1 ate 3 faca
      Escreva("Informe o nome do ", c,"° time: ")
         Leia(time[c])
   Fimpara
   Escreval("--------------------------------------------")
   Para c <- 1 ate 3 faca
      Para aux <- 1 ate 3 faca
         Se aux <> c entao
            Escreval(time[c]:15, "[ ] X [ ] ":15, time[aux])
         fimse
      Fimpara
    Escreval("--------------------------------------------")
   Fimpara
fimalgoritmo
