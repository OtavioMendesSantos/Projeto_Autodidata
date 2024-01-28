const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array

const primeuraComidaRemovida = comidas.shift()
const ultimaComidaRemovida = comidas.pop()
comidas.push('Arroz')
comidas.unshift('Peixe', 'Batata')

console.log(primeuraComidaRemovida)
console.log(ultimaComidaRemovida)
console.log(comidas)

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes

estudantes.sort()
estudantes.reverse()

console.log(estudantes)
console.log(estudantes.includes('Joana'))
console.log(estudantes.includes('Juliana'))


let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join
let novoHtml = html.split('div').join('li').split('section').join('ul')
console.log(novoHtml)


const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
let carros2 = carros.slice()
carros.pop()