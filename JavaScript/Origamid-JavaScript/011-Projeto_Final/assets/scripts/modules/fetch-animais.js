import AnimaNumeros from './anima-numeros.js'

export default function fetchAnimais(url, target){
    
    // cria a div contendo informações sobre total de animais
    function createAnimal(animal){
        const div = document.createElement('div')
        div.classList.add('numero-animal')
        div.innerHTML = `<h3>${animal.specie}</h3> <span data-numero>${animal.total}</span>`
        
        return div
    }
    
    // preenche cada animal no DOM
    const numerosGrid = document.querySelector(target)
    function preencherAnimais(animal){
        const divAnimal = createAnimal(animal)
        numerosGrid.appendChild(divAnimal)
    }

    function animaAnimaisNumeros(){
        const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
        animaNumeros.init()
    }

    // puxa os animais atraves de um arquivo json e cria cada animal utilizando createAnimal
    async function criarAnimais(){
        try {
            const animaisResponse = await fetch(url)
            const animaisJson = await animaisResponse.json();
            animaisJson.forEach(animal => preencherAnimais(animal));
            animaAnimaisNumeros()
        } catch { 
            console.log(Error(error))
        } 
    }
    
    return criarAnimais()
}