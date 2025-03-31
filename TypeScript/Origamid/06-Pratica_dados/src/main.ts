import { TransacaoAPI } from "./types/transacao";
import fetchData from "./fetchData.js";

async function handleData() {
  const data = await fetchData<TransacaoAPI[]>(
    "https://api.origamid.dev/json/transacoes.json"
  );
  data?.forEach((element) => {
    console.log(element);
  });
}

handleData();
