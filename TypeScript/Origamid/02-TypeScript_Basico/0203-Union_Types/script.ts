let total: string | number = 200;
total = "200";

function isNumber(value: string | number): true | false {
  if (typeof value === "number") {
    return true;
  } else {
    return false;
  }
}

console.log(isNumber(total));
console.log(isNumber(200));

const button: HTMLButtonElement | null = document.querySelector("button");
button?.addEventListener("click", () => console.log("Clicou"));
