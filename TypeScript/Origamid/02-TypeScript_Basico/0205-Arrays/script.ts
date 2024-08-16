const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const valores = ["1", 2, 3, 4, "5", 6, 7, 8, 9, 10, "11"];

function maiorQue10(data: Array<number>): number[] {
  return data.filter((item) => item > 10);
}

// (number | string)[]
function filtrarValores(data: Array<number | string>) {
  return data.filter((item) => typeof item === "number");
}

console.log(maiorQue10(numeros));
console.log(filtrarValores(valores));


const dados = [
  ['Harry Potter 0', 15],
  ['Harry Potter 1', 20],
  ['Harry Potter 2', 30],
]
