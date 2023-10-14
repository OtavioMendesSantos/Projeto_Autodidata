algoritmo "Seletor de Pessoas"
var
sexo, aux : literal
idade, corcabelo: inteiro
contadorhomens : inteiro
contadormulheres : inteiro
inicio
repita
   escreval("-------------------")
   escreval("Seletor de pessoas:")
   escreval("-------------------")
   escreval("Qual é o sexo?[M] [F]")
     Leia(sexo)
   escreval("Qual é a idade? ")
     Leia(idade)
   escreval("Qual é a cor do cabelo?")
     escreval("[1]Castanho")
     escreval("[2]Loiro")
     escreval("[3]Ruivo")
     escreval("[4]Preto")
     escreval("[5]Outro")
       Leia(corcabelo)

     se (sexo = "m") E (idade > 18) e (corcabelo = 1) entao
       contadorhomens <- contadorhomens + 1
     fimse

     se (sexo = "f") e (idade > 25) e (idade < 30) e (corcabelo = 2) entao
       contadormulheres <- contadormulheres + 1
     fimse

   Escreval("Deseja continuar? [S] [N]")
     Leia(Aux)
ate (aux = "n")
Escreval("O número de homens maior de 18 e com cabelo castanho é de ", contadorhomens)
Escreval("O número de mulheres com idade entre 25 e 30 com cabelo loiro é de ", contadormulheres)
fimalgoritmo
