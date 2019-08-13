const start = document.getElementById('startTimer');
const pause = document.getElementById('pauseTimer');

const date = document.querySelector('.date');

const setMinutes = document.querySelector('.minutes');
const setHours = document.querySelector('.hours');
const runningClock = document.querySelector('.running-clock');

const outline = document.querySelector('.moving-outline circle');
const outlineLength = outline.getTotalLength();

outline.style.strokeDasharray = outlineLength;
outline.style.strokeDashoffset = outlineLength;

let pomodoroTimer = 1500;
let break = 300;



// function endTimer() {

//     const end = new Date();

//     const setHour = end.getHours();
//     const setMinute = end.getMinutes();
//     const endSeconds = end.getSeconds();

//     const endHour = setMinute >= 35 ? setHour + 1 : setHour;
//     const endMinute = setMinute >= 35 ? setMinute + 25 - 60 : setMinute + 25;

//     return `${endHour}:${endMinute}:${endSeconds}`;
    
// }

// function setTimer(){
//     setInterval(function(){
//         const go = new Date();

//         const hours = go.getHours();
//         const minutes = go.getMinutes();
//         const seconds = go.getSeconds();
        
//         runningClock.textContent = `${Number(hours)}:${Number(minutes)}:${Number(seconds)}`;

//     }, 1000);
    
// }




// startTimer.addEventListener('click', () => { 
//     console.log(typeof setTimer());

//     // runningClock.textContent = endTimer() - setTimer();
// }); 