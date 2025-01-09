/* const produto1: (string | number)[] = ["Notebook", 2500];
const produto2: [string, number] = ["Notebook", 2500];

const nome1 = produto1[0]; // string | number
const nome2 = produto2[0]; // string

const [nomeP1, precoP1] = produto1;
const [nome, preco] = produto2;

function getText(selector: string) {
  const el = document.querySelector<HTMLElement>(selector);
  if (el) {
    return [el, el.innerText] as const;
  }
  return null;
}

const button = getText("button");

if (button) {
  button[0].innerText = "Comprar";
  button[1] = "Comprar";
}
 */

async function fetchVendas (){
  const response = await fetch("https://api.origamid.dev/json/vendas.json");
  const data = await response.json();
  console.log(data)
  somarVendas(data)
}
fetchVendas()

interface ProdutoInterface{
  marca: string;
  cor: string;
}

type Venda = [string, number, string, ProdutoInterface];

function somarVendas(data: Venda[]) {
  
  const total = data.reduce((acc, venda) => {
    return acc + venda[1]
  }, 0)

  console.log(total)
}

