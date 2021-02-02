var varbutton = document.querySelector('#button');
var outsideBackground = document.querySelector('#outside');

function onSwitch() {

  if (varbutton.className === 'light') {
    varbutton.className = 'dark';
    outsideBackground.className = 'night';
  } else if (varbutton.className === 'dark') {
    varbutton.className = 'light';
    outsideBackground.className = 'day';
  }

}

varbutton.addEventListener('click', onSwitch);
