// Selecting DOM elements
let hrs = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let ampm = document.getElementById("ampm");

// Update time every second
setInterval(() => {
    let currentTime = new Date();

    // Get hours, minutes, and seconds
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    // Add leading zeros if needed
    hrs.innerHTML = (hours < 10 ? "0" : "") + hours;
    minute.innerHTML = (minutes < 10 ? "0" : "") + minutes;
    second.innerHTML = (seconds < 10 ? "0" : "") + seconds;

    // Convert hours to 12-hour format and determine AM/PM
    if (hours >= 12) {
        ampm.innerHTML = 'PM';
        if (hours > 12) {
            hours -= 12;
        }
    } else {
        ampm.innerHTML = 'AM';
        if (hours === 0) {
            hours = 12;
        }
    }

    // Update hours with the adjusted value
    hrs.innerHTML = (hours < 10 ? "0" : "") + hours;
}, 1000);
