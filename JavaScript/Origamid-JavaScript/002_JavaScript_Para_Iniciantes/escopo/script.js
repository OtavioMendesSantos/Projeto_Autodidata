// Por qual motivo o código abaixo retorna com erros? - pois var é um tipo de variável e não possui valor
{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
    console.log(cor, marca, portas)
}
//console.log(var, marca, portas);

// Como corrigir o erro abaixo? -- Basta tirar a variável dois de dentro da function.
const dois = 2;
function somarDois(x) {
  /* const dois = 2; */
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
      console.log(somarDois(4));
      console.log(dividirDois(6));  
  
// O que fazer para total retornar 500?
  const numero = 50;
  
  for(let numero = 0; numero < 10; numero++) {
    console.log(numero);
  }
  
  const total = 10 * numero;
  console.log(total);
