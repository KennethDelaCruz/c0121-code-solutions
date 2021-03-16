const $span = document.querySelectorAll('span');
let i = 0;
window.addEventListener('keydown', () => {
  if (event.key === $span[i].textContent) {
    $span[i].setAttribute('class', 'done');
    i++;
    $span[i].setAttribute('class', 'current-letter');
  } else {
    $span[i].setAttribute('class', 'wrong current-letter');
  }
});
