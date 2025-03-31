//! Error: Augmentations for the global scope can only be directly nested in external modules or ambient module declarations.
//? Isso significa que você só pode usar declare global para aumentar o escopo global em dois contextos específicos:
//? Dentro de um módulo externo (arquivo que usa import/export)
//? Dentro de uma declaração de módulo ambiental (declare module)

declare global {
  type Status =
    | "Paga"
    | "Recusada pela operadora de cartão"
    | "Aguardando pagamento"
    | "Estornada";

  type FormaPagamento = "Boleto" | "Cartão de crédito";

  interface TransacaoAPI {
    "Cliente Novo": number;
    Data: string;
    Email: string;
    ID: number;
    Nome: string;
    "Valor (R$)": string;
    Status: Status;
    "Forma de Pagamento": FormaPagamento;
  }

  interface Transacao {
    nome: string;
    id: number;
    data: string;
    status: Status;
    email: string;
    novo: boolean;
    moeda: string;
    valor: number | string;
    pagamento: FormaPagamento;
  }
}

export {};
