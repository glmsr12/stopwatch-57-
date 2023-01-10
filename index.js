let seconds = 00;
let tens = 00;
let getSeconds = document.querySelector('.seconds');
let getTens = document.querySelector('.tens');
let btnStart = document.querySelector('.btn-start');
let btnStop = document.querySelector('.btn-stop');
let btnReset = document.querySelector('.btn-reset');
let Interval;

//start button

btnStart.addEventListener('click', () => {
  clearInterval(Interval);
  Interval = setInterval(startTimer, 10);
});

//stop button
btnStop.addEventListener('click', () => {
  clearInterval(Interval);
});

//reset button
btnReset.addEventListener('click', () => {
  clearInterval(Interval);
  tens = '00';
  seconds = '00';
  getTens.innerHTML = tens;
  getSeconds.innerHTML = seconds;
});

function startTimer() {
  tens++;
  if (tens <= 9) {
    getTens.innerHTML = '0' + tens;
  }
  if (tens > 9) {
    getTens.innerHTML = tens;
  }
  if (tens > 99) {
    seconds++;
    getSeconds.innerHTML = '0' + seconds;
    tens = 0;
    getTens.innerHTML = '0' + tens;
  }

  if (seconds > 9) {
    getSeconds.innerHTML = seconds;
  }
}
