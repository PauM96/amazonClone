
const timerDisplay = document.querySelector('.js-watch');
const startButton = document.querySelector('.js-startButton');
const stopButton = document.querySelector('.js-stopButton');
const resetButton = document.querySelector('.js-resetButton');

let seconds = 0;
let isWorking = false;
let intervalId;

function watch() {
  if(!isWorking) {
    intervalId = setInterval(() => {
        seconds += 1;
        timerDisplay.innerText = formatTime(seconds);
    }, 1000);
} else { clearInterval(intervalId)  
}};


startButton.addEventListener('click', () => {
  if(!isWorking) {
    watch()
    isWorking = true;
}});

stopButton.addEventListener('click', () => {
  if (isWorking = true) {
    watch();
    isWorking = false;
  }
});


function formatTime(seconds) {
  minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;
  return leftPad(minutes) + ':' + leftPad(seconds);
};

function leftPad(digit) {
  return String(digit).padStart(2, '0');
};

resetButton.addEventListener('click', () => {
  seconds = 0;
  clearInterval(intervalId);
  timerDisplay.innerText = formatTime(seconds);
});

