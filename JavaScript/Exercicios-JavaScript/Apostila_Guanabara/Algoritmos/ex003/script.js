function mostrarMensagem(){
    const salario = document.querySelector("#salario")
    const funcionario = document.querySelector("#funcionario")
    const resposta = document.querySelector("#resposta")
    if (salario <= 0 || funcionario.value == ""){
        alert("informe um valor válido!")
    } else {
        resposta.innerHTML = (`O funcionário ${funcionario.value}, tem um salário de R$${salario.value}`)
    }   
}

/* Poderia fazer isso de forma mais elaborada, mas ainda não sei criar elementos com Js */