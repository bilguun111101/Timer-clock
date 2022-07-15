let sec = 0, min = 0, mill = 0;
let timeStart = false;
let millSec = document.querySelector('.millsecond');
let second = document.querySelector('.second');
let minute = document.querySelector('.minute');
let dude;

function draw() {
    mill++;
    millSec.textContent = mill;
    if(mill < 10) {
        millSec.textContent = '0' + mill;
    }
    if(mill === 99) {
        sec++;
        mill = -1;
        second.textContent = sec;
        if(sec < 10){
            second.textContent = '0' + sec;
        }
    }
    if(sec === 60) {
        min++;
        sec = -1;
        minute.textContent = min;
        if(min < 10){
            minute.textContent = '0' + min;
        }
    }
}

document.querySelector('.ahead').addEventListener('click', () => {
    dude = setInterval(draw, 10)
})
document.querySelector('.stop').addEventListener('click', () => {
    clearInterval(dude)
})
document.querySelector('.reset').addEventListener('click', () => {
    clearInterval(dude)
    mill = 0;
    sec = 0;
    min = 0;
    millSec.textContent = '00';
    second.textContent = '00';
    minute.textContent = '00';
})