/* 
const promesa = new Promise((resolve, reject) => {
    setTimeout(()=>{
        if (nome === 'Otávio') {
            resolve(nome);
        } else {
            reject(nome);
        }
    }, 5000)
})

promesa.then((resolucao) => {
    console.log(resolucao + ' está escrito certo'); // Valor do parâmetro de resolve 
    return 'oi'
}).then((resolucao)=>{
    console.log(ok); // Valor do return de then 
}).catch(()=>{
    console.log('nome inválido: ' + nome); //Valor do parâmetro de reject 
}).finally(console.log('acabou'))

let nome;
*/

const login = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('Usuário Logado')
    },1000)
})

const dados = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('Dados Carregados')
    },1500)
})

const carregouTudo = Promise.all([login, dados])

carregouTudo.then((resolucao)=>{
    console.log(resolucao);
})