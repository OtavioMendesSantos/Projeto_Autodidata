const numMin = 1;
const numMax = 12;
const numPar = [];

function apenasNumerosPares(numMin, numMax){
    for(let i = numMin; i <= numMax; i++){
        if(i % 2 === 0){
            numPar.push(i)
            console.log(`O número ${i} é par`)            
        }else{
            console.log(`O número ${i} não é par`)            
        }
    }
    return (numPar)
}

console.log("Números pares: " + apenasNumerosPares(numMin, numMax))