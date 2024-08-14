"use strict";
let total = 200;
total = "200";
function isNumber(value) {
    if (typeof value === "number") {
        return true;
    }
    else {
        return false;
    }
}
console.log(isNumber(total));
console.log(isNumber(200));
const button = document.querySelector("button");
button?.addEventListener("click", () => console.log("Clicou"));
