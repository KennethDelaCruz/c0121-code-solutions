var timer = 4;
var heading = document.querySelector('h1');
var interval = setInterval(timerCountdown, 1000);

function timerCountdown() {
  timer--;
  heading.textContent = timer;

  if (timer === 0) {
    heading.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(interval);
  }
}

window.addEventListener('DOMContentLoaded', interval);
