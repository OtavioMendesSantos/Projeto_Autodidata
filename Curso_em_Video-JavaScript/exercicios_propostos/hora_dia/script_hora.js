var agora = new Date()
var hora = agora.getHours()

if (hora >= 0 && hora <= 5) {
    //madrugada
    var texto_horas = window.document.getElementById('texto_horas')
    texto_horas.innerText = `Boa Madrugada, agora são ${hora} horas`

    var imagem_horas = window.document.getElementById("imagem_horas")
    imagem_horas.innerHTML = '<img src="img/madrugada.jpeg" alt="imagem-madrugada">'

    document.body.style.backgroundColor = '#800080'
    document.getElementById("section").style.backgroundColor = '#bc6bbc'
} else if (hora <= 12) {
    //dia
    var texto_horas = window.document.getElementById('texto_horas')
    texto_horas.innerText = `Bom dia, agora são ${hora} horas`

    var imagem_horas = window.document.getElementById("imagem_horas")
    imagem_horas.innerHTML = '<img src="img/dia.jpeg" alt="imagem-dia">'

    document.body.style.backgroundColor = '#rgb(252, 221, 21)'
    document.getElementById("section").style.backgroundColor = 'rgb(255, 255, 150)'
} else if (hora <= 18) {
    //tarde
    var texto_horas = window.document.getElementById('texto_horas')
    texto_horas.innerText = `Boa Tarde, agora são ${hora} horas`

    var imagem_horas = window.document.getElementById("imagem_horas")
    imagem_horas.innerHTML = '<img src="img/tarde.jpeg" alt="imagem-tarde">'

    document.body.style.backgroundColor = '#7A4E31'
    document.getElementById("section").style.backgroundColor = '#E05800'
} else if (hora <= 23) {
    //noite
    var texto_horas = window.document.getElementById('texto_horas')
    texto_horas.innerText = `Boa Noite, agora são ${hora} horas`

    var imagem_horas = window.document.getElementById("imagem_horas")
    imagem_horas.innerHTML = '<img src="img/noite.jpeg" alt="imagem-noite">'

    document.body.style.backgroundColor = '#332D29'
    document.getElementById("section").style.backgroundColor = '#47362B'
} else{
    var texto_horas = window.document.getElementById('texto_horas')
    texto_horas.innerText = 'Formato de hora incorreto'
    imagem_horas.innerHTML = '<img src="" alt="Erro">'
}

// A intrução switch não suporta bem condições booleanas

/* O Guanabara fez de uma forma muito mais otimizada, primeiramente ele colocou todo o código dentro de uma function, que era carregado por um evento on load, depois disso ele fez as variáveis com os elementos html e apenas depois disso ele fez os if else, tornando o código muito mais otimizado, com menos linhas e repetindo poucos comandos.*/