function contar(){
    let inicio = Number(document.getElementById('inicio').value)   /* Ver se essa linha está correta */

    let fim = Number(document.getElementById('fim').value)

    let passo = Number(document.getElementById('passo').value)
    
    let resposta = document.getElementById('resposta')

    if(passo == 0 || inicio == 0 || fim == 0 || inicio < passo && passo > fim || passo < 0){ /* PASSO NULO ou PASSO MAIOR QUE FIM E INICIO */
        window.alert('[ERRO] Verifique os dados e tente novamente')
        resposta.innerHTML = ''
    }else{
        resposta.innerHTML = 'Contando... <br>'
        if (fim == inicio){
            resposta.innerHTML += 'FIM = INICIO'
        }else if (inicio < fim){
            for(let c = inicio; c <= fim; c += passo){
                resposta.innerHTML += ` ${c} \u{1F449}` //Forma de colocar emojis
            }
        } else {
            for(let c = inicio; c >= fim; c -= passo){
                resposta.innerHTML += ` ${c} \u{1F449}` 
            }
        } 
        resposta.innerHTML += `\u{1F3C1}`
    }
}

/* if(inicio > fim){ 
while(passo_dado <= fim){ 
    var contagem = document.createElement('span')
    contagem.textContent = passo_dado + '💀'
    resposta.appendChild(contagem)
    passo_dado += passo
}
passo_dado += passo
contagem.textContent = `${passo_dado} ❤`
}else if(inicio < fim){ 
 while(passo_dado >= fim){
     var contagem = document.createElement('span')
     contagem.textContent = passo_dado + '💀'
     resposta.appendChild(contagem)
     passo_dado -= passo
}
passo_dado += passo
contagem.textContent = `${passo_dado} ❤`
}else{
resposta.innerHTML = 'Início = Fim'
} */