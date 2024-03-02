// script.js

function updateDigitalClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    var timeString = hours + ':' + minutes + ':' + seconds;
    document.getElementById('digital-clock').innerText = timeString;
}

// Update the clock every second
setInterval(updateDigitalClock, 1000);

// Initial call to display the clock immediately
updateDigitalClock();
