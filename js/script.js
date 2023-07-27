
function updateClock() {

    const deg = 360 / 60;
    const hr = document.querySelector('#hr');
    const mn = document.querySelector('#mn');
    const sec = document.querySelector('#sec');

    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const hourRotation = (hours % 12) * 360 / 12 + minutes * deg / 12;
    const minuteRotation = minutes * deg;
    const secondRotation = seconds * deg;

    hr.style.transform = `rotateZ(${hourRotation}deg)`;
    mn.style.transform = `rotateZ(${minuteRotation}deg)`;
    sec.style.transform = `rotateZ(${secondRotation}deg)`;
}

updateClock();
setInterval(updateClock, 1000);