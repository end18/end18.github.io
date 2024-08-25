
const clock = document.querySelector("#clock");

clock.innerText = "00:00:00";

function getClock()
{
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    let strClock = hours + ":" + minutes + ":" + seconds;
    clock.innerText = strClock;
}

setInterval(getClock, 1000);


