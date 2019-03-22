const startTimer = document.getElementById('startTimer');

const setMinutes = document.querySelector('.minutes');
const setHours = document.querySelector('.hours');

const runningClock = document.querySelector('.running-clock');

const setSeconds = "00";
let seconds;

function finishTimer() {

    let hours = Number(setHours.value);
    let minutes = Number(setMinutes.value);

    const start = new Date();
    console.log(start.getTime());

    let finishHour = start.getHours();
    let finishMinute = start.getMinutes();
    let finishSeconds = start.getSeconds();
    
    console.log(finishMinute);

    const endHour = finishHour + hours;
    const endMinute = finishMinute > 30 ? finishMinute + minutes - 60 : finishMinute + minutes;

    runningClock.textContent = `${endHour}:${endMinute}:${finishSeconds}`;
    
}

function setTimer(){
    const go = new Date();

    const hours = go.getHours();
    const minutes = go.getMinutes();
    const seconds = go.getSeconds();
    
    runningClock.textContent = `${hours}:${minutes}:${seconds}`;
}

function compareStartFinish(start, end){
    // we are going to do some logic here;
}

function countdown(){
    setInterval(function(){
        setTimer();
    }, 1000)
}


startTimer.addEventListener('click', countdown); 