const frutas = {
    lista:[],
    set nova(fruta){
        this.lista.push(fruta)
    }
}

frutas.nova = 'Banana'
frutas.nova = 'Maça'
// console.log(frutas);

class Button{
    constructor (text, color) {
        this.text = text;
        this.color = color;
    }
    get element(){
        //sem um método de set, este método se tornaria read only, ou seja, não poderia ser modificado

        const type = this._elementType || 'button'

        const buttonElement = document.createElement(type)
        buttonElement.innerText = this.text;
        buttonElement.style.color = this.color;
        
        return buttonElement
    }
    set element(type){
        this._elementType = type
    }
}

const blueButton = new Button('Comprar', 'blue')
blueButton.element