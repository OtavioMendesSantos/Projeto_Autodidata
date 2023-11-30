function gerar(){
    let numero = Number(document.getElementById('numero').value)
    let tabela = document.getElementById('tabela')
    tabela.innerHTML = ''

    if(numero == 0){
        window.alert('[ERRO] DIGITE UM NÚMERO')
    } else {
        for(c = 1; c <= 10; c++){
            var resultado = Number(c) * numero
            let item = document.createElement('option')
            item.text = `${c} x ${numero} = ${resultado}`
            tabela.appendChild(item)
        }
    }
}