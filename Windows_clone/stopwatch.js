let startTime, updatedTime, difference, tInterval;
let running = false;

const display = document.getElementById('display');
const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');

startStopButton.addEventListener('click', () => {
    if (!running) {
        startTime = new Date().getTime() - (difference || 0);
        tInterval = setInterval(updateTime, 1000);
        startStopButton.textContent = 'Stop';
        startStopButton.classList.remove('start');
        startStopButton.classList.add('stop');
        running = true;
    } else {
        clearInterval(tInterval);
        startStopButton.textContent = 'Start';
        startStopButton.classList.remove('stop');
        startStopButton.classList.add('start');
        running = false;
    }
});

resetButton.addEventListener('click', () => {
    clearInterval(tInterval);
    running = false;
    difference = 0;
    display.textContent = '00:00:00';
    startStopButton.textContent = 'Start';
    startStopButton.classList.remove('stop');
    startStopButton.classList.add('start');
});

function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
    return number < 10 ? '0' + number : number;
}
