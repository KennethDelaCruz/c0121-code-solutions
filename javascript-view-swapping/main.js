var tabContainer = document.querySelector('.tab-container');
var allTabs = document.querySelectorAll('.tab');
var allViews = document.querySelectorAll('.view');

function activeCheck(event) {
  if (event.target.matches('.tab')) {
    var $dataView = event.target.getAttribute('data-view');

    for (var i = 0; i < allTabs.length; i++) {
      if (allTabs[i] === event.target) {
        allTabs[i].classList.add('active');
      } else {
        allTabs[i].classList.remove('active');
      }
    }

    for (i = 0; i < allViews.length; i++) {
      if (allViews[i].getAttribute('data-view') === $dataView) {
        allViews[i].classList.remove('hidden');
      } else {
        allViews[i].classList.add('hidden');
      }
    }

  }
}

tabContainer.addEventListener('click', activeCheck);
