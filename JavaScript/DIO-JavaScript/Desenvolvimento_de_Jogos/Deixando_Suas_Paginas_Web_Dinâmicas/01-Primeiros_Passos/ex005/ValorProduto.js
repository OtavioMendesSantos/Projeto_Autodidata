/* 
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilizr os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de Pagamento:
    1- À vista no débito, recebe 10% de desconto.
    2- À vista no dinheiro ou PIX, recebe 15% de desconto.
    3- Em duas vezes, preço normal de etiqueta sem juros;
    4- Acima de 2 vezes, preço normal de etiqueta mais juros de 10%;
*/

let precoProduto = 100;
let escolhaPag = 2;

switch (escolhaPag){
    case 1:
        console.log(`${precoProduto * 0.9}`)
        break;
    case 2:
        console.log(`${precoProduto * 0.85}`)
        break;
    case 3:
        console.log(`${precoProduto}`)
        break;
    case 4:
        console.log(`${(precoProduto * 1.1).toFixed(2)}`)
        break;
    default:
        console.log("Informe um valor válido.")
        break;
}