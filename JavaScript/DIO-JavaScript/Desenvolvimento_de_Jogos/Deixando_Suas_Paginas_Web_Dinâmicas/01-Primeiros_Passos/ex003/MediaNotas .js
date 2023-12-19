/* 
Faça um algoritmo que dado as 3 notas Tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e sua classificação conforma a tabela abaixo:

Media = (nota 1 + nota 2 + nota 3 )/ 3;

Classificação:
    -Média menor que 5, reprovação.
    -Média entre 5 e 7, recuperação.
    -Média acima de 7, aprovado.
*/

let n1 = 8;
let n2 = 9;
let n3 = 8;
let media = ((n1 + n2 + n3) / 3)
let status;

if (media < 5) {
    status = "reprovado"
} else if (media >=5 && media <= 7) {
    status = "de recuperação"
} else if (media > 7) {
    status = "aprovado";
}

console.log(`O aluno está ${status}`)