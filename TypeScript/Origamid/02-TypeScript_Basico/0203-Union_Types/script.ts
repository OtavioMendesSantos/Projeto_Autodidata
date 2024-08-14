// let total: string | number = 200;
// total = "200";

// function isNumber(value: string | number): true | false {
//   if (typeof value === "number") {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isNumber(total));
// console.log(isNumber(200));

// const button: HTMLButtonElement | null = document.querySelector("button");
// button?.addEventListener("click", () => console.log("Clicou"));

// * Exercícios
// 1 - Crie uma função chamada toNumber
// 2 - A função pode receber number | string
// 3 - Se a função receber um número, retorne um número
// 4 - Se a função receber uma string, retorne um número
// 5 - Se ela receber algo diferente, retorne um erro. (throw "value deve ser um número ou uma string")

function toNumber(value:string|number):number {
    if (typeof value === "number" || typeof value === "string") {
        return Number(value)
    } 
    throw "value deve ser um número ou uma string"
}

console.log(toNumber(200))
console.log(toNumber("200"))
console.log(toNumber({}))
