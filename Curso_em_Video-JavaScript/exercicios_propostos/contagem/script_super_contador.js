function contar(){
    var a = document.getElementById('inicio').value
    var inicio = Number(a)   /* Ver se essa linha está correta */

    var b = document.getElementById('fim').value
    var fim = Number(b)

    var c = document.getElementById('passo').value
    var passo = Number(c)
    
    var resposta = document.getElementById('resposta')

    if(inicio <= fim && passo < 0 ){ /* 1..10 -> PASSO POSITIVO */
        window.alert('Verifique os dados e tente novamente')
    }else if(inicio >= fim && passo > 0 ){ /* 10..11 -> PASSO NEGATIVO */
        window.alert('Verifique os dados e tente novamente')
    }else if(passo == 0 || inicio < passo && passo > fim ){ /* PASSO NULO ou PASSO MAIOR QUE FIM E INICIO */
        window.alert('Verifique os dados e tente novamente')
    }else{
        var passo_dado = inicio
        if(passo > 0){ /* PASSO POSITIVO */
            do{ 
                passo_dado = (passo_dado + passo)
                var contagem = document.createElement('p')
                contagem.textContent = passo_dado
                resposta.appendChild(contagem)
            }while(passo_dado < fim)
        }else{ /* PASSO NEGATIVO */
           do{
                passo_dado = (passo_dado + passo)
                var contagem = document.createElement('p')
                contagem.textContent = passo_dado
                resposta.appendChild(contagem)
            }while(passo_dado > fim)
        }
    }
}
