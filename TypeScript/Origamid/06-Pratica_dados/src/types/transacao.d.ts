export type Status =
  | "Paga"
  | "Recusada pela operadora de cartão"
  | "Aguardando pagamento"
  | "Estornada";

export type FormaPagamento =
  | "Boleto"
  | "Cartão de crédito"

export interface TransacaoAPI {
  "Cliente Novo": number;
  Data: string;
  Email: string;
  ID: number;
  Nome: string;
  "Valor (R$)": string;
  Status: Status;
  "Forma de Pagamento": FormaPagamento;
}
