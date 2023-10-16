algoritmo "Analisador de Strings - Funções predefinidas"
var
N: Literal
C: Inteiro
inicio
   Escreva("Digite seu nome: ")
   Leia(n)
   Escreval("Total de letras no seu nome: ", Compr(n))
   Escreval("Seu nome em maiusculas é ", maiusc(n))
   Escreval("Seu nome em minusculas é ", minusc(n))
   Escreval("A primeira letra do seu nome e ", copia(n,1 , 1))
   Escreval("A ultima letra do seu nome e ", copia(Maiusc(n), compr(n), 1))
   Escreval("Seu nome tem a letra 'A' na posição: ", pos("A", maiusc(N)))
   Escreval("O codigo da letra A é: ", Asc("A"))
   Escreval("A letra de código 65 é: ", Carac(65))
   
   Para C <- Compr(N) ate 1 passo -1 faca
      Escreva(copia(Maiusc(n),c, 1))
   Fimpara
fimalgoritmo
