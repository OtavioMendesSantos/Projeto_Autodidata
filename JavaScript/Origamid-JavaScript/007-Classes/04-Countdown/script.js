import Countdown from './countdown.js'

const tempoParaNatal = new Countdown('23 December 2024 23:59:59 GMT-0300');
const tempoAniversario = new Countdown('13 May 2024 12:59:59 GMT-0300');
const tempoAniversarioJudah = new Countdown('10 August 2024 07:59:59 GMT-0300');

setInterval(()=>{
    console.clear()
    console.log(tempoParaNatal.total);
    console.log(tempoAniversario.total);
    console.log(tempoAniversarioJudah.total);
},1000)