/* const doc = fetch('./image.png')

doc.then(r => r.blob()).then(body=>{
    const blobUrl = URL.createObjectURL(body)
    const imagemDom = document.querySelector('img')
    imagemDom.src = blobUrl 
}) */

/* Usamos blob para lidar com arquivos https://developer.mozilla.org/en-US/docs/Web/API/Response/blob */

const cep = fetch('https://viacep.com.br/ws/01001000/json')

/* cep.then((response)=>{
    console.log(response.headers);
    response.headers.forEach(console.log)
}) */

/* https://developer.mozilla.org/en-US/docs/Glossary/Response_header */

cep.then((response)=>{
    console.log(response.status); //status da requisição
    console.log(response.ok); //valor booleano representando sucesso ou fracasso da requisição
    console.log(response.url); // url da requisisão
    console.log(response.type); //tipo da requisição, ex: se foi no seu servidor 'basic', se foi fora com permissão  'cors' ou não.
})