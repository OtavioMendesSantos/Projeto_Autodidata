algoritmo "Analisador de Strings - Fun��es predefinidas"
var
N: Literal
C: Inteiro
inicio
   Escreva("Digite seu nome: ")
   Leia(n)
   Escreval("Total de letras no seu nome: ", Compr(n))
   Escreval("Seu nome em maiusculas � ", maiusc(n))
   Escreval("Seu nome em minusculas � ", minusc(n))
   Escreval("A primeira letra do seu nome e ", copia(n,1 , 1))
   Escreval("A ultima letra do seu nome e ", copia(Maiusc(n), compr(n), 1))
   Escreval("Seu nome tem a letra 'A' na posi��o: ", pos("A", maiusc(N)))
   Escreval("O codigo da letra A �: ", Asc("A"))
   Escreval("A letra de c�digo 65 �: ", Carac(65))
   
   Para C <- Compr(N) ate 1 passo -1 faca
      Escreva(copia(Maiusc(n),c, 1))
   Fimpara
fimalgoritmo
