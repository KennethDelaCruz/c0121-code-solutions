var dotRow = document.querySelector('.dot-row');
var imgRow = document.querySelector('.img-row');
var counter = 0;
var images = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var changeImage = setInterval(autoChange, 3000);
var dots = document.querySelectorAll('.dot');

function autoChange() {
  counter++;
  if (counter >= 5) {
    counter = 0;
  }
  for (var i = 0; i < dots.length; i++) {
    if (i === counter) {
      dots.item(i).className = 'fas fa-circle dot';
    } else {
      dots.item(i).className = 'far fa-circle dot';
    }
  }
  document.querySelector('.carousel-img').setAttribute('src', images[counter]);
}

function imgClick(event) {
  clearInterval(changeImage);
  if (event.target.id === 'right') {
    counter++;
  } else if (event.target.id === 'left') {
    counter--;
  }

  if (counter > 4) {
    counter = 0;
  } else if (counter < 0) {
    counter = 4;
  }

  for (var i = 0; i < dots.length; i++) {
    if (i === counter) {
      dots.item(i).className = 'fas fa-circle dot';
    } else {
      dots.item(i).className = 'far fa-circle dot';
    }
  }

  document.querySelector('.carousel-img').setAttribute('src', images[counter]);
  changeImage = setInterval(autoChange, 3000);
}

function dotClick(event) {
  clearInterval(changeImage);
  var eventTarget = event.target;
  var idNumber = eventTarget.getAttribute('id');
  counter = parseInt(idNumber);
  document.querySelector('.carousel-img').setAttribute('src', images[counter]);

  for (var i = 0; i < dots.length; i++) {
    if (i === counter) {
      dots.item(i).className = 'fas fa-circle dot';
    } else {
      dots.item(i).className = 'far fa-circle dot';
    }
  }

  changeImage = setInterval(autoChange, 3000);
}

imgRow.addEventListener('click', imgClick);
dotRow.addEventListener('click', dotClick);
