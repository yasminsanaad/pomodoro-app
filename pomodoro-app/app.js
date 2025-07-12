const bells = new Audio('./sounds/bell.wav');
const startBtn = document.querySelector('.btn-start');
const session = document.querySelector('.minutes');
const secondDiv = document.querySelector('.seconds');
let myInterval;
let totalSeconds;
let state = true;

const updateSeconds = () => {
    const minuteDiv = document.querySelector('.minutes');

    totalSeconds--;

    let minutesLeft = Math.floor(totalSeconds / 60);
    let secondsLeft = totalSeconds % 60;

    secondDiv.textContent = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
    minuteDiv.textContent = `${minutesLeft}`;


    if (minutesLeft === 0 && secondsLeft === 0) {
        bells.play();
        clearInterval(myInterval);
    }
};

const appTimer = () => {
    if (state) {
        const sessionAmount = parseInt(session.textContent);
        totalSeconds = sessionAmount * 60;

        updateSeconds(); // update immediately
        myInterval = setInterval(updateSeconds, 1000);
        state = false;
    } else {
        alert('Sesison  has already started');
    }
};

startBtn.addEventListener('click', appTimer);