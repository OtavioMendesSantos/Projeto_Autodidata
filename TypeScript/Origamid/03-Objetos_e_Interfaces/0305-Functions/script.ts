// // function somar(a: number, b: number, c?: number): number {
// //   return a + b + (c || 0);
// // }

// // console.log(somar(1, 2));
// // console.log(somar(1, 2, 3));

// // function pintarTela(cor: string) {
// //   document.body.style.background = cor;
// // }

// // pintarTela("red"); // Aqui o retorno da função é void

// // // function abortar(mensagem: string): never {
// // //   throw new Error(mensagem);
// // // }

// // // abortar("Erro");

// // // console.log("opa");

// // interface Quadrado {
// //   lado: number;
// //   perimetro(lado: number): number;
// // }

// // function calcular(forma: Quadrado) {
// //   forma.perimetro(3)
// // }
// function normalizar(valor: string): string;
// function normalizar(valor: string[]): string[];
// function normalizar(valor: string | string[]): string | string[] {
//   if (Array.isArray(valor)) {
//     return valor.map((v) => v.trim().toLowerCase());
//   } else {
//     return valor.trim().toLowerCase();
//   }
// }

// // function $(selector: number): Date | null; // Erro, ooverload deve ter compatibilidade com a declaração da função
// function $(selector: "a"): HTMLAnchorElement | null;
// function $(selector: "video"): HTMLVideoElement | null;
// function $(selector: string): Element | null;
// function $(selector: string): Element | null {
//   return document.querySelector(selector);
// }

// $("a");
// $("video");
// $(".item");

// Crie uma função que arredonda um valor passado para cima.
// A função pode receber string ou number.
// A função deve retornar o mesmo tipo que ela receber.

function arredondar (n: string): string;
function arredondar (n: number): number;
function arredondar (n: number | string): number | string {
  if (typeof n === "string") {
    return Math.ceil(Number(n)).toString();
  } else {
    return Math.ceil(n);
  }
}

console.log(arredondar(69.69));
console.log(arredondar('69.69'));