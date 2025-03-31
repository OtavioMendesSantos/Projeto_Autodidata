export default function normalizarTransacao(
  transacao: TransacaoAPI
): Transacao {
  const {
    Nome,
    ID,
    Data,
    Status,
    Email,
    ["Cliente Novo"]: ClienteNovo,
    ["Valor (R$)"]: Valor,
    ["Forma de Pagamento"]: Pagamento,
  } = transacao;

  return {
    nome: Nome,
    id: ID,
    data: Data,
    status: Status,
    email: Email,
    moeda: Valor,
    valor: 0,
    pagamento: Pagamento,
    novo: Boolean(ClienteNovo),
  };
}
