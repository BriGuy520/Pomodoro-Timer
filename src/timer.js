const startTimer = document.getElementById('startTimer');

const setMinutes = document.querySelector('.minutes');
const setHours = document.querySelector('.hours');

const runningClock = document.querySelector('.running-clock');

const setCountdown = new Date().getTime();

let x = setInterval(function(){

    let end = new Date().getTime();

    let hours = Math.floor((end % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((end % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((end % (1000 * 60)) / 1000);

    console.log(hours);
    console.log(minutes);
    console.log(seconds);
}, 1000);

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