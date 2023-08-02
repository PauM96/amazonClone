const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let timerInterval;
let startTime;
let elapsedTime = 0;
let isRunning = false;

function formatTime(milliseconds) {
    const pad = (num) => num.toString().padStart(2, '0');
    const hours = pad(Math.floor(milliseconds / (1000 * 60 * 60)));
    const minutes = pad(Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60)));
    const seconds = pad(Math.floor((milliseconds % (1000 * 60)) / 1000));
    return `${hours}:${minutes}:${seconds}`;
}

function updateTimer() {
    const now = Date.now();
    elapsedTime += now - startTime;
    startTime = now;
    timerDisplay.innerText = formatTime(elapsedTime);
}

startButton.addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateTimer, 10);
    }
});

stopButton.addEventListener('click', () => {
    if (isRunning) {
        isRunning = false;
        clearInterval(timerInterval);
    }
});

resetButton.addEventListener('click', () => {
    isRunning = false;
    clearInterval(timerInterval);
    elapsedTime = 0;
    timerDisplay.innerText = '00:00:00';
});
