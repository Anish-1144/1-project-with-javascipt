let hours = 0;
let minutes = 0;
let seconds = 0;
let hrs = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let timer = null;
let alarmSound = document.getElementById("alarmSound");

function updateDisplay() {
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    hrs.textContent = h;
    minute.textContent = m;
    second.textContent = s;
}

function timerStart() {
    if (timer !== null) {
        clearInterval(timer);
    }
    hours = parseInt(document.getElementById("hoursInput").value) || 0;
    minutes = parseInt(document.getElementById("minutesInput").value) || 0;
    seconds = parseInt(document.getElementById("secondsInput").value) || 0;
    timer = setInterval(timerCountdown, 1000);
}

function timerCountdown() {
    if (hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(timer);
        alarmSound.play();
        return;
    }
    seconds--;
    if (seconds < 0) {
        seconds = 59;
        minutes--;
        if (minutes < 0) {
            minutes = 59;
            hours--;
        }
    }
    updateDisplay();
}

function timerStop() {
    clearInterval(timer);
}

function timerReset() {
    clearInterval(timer);
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay();
    alarmSound.pause();
    alarmSound.currentTime = 0;
}
