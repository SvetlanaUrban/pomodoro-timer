const startButton = document.querySelector("#start");
const timerHolder = document.querySelector("#pomodoro-time");

let isRunning = false;
let timerId;

const resetButton = document.querySelector("#reset");

startButton.addEventListener("click", () => {
  if (isRunning) {
    stopTimer();
    return;
  } 
});

timerId = setInterval(() => {
  let [minutes, seconds] = timerHolder.textContent.split(":").map(Number);
  if (seconds > 0) {
    seconds -= 1;
  } else if (minutes > 0) {
    minutes -= 1;
    seconds = 59;
  }
  if (seconds >= 0 && minutes >= 0) {
    timerHolder.textContent = `${format(minutes)}:${format(seconds)}`;
  }
  if (!seconds && !minutes) {
    stopTimer();
  }
}, 10);

isRunning = !isRunning;
startButton.textContent = isRunning ? "stop" : "start";

function format(val) {
  if (val < 10) {
    return `0${val}`;
  }
    return val;
}

function stopTimer() {
  isRunning = false;
  startButton.textContent = "start";
  clearTimeout(timerId);
}


