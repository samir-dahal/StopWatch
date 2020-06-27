const laps = document.querySelector(".laps");
const stopwatch = document.querySelector(".stopwatch");
const start = document.querySelector(".start-pause-btn");
const reset = document.querySelector(".reset-btn");
const lap = document.querySelector(".lap-btn");

let hr = 0;
let m = 0;
let s = 0;
let ms = 0;
let timer = 0;
let play = true;
let required = "";
let lapAvailable = false;
function Start() {
    if (play) {
        timer = setInterval(StartTimer, 10);
        start.textContent = "Pause";
        play = false;
    }
    else {
        clearInterval(timer);
        start.textContent = "Start";
        play = true;
    }
}
function Reset() {
    clearInterval(timer);
    start.textContent = "Start";
    play = true;
    hr = m = s = ms = 0;
    stopwatch.textContent = StopwatchText();
    lapAvailable = true;
    timer = 0;
}


function StartTimer() {
    ms++;
    if (ms == 100) {
        ms = 0;
        s++;
    }
    if (s == 60) {
        s = 0;
        m++;
    }
    if (m == 60) {
        m = 0;
        hr++;
    }
    stopwatch.textContent = StopwatchText();
}


function Lap() {
    if (timer) {
        let p = document.createElement('p');
        p.textContent = StopwatchText();
        laps.appendChild(p);
        laps.scrollTo(0, laps.scrollHeight);
        lapAvailable = true;
    }
}


function ClearLap() {
    if (lapAvailable) {
        required = laps.children[0];
        laps.textContent = "";
        laps.appendChild(required);
    }
}

function StopwatchText() {
    return `${(hr <= 9) ? '0' + hr : hr}:${(m <= 9) ? '0' + m : m}:${(s <= 9) ? '0' + s : s}:${(ms <= 9) ? '0' + ms : ms}`;
}