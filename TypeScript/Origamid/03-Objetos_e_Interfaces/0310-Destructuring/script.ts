const { body }: { body: HTMLElement } = document;

function handleData({
  nome,
  preco,
  descricao,
}: {
  nome: string;
  descricao?: string;
  preco?: number;
}) {
  console.log(nome.split(""));
  console.log(descricao);
  console.log(preco?.toFixed(2));
}

handleData({
  nome: "543657",
  preco: 2999,
});

function handleClick({
  currentTarget,
  pageX,
  pageY,
}: MouseEvent) {
  if (!currentTarget) return;

  requestAnimationFrame(() => {
    const element = document.createElement("div");
    element.style.width = "20px";
    element.style.height = "20px";
    element.style.backgroundColor = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
    element.style.position = "absolute";
    element.style.transform = "translate(-50%, -50%)";
    element.style.borderRadius = "50%";
    element.style.left = `${pageX}px`;
    element.style.top = `${pageY}px`;
    body.appendChild(element);
    setTimeout(() => element.remove(), 5000);
  });
}

document.documentElement.addEventListener("click", handleClick);
