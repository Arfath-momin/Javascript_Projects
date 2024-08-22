const seconds = document.querySelector('.seconds');
const minutes = document.querySelector('.minute');
const hours = document.querySelector('.hour');
const time = document.querySelector('.time');

function setDate() {
    let date = new Date();
    let today = date.toLocaleTimeString();
    return today;
}



setInterval(() => {
    let today = setDate();
    today = today.split(':');
    let hour = parseInt(today[0]);
    let minute = parseInt(today[1]);
    let second = parseInt(today[2]);
    let AM_PM = hour >= 12 ? 'PM' : 'AM';
    console.log(hour, minute, second);
    seconds.style.transform = `rotate(${(second * 6)}deg)`;



    minutes.style.transform = `rotate(${ (minute * 6) + (second / 10)}deg)`;
    hours.style.transform = `rotate(${(hour % 12) * 30 + (minute / 2)}deg)`;
    time.innerHTML = `${hour} : ${minute} : ${second} \t ${AM_PM}`;


}, 1000);

