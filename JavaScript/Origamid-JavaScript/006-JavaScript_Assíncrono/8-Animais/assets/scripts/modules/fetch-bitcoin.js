export default async function initFetchBitcoin(){
    /* 
    //Forma Alternativa  
    fetch('https://blockchain.info/ticker')
    .then(r=>r.json())
    .then(json=>{
        console.log(json.BRL)
    })
    .catch(erro=>{
        console.log(Error(error))
    })
    */

    try {
        const bitcoin = await fetch('https://blockchain.info/ticker')
        const bitcoinJson = await bitcoin.json();
        const btcPreco = document.querySelector('.btc-preco')
        btcPreco.innerText = (50 / bitcoinJson.BRL.sell).toFixed(5)
    } catch {
        console.log(Error(error))
    }
}