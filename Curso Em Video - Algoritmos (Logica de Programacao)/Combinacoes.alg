algoritmo "Combinações"
var
numero, aux : Inteiro
pcoluna, scoluna, numoperacoes : inteiro
inicio
Escreva ("Informe quantos números voce deseja combinar: ")
    Leia (numero)

Para aux <- 1 ate numero faca
    enquanto (pcoluna < numero) faca
        pcoluna <- pcoluna + 1
        enquanto (scoluna < numero) faca
            scoluna <- scoluna + 1
            Escreval (pcoluna, scoluna)
            numoperacoes <- numoperacoes + 1
        fimenquanto
        scoluna <- 0
    fimenquanto
Fimpara
Escreval("número total de operações: ", numoperacoes)
fimalgoritmo
