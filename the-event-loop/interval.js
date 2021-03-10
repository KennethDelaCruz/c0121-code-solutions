let counter = 3;

function countdown() {
  if (counter === 0) {
    counter = 'Blast Off!';
    clearInterval(loop);
  }
  console.log(counter);
  counter--;
}

const loop = setInterval(countdown, 1000);
