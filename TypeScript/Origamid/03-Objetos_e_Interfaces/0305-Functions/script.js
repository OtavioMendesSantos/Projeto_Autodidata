"use strict";
// // function somar(a: number, b: number, c?: number): number {
// //   return a + b + (c || 0);
// // }
function arredondar(n) {
    if (typeof n === "string") {
        return Math.ceil(Number(n)).toString();
    }
    else {
        return Math.ceil(n);
    }
}
console.log(arredondar(69.69));
console.log(arredondar('69.69'));
