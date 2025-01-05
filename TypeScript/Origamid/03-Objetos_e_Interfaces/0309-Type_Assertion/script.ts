// const video = document.querySelector(".player") as HTMLVideoElement;

interface Produto {
  nome: string;
  preco: number;
}

async function fetchProduto() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  const json = (await response.json()) as Promise<Produto>;
  return json;
}

async function handleProduto() {
  const produto = await fetchProduto();
  console.log((produto as Produto).nome); // produto.nome;
  console.log(produto.preco);
}

// const video = document.querySelector("video")!;
// video.play()
// document.querySelector("a")!.href = "https://google.com.br"

const video1 = document.querySelector(".player") as HTMLVideoElement;
const video2 = <HTMLVideoElement>document.querySelector(".player");
const video3 = document.querySelector<HTMLVideoElement>(".player");
const video4 = document.querySelector(".player");
// (video4 as HTMLVideoElement).volume = 0.5;
