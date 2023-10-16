algoritmo "Correção de provas"
var
gabarito : vetor[1..5] de literal
nome : vetor[1..3] de literal
nota : vetor[1..5] de literal
NotaAluno : vetor[1..3] de inteiro
c, aux : inteiro
inicio
   Escreval("Passo 1 - Cadastro de Gabarito")
   Escreval("---------------------------------------------------")
   Para c <- 1 ate 5 faca
      Escreva("Informe a resposta da questão ", c, ": ")
         Leia(gabarito[c])
   FimPara
   Escreval("---------------------------------------------------")
   Limpatela
   Escreval("Passo 2 - Cadastro de Provas de Alunos")
   Para c <- 1 ate 3 faca
      Escreva("Informe o nome do aluno: ")
            Leia(nome[c])
         Para aux <- 1 ate 5 faca
            Escreva("Questão ", aux, ": ")
               Leia(nota[aux])
                  se gabarito[aux] = nota[aux] entao
                     NotaAluno[c] <- NotaAluno[c] + 2
                  Fimse
         Fimpara
       Escreval("---------------------------------------------------")
   FimPara
   Limpatela
   Escreval("Passo 3 - Notas Finais")
   Escreval("---------------------------------------------------")
   Para c <- 1 ate 3 faca
      Escreval(Nome[c]:15, NotaAluno[c]:3:1)
   FimPara
   Escreval("---------------------------------------------------")
fimalgoritmo
