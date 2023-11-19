function verificar(){
    var data_atual = new Date()
    var ano_atual = data_atual.getFullYear()
    var ano_nacimento = document.querySelector("#ano_nacimento") 
    var res = document.getElementById('res')

    if(ano_nacimento.value.length == 0 || Number(ano_nacimento.value) > ano_atual){
        window.alert('Verifique os dados e tente novamente')
    } else {
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')  //Dar uma estudada nessas duas linhas

        var sexo = document.getElementsByName('radsex')
        var idade = Number(ano_atual) - Number(ano_nacimento.value)
        var genero = ''
            if(sexo[0].checked){
                genero = 'Homem'

                if(idade >=0 && idade < 12){
                    //crianca
                    img.setAttribute('src', 'img/menino_crianca.jpg')
                } else if (idade < 18) {
                    //adolecente
                    img.setAttribute('src', 'img/homem_jovem.jpeg')
                } else if (idade < 50) {
                    //adulto
                    img.setAttribute('src', 'img/homem_adulto.jpeg')
                } else if (idade > 50){
                    //idoso
                    img.setAttribute('src', 'img/homem_idoso.jpeg')
                } else {
                    //erro
                }
                
            } else if (sexo[1].checked) {
                genero = 'Mulher'

                if(idade >=0 && idade < 12){
                    //criança
                    img.setAttribute('src', 'img/menina_crianca.jpeg')
                } else if (idade < 18) {
                    //adolecente
                    img.setAttribute('src', 'img/mulher_jovem.jpeg')
                } else if (idade < 50) {
                    //adulto
                    img.setAttribute('src', 'img/mulher_adulto.jpeg')
                } else if (idade > 50){ 
                    //idoso
                    img.setAttribute('src', 'img/mulher_idoso.jpeg')
                } else {
                    //erro
                }
            }   
            res.innerHTML = `Detectamos: ${genero} de ${idade} anos`
            res.appendChild(img) 
    }
}
//preciso dar uma estudada sobre esses ".vallue e .length"