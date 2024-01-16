const state ={
    score:{
        playersScore: 0,
        computerScore: 0,
        scoreBox: document.getElementById('score_points')
    },
    cardSprites:{
        avatar: document.getElementById('card-image'),
        name: document.getElementById('card-name'),
        type: document.getElementById('card-type'),
    },
    fieldCards:{
        player: document.getElementById('player-field-card'),
        computer: document.getElementById('computer-field-card'),
    },
    playerSides: {
        player1: "player-cards",
        player1Box: document.querySelector('#player-cards'),
        computer: "computer-cards",
        computerBox: document.querySelector('#computer-cards'),
    },
    actions:{
        button: document.getElementById('next-duel'),
    },
}

const playerSides = {
    player1: "player-cards",
    computer: "computer-cards",

}

const pathImages = "./src/assets/icons/"
const cardData = [
    {
        id:0,
        name: "Blue Eyes White Dragon",
        type: "Paper",
        img: `${pathImages}dragon.png`,
        winOf: [1],
        loseOf: [2],
    },
    {
        id:1,
        name: "Dark Magician",
        type: "Rock",
        img: `${pathImages}magician.png`,
        winOf: [2],
        loseOf: [0],
    },
    {
        id:0,
        name: "Exodia",
        type: "Scissors",
        img: `${pathImages}exodia.png`,
        winOf: [0],
        loseOf: [1],
    },

]

async function getRandomCardId(){
    const randomIndex = Math.floor(Math.random() * cardData.length)
    return randomIndex
}

async function createCardImage(IdCard, fieldSide){
    const cardImage = document.createElement('img')
    cardImage.setAttribute('height', '100px')
    cardImage.setAttribute('src', './src/assets/icons/card-back.png')
    cardImage.setAttribute('data-id', IdCard)
    cardImage.classList.add('card')

    if(fieldSide === playerSides.player1){
        //cardImage.classList.add('card-player')
        cardImage.addEventListener('mouseover', ()=>{
            drawSelectCard(IdCard)
        })
        cardImage.addEventListener('click', ()=>{
            setCardsField(cardImage.getAttribute('data-id'))
        })
    }

    return cardImage
}

async function setCardsField(cardId){
   await removeAllCardsImages()

    let computerCardId = await getRandomCardId();

    showHiddenCardFieldsImages(true)

    await hiddenCardDetails()

    await drawCardsInField(cardId, computerCardId)

    let duelResults = await checkDuelResults(cardId, computerCardId)

    await updateScore();
    await drawButton(duelResults);
}

async function showHiddenCardFieldsImages(value){
    if (value === true){
        state.fieldCards.player.style.display = 'block'
        state.fieldCards.computer.style.display = 'block'
    } else if (value === false){
        state.fieldCards.player.style.display = "none"
        state.fieldCards.computer.style.display = "none"
    }
}

async function hiddenCardDetails(){
    state.cardSprites.avatar.src= '';
    state.cardSprites.name.innerText = '';
    state.cardSprites.type.innerText = '';
}

async function drawCardsInField(cardId, computerCardId){
    state.fieldCards.player.src = cardData[cardId].img
    state.fieldCards.computer.src = cardData[computerCardId].img
}

async function removeAllCardsImages(){
    let {computerBox, player1Box} = state.playerSides /* PENDENTE: Ver sobre desestruturação */

    let imgElements = computerBox.querySelectorAll("img")
    imgElements.forEach((img) =>{img.remove()})
    
    imgElements = player1Box.querySelectorAll("img")
    imgElements.forEach((img) =>{img.remove()})
}

async function checkDuelResults(playerCardId, computerCardId){
    let duelResults = "Draw"
    let playerCard = cardData[playerCardId]
    if (playerCard.winOf.includes(computerCardId)){
        duelResults = 'win'
        state.score.playersScore++
    } 
    /* Testar Else If */
    if (playerCard.loseOf.includes(computerCardId)){
        duelResults = 'lose'
        state.score.computerScore++
    }
    /* PENDENTE: ver includes() */
    
    await playAudio(duelResults)
    
    return duelResults
}

async function drawButton(text){
    state.actions.button.innerText = text.toUpperCase();
    state.actions.button.style.display = 'block'
}

async function updateScore(){
    state.score.scoreBox.innerText = `Win: ${state.score.playersScore} | Lose: ${state.score.computerScore}`
}

async function drawSelectCard(index){
    state.cardSprites.avatar.src = cardData[index].img
    state.cardSprites.name.innerText = cardData[index].name
    state.cardSprites.type.innerText = `Attribute : ${cardData[index].type}`
}

async function  drawCards(cardNumbers, fieldSide){ /* Async */
    for(let i = 0; i < cardNumbers; i++){
        const randomIdCard = await getRandomCardId();
        const cardImage = await createCardImage(randomIdCard, fieldSide)

        document.getElementById(fieldSide).appendChild(cardImage)
    }
}

async function resetDuel(){
    state.cardSprites.avatar.src =  ""
    state.actions.button.style.display = "none"

    init()

    /* teste-- //não dá pra fazer assim, mas a lógica deve ser parecida
    drawCards(teste, playerSides.player1)
    drawCards(teste, playerSides.computer)
    if(teste == 0){
        init()
    } */
}
//let teste = 5

async function playAudio(status){
    const audio = new Audio (`./src/assets/audios/${status}.wav`)
    try{
        audio.play()
    }catch{}
}

function init(){
    showHiddenCardFieldsImages(false)
    drawCards(5, playerSides.player1)
    drawCards(5, playerSides.computer)

    const bgm = document.getElementById('bgm')
    bgm.play()
    bgm.volume = 0.2
}
init()