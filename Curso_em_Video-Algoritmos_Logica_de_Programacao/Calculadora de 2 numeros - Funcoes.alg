algoritmo "PROCEDIMENTOS E FUN��ES"
//---------------------------------------------------------------------//
   Funcao Menu(var opcaoescolhida : inteiro) : Inteiro
   Inicio
     Escreval("------------------------")
     Escreval("CALCULADORA DE 2 N�MEROS")
     Escreval("------------------------")
     Escreval("[1] - Somar")
     Escreval("[2] - Subtrair")
     Escreval("[3] - Multiplicar")
     Escreval("[4] - Dividir")
     Escreval("[5] - Sair")
     Escreval("------------------------")
     Escreva("Escolha uma op��o: ")
     Leia(opcaoescolhida)
     Escreval("------------------------")
     Retorne opcaoescolhida      //Para voltar esse valor ao c�digo principal
   FimFuncao
//---------------------------------------------------------------------//
   Procedimento soma(var x,y : real)
   Var
   Resultado : real
   Inicio
    resultado <- (X + Y)
    Escreval("O resultado da soma de ", x, " e ", y, " �: ", resultado)
   FimProcedimento
//---------------------------------------------------------------------//
   Funcao subtracao(var x,y : real) : real
   Var
   Resultado : real
   Inicio
    resultado <- (X - Y)
    Escreval("O resultado da subtra��o de ", x, " e ", y, " �: ", resultado)
Fimfuncao
//---------------------------------------------------------------------//
   Funcao multiplicacao(var x,y : real) : real
   Var
   Resultado : real
   Inicio
    resultado <- (X * Y)
    Escreval("O resultado da multipli��o de ", x, " e ", y, " �: ", resultado)
    Fimfuncao
//---------------------------------------------------------------------//
   Funcao divisao(var x,y : real) : real
   Var
   Resultado : real
   Inicio
    resultado <- (X / Y)
    Escreval("O resultado da divis�o de ", x, " e ", y, " �: ", resultado)
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
         Escreval("Por favor, apenas digite n�meros inteiros de 1 a 5 ")
         Escreval("------------------------")
      Fimse
      se opcaoescolhida <> 5 entao
         numoperacoes <- numoperacoes + 1
         Escreva("Informe o 1 n�mero: ")
            Leia(x)
         Escreva("Informe o 2 n�mero: ")
            Leia(y)
      Fimse
      se (opcaoescolhida = 1) entao
         soma(x, y)                      // usei um procedimento apenas como forma de demonstrar sua diferen�a de uma fun��o
      fimse                              // a principal difen�a de um procedimento para uma fun��o, � o retorno de dados
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
      Escreval("Opera��es feitas: ", numoperacoes)
   Ate (opcaoescolhida = 5)
   Escreval("Obrigado :)")
fimalgoritmo
