import fetchData from "./utils/fetchData.js";
import normalizarTransacao from "./utils/normalizarTransacao.js";

async function handleData() {
  const data = await fetchData<TransacaoAPI[]>(
    "https://api.origamid.dev/json/transacoes.json?"
  );
  if (!data) return;
  const transacoes = data.map((item) => normalizarTransacao(item));
  console.log(transacoes);
}

handleData();
