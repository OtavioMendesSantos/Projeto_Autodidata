export type Status =
  | "Paga"
  | "Recusada pela operadora de cartão"
  | "Aguardando pagamento";

export interface Transacao {
  "Cliente Novo": number;
  Data: string;
  Email: string;
  "Forma de Pagamento": string;
  ID: number;
  Nome: string;
  Status: Status;
  "Valor (R$)": string;
}
