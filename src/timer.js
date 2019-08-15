const start = document.getElementById('startTimer');
const pause = document.getElementById('pauseTimer');

isPaused = false;

let clock = document.querySelector('.clock h1');
const alarm = document.querySelector('audio');

const outline = document.querySelector('.moving-outline circle');
const outlineLength = outline.getTotalLength();

outline.style.strokeDasharray = outlineLength;
outline.style.strokeDashoffset = outlineLength;

let pomodoroTimer = 10;
let breakTimer = 5;



start.addEventListener('click', () => {
  setInterval(function(){

    let pomodoroMinutes = Math.floor(pomodoroTimer / 60);
    let pomodoroSeconds = Math.floor(pomodoroTimer % 60) < 10 ? `0${Math.floor(pomodoroTimer % 60)}` : Math.floor(pomodoroTimer % 60);
    let breakMinutes = Math.floor(breakTimer / 60);
    let breakSeconds = Math.floor(breakTimer % 60) < 10 ? `0${Math.floor(breakTimer % 60)}` : Math.floor(breakTimer % 60);

    if(pomodoroTimer >= 0){
      pomodoroTimer--;
      clock.innerHTML = `${pomodoroMinutes}:${pomodoroSeconds}`;

      let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
      outline.style.strokeDashoffset = progress;
    } else {
      alarm.enabled = true;
    }

    if(breakTimer >= 0 && pomodoroTimer <= 0){
      breakTimer--;
      console.log(breakTimer);
      clock.innerHTML = `${breakMinutes}:${breakSeconds}`;
    }

    if(breakTimer <= 0 && pomodoroTimer <= 0){
      pomodoroTimer = 1500;
      breakTimer = 300
    }
  }, 1000);
});

pause.addEventListener('click', () => {

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