export default class ValidarCPF {
    constructor(element){
        this.element = element
    }
    limpar(cpf){
        return cpf.replace(/\D/g, '')
    }

    construir(cpf){
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
    }

    formatar(cpf){
        const cpfLimpo = this.limpar(cpf)
        return this.construir(cpfLimpo)
    }
    validar(cpf){
        const matchCPF = cpf.match(/(?:\d{3}[-.\s]?){3}\d{2}/g)
        return (matchCPF && matchCPF[0] === cpf)
    }

    validarMudanca(cpfElement){
        if(this.validar(cpfElement.value)){
            cpfElement.value = this.formatar(cpfElement.value)
            cpfElement.classList.add('valido')
            cpfElement.classList.remove('erro')
            cpfElement.nextElementSibling.classList.remove('ativar')

        } else {
            cpfElement.classList.remove('valido')
            cpfElement.classList.add('erro')
            cpfElement.nextElementSibling.classList.add('ativar')
        }
    }

    adicionarErroSpan(){
        const errorElement = document.createElement('span')
        errorElement.classList.add('error-text')
        errorElement.innerText = 'CPF inválido'
        this.element.parentElement.insertBefore(errorElement, this.element.nextSibling)
    }

    adicionarEvento(){
        this.element.addEventListener('change', (event) => {
            this.validarMudanca(this.element)
        })
    }
    iniciar(){
        this.adicionarErroSpan()
        this.adicionarEvento()
        return this
    }
}