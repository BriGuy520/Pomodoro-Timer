const startTimer = document.getElementById('startTimer');

const setMinutes = document.querySelector('.minutes');
const setHours = document.querySelector('.hours');

const runningClock = document.querySelector('.running-clock');

const setSeconds = "00";
let seconds;

function finishTimer() {

    const start = new Date();

    let setHour = start.getHours();
    let setMinute = start.getMinutes();
    let setSeconds = start.getSeconds();

    // console.log(setHour);
    // console.log(setMinute);
    // console.log(setSeconds);  

    let endHour = setMinute >= 35 ? setHour + 1 : setHour;
    let endMinute = setMinute >= 35 ? setMinute + 25 - 60 : setMinute + 25;
    let endSeconds = setSeconds >= 35 ? setSeconds + 25 - 60 : setSeconds;

    console.log(endHour);
    console.log(endMinute);
    console.log(endSeconds);

    runningClock.textContent = `${endHour}:${endMinute}:${endSeconds}`;
    
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


finishTimer();

startTimer.addEventListener('click', countdown); 