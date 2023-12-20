function escrevaNomeCompleto(nome, sobrenome){
    return (nome + " " + sobrenome )
}

function escrevaIdade(idade){
    return idade + " anos"
}

(function escrevaPerfil(){
    console.log(`Meu nome é ${escrevaNomeCompleto("Otávio", "Mendes Santos")}, tenho ${escrevaIdade(18)}.`)
})()
