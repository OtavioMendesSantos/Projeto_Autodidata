const controles = document.getElementById('controles')
const cssText = document.querySelector('.css')
const btn = document.querySelector('.btn')

controles.addEventListener('change', handleChange)

function handleChange(event){
    const name = event.target.name
    const value = event.target.value
    handleStyle[name](value)
    saveValues(name, value)
    showCss()
}

const handleStyle = {
    element: btn,
    texto(value){
        this.element.innerText = value
    },
    color(value){
        this.element.style.color = value
    },
    backgroundColor(value){
        this.element.style.backgroundColor = value
    },
    height(value){
        this.element.style.height = value + 'px'
    },
    width(value){
        this.element.style.width = value + 'px'
    },
    border(value){
        this.element.style.border = value
    },
    borderRadius(value){
        this.element.style.borderRadius = value + 'px'
    },
    fontFamily(value){
        this.element.style.fontFamily = value
    },
    fontSize(value){
        this.element.style.fontSize = value + 'rem'
    } 
}

function showCss(){
    cssText.innerHTML =  '<span>' + btn.style.cssText.split('; ').join(';</span><span>') 
}

function setvalues(){
    const properties = Object.keys(localStorage)
    properties.forEach(propertie => {
        handleStyle[propertie](localStorage[propertie])
        controles.elements[propertie].value = localStorage[propertie]
    })
    showCss()
}
setvalues()

function saveValues(name, value){
    localStorage[name] = value
}

const copyBtn = document.querySelector('#copyBtn')

copyBtn.addEventListener('click', ()=>{
    const text = cssText.innerText
    navigator.clipboard.writeText(text)
})