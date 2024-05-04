export default async function fetchBitcoin(url, target){
    try {
        const bitcoin = await fetch(url)
        const bitcoinJson = await bitcoin.json();
        const btcPreco = document.querySelector(target)
        btcPreco.innerText = (50 / bitcoinJson.BRL.sell).toFixed(5)
    } catch {
        console.log(Error(error))
    }
}