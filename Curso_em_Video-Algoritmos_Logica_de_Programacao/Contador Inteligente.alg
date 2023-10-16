algoritmo "Contador"
var
comeco, fim, aux: real
inicio
Escreval("CONTAGEM INTELIGENTE")
Escreval("--------------------")
Escreva("Começo: ")
  Leia(comeco)
Escreva("Fim: ")
  Leia(fim)
Escreval("--------------------")
Escreval("  C O N T A N D O")
Escreval("--------------------")

se (comeco < fim) entao
Escreval("Crescente...")
  aux <- comeco
  enquanto (fim >= aux) faca
    Escreval(aux, ".. ")
    aux <- aux + 1
  fimenquanto
senao
se (comeco > fim) entao
Escreval("Decrescente...")
  aux <- comeco
  enquanto (fim <= aux) faca
    Escreval(aux, ".. ")
    aux <- aux - 1
  fimenquanto
fimse
fimse
fimalgoritmo
