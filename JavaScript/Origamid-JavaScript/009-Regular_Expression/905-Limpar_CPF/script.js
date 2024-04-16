const cpfsList = document.querySelectorAll('.cpf li');

const elementsInnerText = ([...elements]) => {
    return elements.map(element => element.innerText)
}

const limparCPF = (cpf) => {
    return cpf.replace(/\D/g,'');
    //Remove tudos os caracteres que não forem números
}

const construirCPF = (cpf) => {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
    //Constroi o CPF formatado com apenas os números
}

const formatarCPFs = (cpfs) => {
    return cpfs.map(limparCPF).map(construirCPF)
}

const substituirCPFs = (cpfsElements) => {
    const cpfs = elementsInnerText(cpfsElements)
    const cpfsFormatados = formatarCPFs(cpfs)
    cpfsElements.forEach((element, index)=>{
        element.innerText = cpfsFormatados[index]
    })
    console.log(cpfsFormatados);
}

//console.log(limparCPF('018.789.456-32'));
//console.log(construirCPF('01878945632'));
//const resultado = elementsInnerText(cpfs)
//console.log(formatarCPFs(resultado));

substituirCPFs(cpfsList)