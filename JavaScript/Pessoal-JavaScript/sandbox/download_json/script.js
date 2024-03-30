const userData = {
    nome: 'João Silva',
    email: 'joao@example.com',
    senha: 'senha123'
};

const userDataJSON = JSON.stringify(userData);

const aDownload = document.querySelector("a")

function tratarNome(nome){
    // Remove acentos
    nome = nome.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    // Remove caracteres especiais e espaços
    nome = nome.replace(/[^a-zA-Z0-9]/g, '');

    return nome
}

const nomeTratado = tratarNome(userData.nome) 
aDownload.download = `dados_${nomeTratado}.json`
aDownload.href = `data:text/json;charset=utf-8,${encodeURIComponent(userDataJSON)}`