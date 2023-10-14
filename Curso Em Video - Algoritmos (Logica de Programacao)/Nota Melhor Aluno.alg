algoritmo "Notas Alunos"
var
nomealuno, nomemelhoraluno : literal
quantidadealuno, aux: inteiro
notamelhoraluno, notaaluno: real
inicio
Escreval("------------------------")
Escreval("     ESCOLA ALEGRIA     ")
Escreval("------------------------")
Escreva("Quantos alunos a turma tem?: ")
leia(quantidadealuno)
Escreval("------------------------")

aux <- 1

Enquanto (aux <= quantidadealuno) faca
  Escreval("Aluno ", aux)
  Escreva("Nome do aluno: ")
    Leia(nomealuno)
  Escreva("Nota de ", nomealuno,": ")
    Leia(notaaluno)
  Escreval("------------------------")
    aux <- aux + 1

    se (notaaluno > notamelhoraluno) entao
      notamelhoraluno <- notaaluno
      nomemelhoraluno <- nomealuno
    fimse

Fimenquanto

Escreval("O aluno com a melhor nota foi: ", nomemelhoraluno)
Escreval("Sua nota foi de: ", notamelhoraluno)
Escreval("------------------------")
fimalgoritmo
