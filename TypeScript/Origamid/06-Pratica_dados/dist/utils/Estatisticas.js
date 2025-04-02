import countBy from "./CountBy.js";
function filtrarValores(transacao) {
    return transacao.valor !== null;
}
export default class Estatisticas {
    transacoes;
    total;
    pagamento;
    status;
    constructor(transacoes) {
        this.transacoes = transacoes;
        this.total = this.setTotal();
        this.pagamento = this.setPagamentos();
        this.status = this.setStatus();
    }
    setTotal() {
        return this.transacoes
            .filter((transacao) => filtrarValores(transacao))
            .reduce((acc, item) => {
            return acc + item.valor;
        }, 0);
    }
    setPagamentos() {
        return countBy(this.transacoes.map(({ pagamento }) => pagamento));
    }
    setStatus() {
        return countBy(this.transacoes.map(({ status }) => status));
    }
}
//# sourceMappingURL=Estatisticas.js.map