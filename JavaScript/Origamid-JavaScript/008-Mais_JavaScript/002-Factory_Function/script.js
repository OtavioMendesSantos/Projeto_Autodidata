/* function createButton(text){
    function element(){
        const buttonElement = document.createElement('button')
        buttonElement.innerText = text
        return buttonElement
    }
    return{
        text,
        element
    }
}

const btnComprar = createButton('Comprar')
const btnVender = createButton('Vender')

console.log(btnComprar);
console.log(btnVender); */

/* function Pessoa(nome){
    if(!(this instanceof Pessoa)) //ou (!new.target)
        return new Pessoa(nome)
    this.nome = nome 
}

Pessoa.prototype.andar = function(){
    return `${this.nome} andou`
}

const estudante = Pessoa('Otávio') */

function $$(selectedElements){
    const elements = document.querySelectorAll(selectedElements)

    function hide(){
        elements.forEach(element => {
            element.style.display = 'none'
        });
        return this
        // permite encadear diversos métodos
    }

    function show(){
        elements.forEach(element => {
            element.style.display = 'initial'
        });
        return this
    }

    function on(onEvent, callback){
        elements.forEach(element => {
            element.addEventListener(onEvent, callback)
        });
        return this

    }

    function addClass(className){
        elements.forEach(element => {
            element.classList.add(className)
        });
        return this

    }
    function removeClass(className){
        elements.forEach(element => {
            element.classList.remove(className)
        });
        return this

    }

    return {
        elements,
        hide,
        show,
        on,
        addClass,
        removeClass,
    }
}

const btns = $$('button')

console.log(btns.hide().show());

function handleClick(event){
    console.log(event.target);
    btns.addClass('ativo')
}

btns.on('click', handleClick)