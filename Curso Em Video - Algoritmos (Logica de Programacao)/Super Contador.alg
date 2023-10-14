algoritmo "Super Contador"
var
opmenu, aux : inteiro
inicio
repita
   Escreval("---------------------------")
   Escreval("          M E N U")
   Escreval("---------------------------")
   Escreval("Selecione a opção desejada:")
   Escreval("[1] Conte de 1 a 10")
   Escreval("[2] Conte de 10 a 1")
   Escreval("[3] Sair")
   Escreval("---------------------------")
       Escreva("Opção escolhida: ")
       Leia(opmenu)
   se opmenu = 1 entao
      aux <- 0
      repita
      aux <- aux + 1
      Escreval(aux, ".. ")
      ate (aux = 10)
   fimse
   se opmenu = 2 entao
      aux <- 11
      repita
      aux <- aux - 1
      Escreval(aux, ".. ")
      ate (aux = 1)
   fimse
ate (opmenu = 3)
fimalgoritmo
