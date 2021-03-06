function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');

let timerId = null;

const changeBodyColor = () => {
    btnStart.disabled = true;
    timerId = setInterval(() => {
        const currentColor = getRandomHexColor();
        document.body.style.backgroundColor = currentColor;
    }, 1000);
};
btnStart.addEventListener('click', changeBodyColor);

const stopChangeBodyColor = () => {
    clearInterval(timerId);
    btnStart.disabled = false;
};
btnStop.addEventListener('click', stopChangeBodyColor);