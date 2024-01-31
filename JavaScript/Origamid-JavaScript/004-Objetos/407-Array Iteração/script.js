// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
/* const detalhamentoCursos = { //NodeList -> Array
  titulos: Array.from(document.querySelectorAll('h1')),
  descricoes: Array.from(document.querySelectorAll('p')),
  aulas: Array.from(document.querySelectorAll('.aulas')),
  horas: Array.from(document.querySelectorAll('.horas')),
}
 */
const cursos = document.querySelectorAll('.curso')
const arrayCursos = Array.from(cursos)

const objetosCursos = arrayCursos.map((curso)=>{
  const titulo = curso.querySelector('h1').innerText;
  const descricao = curso.querySelector('p').innerText;
  const aula = curso.querySelector('.aulas').innerText;
  const hora = curso.querySelector('.horas').innerText;
  return {
    titulo,
    descricao,
    aula,
    hora
  }
})

/* console.log(detalhamentoCursos) */
console.log(objetosCursos)

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

/* const numerosMaiores100 = numeros.reduce((total, numero, i)=>{
  if (numero > 100){
    total[i] = numero
    return total
  }
  return total
}, {}) */

const numerosMaiores100 = numeros.filter((numero)=>numero>100)

console.log(numerosMaiores100)

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
const possuiBaixo = instrumentos.some((instrumento)=> instrumento === 'Baixo')

console.log(possuiBaixo)

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const vtCompras = compras.reduce((total, compra)=>{
  const valorFormatado = +compra.preco.slice(2).replace(',','.')
  return total + valorFormatado
},0)

console.log(vtCompras.toLocaleString('pt-BR', {style: "currency", currency: "BRL"}))
