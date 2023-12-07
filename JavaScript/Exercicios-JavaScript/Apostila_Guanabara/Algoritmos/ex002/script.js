function enviar(){
    let nome = document.getElementById('nomeUsuario').value
    let res = document.getElementById('resposta')
    res.innerText = (`Olá ${nome}, seja bem vindo!`)
}