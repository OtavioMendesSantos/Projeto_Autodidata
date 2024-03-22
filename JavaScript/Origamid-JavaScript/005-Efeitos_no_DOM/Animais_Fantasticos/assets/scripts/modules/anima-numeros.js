export default function initAnimaNumeros(){
    function animaNumeros(){
        const numeros = document.querySelectorAll('[data-numero]')
        
        numeros.forEach(numero =>{
            const total = +numero.innerText
            const incremento = Math.floor(total/100)
            let start = 0;
            const timer = setInterval(()=>{
                start += incremento
                numero.innerText = start
                if(start > total){
                    numero.innerText = total
                    clearInterval(timer)
                }
            }, 25 * Math.random())
        })
    }
    
    function handleMutation(mutation){
        if (mutation[0].target.classList.contains('ativo')) {
            observer.disconnect()
            animaNumeros()
            console.log("observou")
        }
    }
    
    const observerTarget = document.querySelector('.numeros')
    const observer = new MutationObserver(handleMutation); /* Ver Isso */
    
    observer.observe(observerTarget, {attributes: true})
}