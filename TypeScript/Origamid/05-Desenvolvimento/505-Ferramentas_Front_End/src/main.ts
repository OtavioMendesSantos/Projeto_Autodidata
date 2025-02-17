import _ from "lodash";
import Clipboard from "clipboard";

interface Produto {
  nome: string;
}

/* const livro: Produto = {
  nome: "Livro",
} */

console.log(_.difference([1, 2, 3], [1, 2, 4]));

const button = new Clipboard("button");

function handleCopy() {
  console.log("Copiado");
}

button.on("success", handleCopy);
