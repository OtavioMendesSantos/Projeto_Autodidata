type TransacaoValor = Transacao & { valor: number };

function filtrarValores(transacao: Transacao): transacao is TransacaoValor {
  return transacao.valor !== null;
}

export default class Estatisticas {
  private transacoes;
  total;

  constructor(transacoes: Transacao[]) {
    this.transacoes = transacoes;
    this.total = this.setTotal();
  }

  private setTotal() {
    return this.transacoes
      .filter((transacao) => filtrarValores(transacao))
      .reduce((acc, item) => {
        return acc + item.valor;
      }, 0);
  }
}
