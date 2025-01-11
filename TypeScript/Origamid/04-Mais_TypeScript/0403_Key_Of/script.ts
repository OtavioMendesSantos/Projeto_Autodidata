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

function selecionar<Chave extends keyof Elementos>(
  seletor: Chave
): Elementos[Chave] | null {
  return document.querySelector(seletor);
}

selecionar("a");

async function fetchData(url: string) {
  const base = "https://api.origamid.dev/json/";
  const response = await fetch(base + url);
  return response.json();
}

interface Jogo {
  nome: string;
  ano: number;
  desenvolvedora: string;
  plataforma: string[];
}

interface Livro {
  nome: string;
  ano: number;
  autor: string;
  paginas: string[];
}

function checkInterface<Interface>(
  obj: unknown,
  key: keyof Interface
): obj is Interface {
  if (obj && typeof obj === "object" && key in obj) {
    return true;
  }
  return false;
}

async function handleData() {
  const jogo = await fetchData("jogo.json");
  console.log(checkInterface<Jogo>(jogo, "desenvolvedora"), jogo);

  const livro = await fetchData("livro.json");
  console.log(checkInterface<Livro>(livro, "autor"), livro);
}
