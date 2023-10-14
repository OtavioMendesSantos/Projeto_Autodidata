algoritmo "PROCEDIMENTOS E FUNÇÕES"
//---------------------------------------------------------------------//
   Funcao Menu(var opcaoescolhida : inteiro) : Inteiro
   Inicio
     Escreval("------------------------")
     Escreval("CALCULADORA DE 2 NÚMEROS")
     Escreval("------------------------")
     Escreval("[1] - Somar")
     Escreval("[2] - Subtrair")
     Escreval("[3] - Multiplicar")
     Escreval("[4] - Dividir")
     Escreval("[5] - Sair")
     Escreval("------------------------")
     Escreva("Escolha uma opção: ")
     Leia(opcaoescolhida)
     Escreval("------------------------")
     Retorne opcaoescolhida      //Para voltar esse valor ao código principal
   FimFuncao
//---------------------------------------------------------------------//
   Procedimento soma(var x,y : real)
   Var
   Resultado : real
   Inicio
    resultado <- (X + Y)
    Escreval("O resultado da soma de ", x, " e ", y, " é: ", resultado)
   FimProcedimento
//---------------------------------------------------------------------//
   Funcao subtracao(var x,y : real) : real
   Var
   Resultado : real
   Inicio
    resultado <- (X - Y)
    Escreval("O resultado da subtração de ", x, " e ", y, " é: ", resultado)
Fimfuncao
//---------------------------------------------------------------------//
   Funcao multiplicacao(var x,y : real) : real
   Var
   Resultado : real
   Inicio
    resultado <- (X * Y)
    Escreval("O resultado da multiplição de ", x, " e ", y, " é: ", resultado)
    Fimfuncao
//---------------------------------------------------------------------//
   Funcao divisao(var x,y : real) : real
   Var
   Resultado : real
   Inicio
    resultado <- (X / Y)
    Escreval("O resultado da divisão de ", x, " e ", y, " é: ", resultado)
    Fimfuncao
//---------------------------------------------------------------------//
var
opcaoescolhida, numoperacoes : inteiro
resposta, x , y: real
inicio
   Repita
      OpcaoEscolhida <- Menu(Opcaoescolhida)
      
      se (opcaoescolhida > 5) ou (opcaoescolhida <= 0) entao
         Escreval("------------------------")
         Escreval("Por favor, apenas digite números inteiros de 1 a 5 ")
         Escreval("------------------------")
      Fimse
      se opcaoescolhida <> 5 entao
         numoperacoes <- numoperacoes + 1
         Escreva("Informe o 1 número: ")
            Leia(x)
         Escreva("Informe o 2 número: ")
            Leia(y)
      Fimse
      se (opcaoescolhida = 1) entao
         soma(x, y)                      // usei um procedimento apenas como forma de demonstrar sua diferença de uma função
      fimse                              // a principal difença de um procedimento para uma função, é o retorno de dados
      se (opcaoescolhida = 2) entao
         resposta <- subtracao(x, y)
      fimse
      se (opcaoescolhida = 3) entao
        resposta <- multiplicacao(x, y)
      fimse
      se (opcaoescolhida = 4) entao
        resposta <- divisao(x, y)
      fimse

      Escreval(" ")
      Escreval(" ")
      Escreval("Operações feitas: ", numoperacoes)
   Ate (opcaoescolhida = 5)
   Escreval("Obrigado :)")
fimalgoritmo
