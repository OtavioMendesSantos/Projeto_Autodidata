const pianoKeys = document.querySelectorAll('.piano-keys .key')
const volumeSlider = document.querySelector(".volume-slider input")
const keysCheck = document.querySelector(".keys-check input")

const mapedKeys = []
let audio = new Audio("assets/sounds/a.wav")

function playSound(key){
    audio.src = `assets/sounds/${key}.wav`
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add('active')
    setTimeout(()=>{
        clickedKey.classList.remove('active')
    },150)/* PENDENTE: ver isso */
}

pianoKeys.forEach((key)=>{
    key.addEventListener('click', ()=>{playSound(key.dataset.key)})
    mapedKeys.push(key.dataset.key)
})

window.addEventListener('keydown', (event)=>{
    if (mapedKeys.includes(event.key)){
        playSound(event.key)   
    }
})

function handleVolume(event){
    audio.volume =event.target.value
}

volumeSlider.addEventListener("input", handleVolume)

function showHideKeys(){
    pianoKeys.forEach((key)=>{
        key.classList.toggle('hide')
    })
}

keysCheck.addEventListener('click', showHideKeys)