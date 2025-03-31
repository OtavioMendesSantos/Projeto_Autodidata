import moedaParaNumero from "./moedaParaNumero.js";
import stringToDate from "./stringToDate.js";
export default function normalizarTransacao(transacao) {
    const { Nome, ID, Data, Status, Email, ["Cliente Novo"]: ClienteNovo, ["Valor (R$)"]: Valor, ["Forma de Pagamento"]: Pagamento, } = transacao;
    return {
        nome: Nome,
        id: ID,
        status: Status,
        email: Email,
        moeda: Valor,
        data: stringToDate(Data),
        valor: moedaParaNumero(Valor),
        pagamento: Pagamento,
        novo: Boolean(ClienteNovo),
    };
}
//# sourceMappingURL=normalizarTransacao.js.map