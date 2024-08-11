let hours = 0;
let minutes = 0;
let seconds = 0;
let hrs = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let timer = null;

function stopWatch() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    hrs.textContent = h;
    minute.textContent = m;
    second.textContent = s;
}

function watchStart() {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(stopWatch, 1000);
}

function watchStop() {
    clearInterval(timer);
    timer = null;
}

function watchReset() {
    clearInterval(timer);
    hours = 0;
    minutes = 0;
    seconds = 0;
    hrs.textContent = "00";
    minute.textContent = "00";
    second.textContent = "00";
}
