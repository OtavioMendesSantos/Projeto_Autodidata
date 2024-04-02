/* //Usando uma Função Construtora

function Button(text, background){
    this.text = text;
    this.background = background;
}

Button.prototype.element = function(){
    const buttonElement = document.createElement('button')
    buttonElement.style.backgroundColor = this.background;
    buttonElement.innerText = this.text;

    return buttonElement
}
*/

class Button{
    constructor(options){
        this.options = options;
    }
    static element(){
        const buttonElement = document.createElement('button')
        buttonElement.style.backgroundColor = this.options.background;
        buttonElement.innerText = this.options.text;
        buttonElement.style.color = this.options.color;

        return buttonElement
    }
    appendTo(target){
        const targetElement = document.querySelector(target)
        targetElement.appendChild(Button.element.call(blueButton))

        return targetElement
    }
}

const options = {
    text : 'Comprar',
    background : '#0000ff',
    color : '#ffffff'  
}

const blueButton = new Button(options)
blueButton.appendTo('body')

