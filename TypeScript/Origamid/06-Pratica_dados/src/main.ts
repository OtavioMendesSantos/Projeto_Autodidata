import { CountList } from "./utils/CountBy.js";
import Estatisticas from "./utils/Estatisticas.js";
import fetchData from "./utils/fetchData.js";
import normalizarTransacao from "./utils/normalizarTransacao.js";

async function handleData() {
  const data = await fetchData<TransacaoAPI[]>(
    "https://api.origamid.dev/json/transacoes.json?"
  );
  if (!data) return;
  const transacoes = data.map((item) => normalizarTransacao(item));
  preencherTabela(transacoes);
  preencherEstatisticas(transacoes);
}

function preencherLista(lista: CountList, containerId: string): void {
  const containerElement = document.querySelector<HTMLElement>(`#${containerId}`);
  if (containerElement){
    Object.keys(lista).forEach((key) => {
      containerElement.innerHTML += `<p>${key}: ${lista[key]}</p>`;
    })
  }
}

function preencherEstatisticas(transacoes: Transacao[]): void {
  const data = new Estatisticas(transacoes);
console.log(data)
  preencherLista(data.pagamento, "pagamentos");
  preencherLista(data.status, "status");

  const diaElement = document.querySelector<HTMLElement>("#maisVendido span");
  if (diaElement) {
    diaElement.innerText = data.melhorDia[0];
  }

  const totalElement = document.querySelector<HTMLElement>("#total span");
  if (totalElement) {
    totalElement.innerText = data.total.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }
}

function preencherTabela(transacoes: Transacao[]): void {
  const tabela = document.querySelector<HTMLTableElement>("#transacoes tbody");
  if (!tabela) return;
  transacoes.forEach((transacao) => {
    tabela.innerHTML += `
    <tr>
      <td>${transacao.nome}</td>
      <td>${transacao.email}</td>
      <td>R$ ${transacao.moeda}</td>
      <td>${transacao.pagamento}</td>
      <td>${transacao.status}</td>
    </tr>
    `;
  });
}

handleData();
