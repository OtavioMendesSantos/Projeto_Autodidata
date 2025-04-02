import countBy from "./CountBy.js";
function filtrarValores(transacao) {
    return transacao.valor !== null;
}
export default class Estatisticas {
    transacoes;
    total;
    pagamento;
    status;
    semana;
    melhorDia;
    constructor(transacoes) {
        this.transacoes = transacoes;
        this.total = this.setTotal();
        this.pagamento = this.setPagamentos();
        this.status = this.setStatus();
        this.semana = this.setSemana();
        this.melhorDia = this.setMelhorDia();
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
    setSemana() {
        const semana = {
            ["domingo"]: 0,
            ["segunda"]: 0,
            ["terça"]: 0,
            ["quarta"]: 0,
            ["quinta"]: 0,
            ["sexta"]: 0,
            ["sabado"]: 0,
        };
        for (let i = 0; i < this.transacoes.length; i++) {
            const transacao = this.transacoes[i];
            const diaDaSemana = new Date(transacao.data).getDay();
            switch (diaDaSemana) {
                case 0:
                    semana["domingo"] += transacao.valor || 0;
                    break;
                case 1:
                    semana["segunda"] += transacao.valor || 0;
                    break;
                case 2:
                    semana["terça"] += transacao.valor || 0;
                    break;
                case 3:
                    semana["quarta"] += transacao.valor || 0;
                    break;
                case 4:
                    semana["quinta"] += transacao.valor || 0;
                    break;
                case 5:
                    semana["sexta"] += transacao.valor || 0;
                    break;
                case 6:
                    semana["sabado"] += transacao.valor || 0;
                    break;
            }
        }
        return semana;
    }
    setMelhorDia() {
        return Object.entries(this.semana).sort((a, b) => b[1] - a[1])[0];
    }
}
//# sourceMappingURL=Estatisticas.js.map