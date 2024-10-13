function somar (a: number, b: number, c?: number): number {
  return a + b + (c || 0)
}

console.log(somar(1, 2)) 
console.log(somar(1, 2, 3)) 

function pintarTela (cor: string){
  document.body.style.background = cor
}

pintarTela('red') // Aqui o retorno da função é void