const start = document.getElementById('startTimer');
const pause = document.getElementById('pauseTimer');

let clock = document.querySelector('.clock h1');

const outline = document.querySelector('.moving-outline circle');
const outlineLength = outline.getTotalLength();

outline.style.strokeDasharray = outlineLength;
outline.style.strokeDashoffset = outlineLength;

let pomodoroTimer = 10;
let breakTimer = 5;

start.addEventListener('click', () => {
  setInterval(function(){
    let minutes = Math.floor(pomodoroTimer / 60);
    let seconds = Math.floor(pomodoroTimer % 60) < 10 ? `0${Math.floor(pomodoroTimer % 60)}` : Math.floor(pomodoroTimer % 60);

    if(pomodoroTimer > 0){
      pomodoroTimer--;
      clock.innerHTML = `${minutes}:${seconds}`;
    } 

    if(breakTimer > 0 && pomodoroTimer === 0){
      breakTimer--;
      console.log(breakTimer);
      clock.innerHTML = `${Math.floor(breakTimer / 60)}:${Math.floor(breakTimer % 60)}`;
    } 

    if(breakTimer === 0 && pomodoroTimer === 0){
      pomodoroTimer = 1500;
      breakTimer = 300
    }
  }, 1000);
});

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