const state = {
    view:{
        container: document.querySelector('.container'),
        panel: document.querySelector('.panel'),
        squares: document.querySelectorAll('.square'),
        enemy: document.querySelector('.enemy'),
        timeLeft: document.querySelector('#time-left'),
        score: document.querySelector('#score'),
        life: document.querySelector('#life'),
    },
    values:{
        gameVelocity: 1000,
        hitPosition: 0,
        result: 0,
        currentTime: 60,
        lifeLeft: 3,
    },
    actions:{
        timerId: setInterval(randomSquare, 1000),
        countDownTimerId: setInterval(countDown, 1000), /* PENDENTE: ver isso*/
    },
}

// function moveEnemy(){
//    state.values.timerId = setInterval(randomSquare, state.values.gameVelocity) /* PENDENTE: ver isso */
//}

function countDown(){
    state.values.currentTime--;
    state.view.timeLeft.textContent = state.values.currentTime;

    if(state.values.currentTime <= 0){
        clearInterval(state.actions.countDownTimerId) //PENDENTE: ver isso
        clearInterval(state.actions.timerId) //PENDENTE: ver isso
        gameOver()
    }
}

function playSound(audioName){
    let audio = new Audio(`./src/audios/${audioName}.m4a`) /* PENDENTE: ver isso */
    audio.volume = 0.2;
    audio.play()/* PENDENTE: ver isso */
}

function randomSquare(){
    state.view.squares.forEach((square)=>{
        square.classList.remove('enemy')
    })

    let randomNumber = Math.floor(Math.random()*9) /* PENDENTE: ver isso */
    let randomSquare = state.view.squares[randomNumber]
    randomSquare.classList.add('enemy')
    state.values.hitPosition = randomSquare.id
}

function decreaseLife(){
    if (state.values.lifeLeft > 0){
        state.values.lifeLeft--;
        state.view.life.textContent = "x" + state.values.lifeLeft;
    } else {
        gameOver()        
    }
}

function gameOver(){
    const newMenu = document.createElement('div');
    newMenu.classList.add('game-over')
    newMenu.innerHTML = '<h1>Game Over!</h1>'
    newMenu.innerHTML += `<p>Sua pontuação final foi de: ${state.values.result}</p>`
    newMenu.innerHTML += `<button onclick="location.reload()">Clique para jogar novamente </button>`
    
    state.view.panel.style.display = 'none'
    state.view.container.appendChild(newMenu)
    
    clearInterval(state.actions.countDownTimerId) //PENDENTE: ver isso
    clearInterval(state.actions.timerId) 
    
    state.view.timeLeft.textContent = "--"
}

function addListenerHitBox(){
    state.view.squares.forEach((square)=>{
        square.addEventListener('mousedown', ()=>{
            if(square.id === state.values.hitPosition){//Poderia fazer dessa forma: square.classList.contains("enemy")
                state.values.result++;
                state.view.score.textContent = state.values.result;
                state.values.hitPosition = null; //pode dar um erro                 
                playSound('hit')
            } else if(state.values.hitPosition === null){    
            } else {
                decreaseLife()
            }
        })
    })
}

function initialize(){
    //moveEnemy(); // o próprio objeto state chama essa função
    addListenerHitBox();
}

initialize()