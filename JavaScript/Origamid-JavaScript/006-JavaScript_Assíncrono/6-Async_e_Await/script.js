/*  async function puxarDados(){
    // Com await, o js irá esperar a promise estar resolvida, para depois atribuir a variável responseDados

    
    // A diferença entre usar await ou não, é:
    // - sem await: responseDados é a promise
    // - com await: responseDados é o resultado de dados
    

    const responseDados = await fetch('./dados.json')
    const jsonDados = await responseDados.json()
    console.log(jsonDados.aula);
}

puxarDados() */

async function iniciarAsync(){
    const dadosResponse = fetch('./dados.json')
    const clientesResponse = fetch('./clientes.json')

    // A diferença de colocar await desta forma, é que os dois fetchs irão ocorrer ao mesmo tempo, diferente de caso coloquemos o await na frente do fetch.

    const dadosJSON = await (await dadosResponse).json()
    const clientesJSON = await (await clientesResponse).json()

    console.log(dadosJSON);
    console.log(clientesJSON);
}

iniciarAsync()