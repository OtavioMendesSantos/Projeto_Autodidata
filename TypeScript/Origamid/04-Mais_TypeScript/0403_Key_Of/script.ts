/* interface Produto {
  nome: string;
  preco: number;
  novo: boolean;
}

let chave: keyof Produto = "novo";
let chave2: keyof Produto = "preco";

function somar(a: number, b: number): number {
  return a + b;
}

let cord: typeof somar 

cord = somar */

interface Elementos {
  a: HTMLAnchorElement;
  video: HTMLVideoElement;
  div: HTMLDivElement;
  body: HTMLBodyElement;
  form: HTMLFormElement;
  input: HTMLInputElement;
  button: HTMLButtonElement;
  select: HTMLSelectElement;
  textarea: HTMLTextAreaElement;
  img: HTMLImageElement;
  h1: HTMLHeadingElement;
}

function selecionar<Chave extends keyof Elementos>(seletor: Chave):Elementos[Chave] | null {
  return document.querySelector(seletor)
}

selecionar('a')
