function calcular(){
    const numX = Number(document.querySelector("#x").value)
    const numY = Number(document.querySelector("#y").value)
    const res = document.querySelector("#res")
    
    const resXY = numX + numY

    res.innerHTML = resXY
}