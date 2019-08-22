const start = document.getElementById('startTimer');
const pause = document.getElementById('pauseTimer');

isPaused = false;

let clock = document.querySelector('.clock h1');
const alarm = document.querySelector('audio');

const outline = document.querySelector('.moving-outline circle');
const outlineLength = outline.getTotalLength();

outline.style.strokeDasharray = outlineLength;
outline.style.strokeDashoffset = outlineLength;

const pomodoroTotal = 1500;
const breakTotal = 300;

let pomodoroTimer = 1500;
let breakTimer = 300;

const clocks = (timer, total, color) => {
  let progress = outlineLength - (timer / total) * outlineLength;

  outline.style.strokeDashoffset = progress * -1;
  outline.style.stroke = timer <= 60 ? 'red' : color;

  let minutes = Math.floor(timer / 60);
  let seconds = Math.floor(timer % 60) < 10 ? `0${Math.floor(timer % 60)}` : Math.floor(timer % 60);

  clock.innerHTML = `${minutes}:${seconds}`;
}

const beep = () => {
  alarm.currentTime = 7.5;
  alarm.play();
}

start.addEventListener('click', () => {
  setInterval(() => {

    if(!isPaused){
      if(pomodoroTimer >= 0){
        clocks(pomodoroTimer, pomodoroTotal, "#00cc00");
        pomodoroTimer--;
      }
  
      if(breakTimer >= 0 && pomodoroTimer < 0){
        clocks(breakTimer, breakTotal, "#ff1ac6");
        breakTimer--;
      }

      if(pomodoroTimer === -1 && breakTimer === breakTotal - 1){
        beep();
      }

      if(breakTimer === -1){
        beep();
      }
  
      if(breakTimer < 0 && pomodoroTimer < 0){
        pomodoroTimer = pomodoroTotal;
        breakTimer = breakTotal;
      }
    }
  }, 1000);

});

pause.addEventListener('click', () => {
  if(isPaused){
    isPaused = false;
    pause.innerHTML = 'pause'.toUpperCase();
  } else {
    isPaused = true;
    pause.innerHTML = 'resume'.toUpperCase();
  }
});