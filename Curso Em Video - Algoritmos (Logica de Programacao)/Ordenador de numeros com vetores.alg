algoritmo "OrdenaVetor"
var
i, j, aux : inteiro
vet: vetor[1..10] de inteiro
inicio
   Para i <- 1 ate 10 faca
      Escreva("Informe valor: ")
         Leia(vet[i])
   Fimpara
   
   Para i <- 1 ate 9 faca        //Como a 4° casa é a ultima, e por consequência, a maior, não é necessário fazer sua ordenação.
      Para j <- i + 1 ate 10 faca //O vetor j sempre será 1 maior que o vetor i
         Se (vet[i] > vet[j]) entao
            aux <- vet[i]
            vet[i] <- vet[j]
            vet[j] <- aux
         Fimse
      Fimpara
   Fimpara

   Para i <- 1 ate 10 faca
      Escreva("{",vet[i], "}")
   Fimpara
fimalgoritmo
