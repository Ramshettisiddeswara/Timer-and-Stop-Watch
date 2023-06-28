// Timer
let timerInterval;
let timerSeconds = 0;

function startTimer() {
  if (!timerInterval) {
    timerInterval = setInterval(updateTimer, 1000);
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  timerSeconds = 0;
  updateTimerDisplay();
}

function updateTimer() {
  timerSeconds++;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const hours = Math.floor(timerSeconds / 3600);
  const minutes = Math.floor((timerSeconds % 3600) / 60);
  const seconds = timerSeconds % 60;
  document.getElementById('timerDisplay').textContent =
    padZero(hours) + ':' + padZero(minutes) + ':' + padZero(seconds);
}

// Stopwatch
let stopwatchInterval;
let stopwatchSeconds = 0;

function startStopwatch() {
  if (!stopwatchInterval) {
    stopwatchInterval = setInterval(updateStopwatch, 1000);
  }
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
  stopwatchSeconds = 0;
  updateStopwatchDisplay();
}

function updateStopwatch() {
  stopwatchSeconds++;
  updateStopwatchDisplay();
}

function updateStopwatchDisplay() {
  const hours = Math.floor(stopwatchSeconds / 3600);
  const minutes = Math.floor((stopwatchSeconds % 3600) / 60);
  const seconds = stopwatchSeconds % 60;
  document.getElementById('stopwatchDisplay').textContent =
    padZero(hours) + ':' + padZero(minutes) + ':' + padZero(seconds);
}

function padZero(value) {
  return value.toString().padStart(2, '0');
}
