var formRoute = document.querySelector('form');

function submitEvent() {
  event.preventDefault();
  var formInfo = {
    name: formRoute.name.value,
    email: formRoute.email.value,
    message: formRoute.message.value
  };
  console.log('form information', formInfo);
  formRoute.reset();
}

var contactForm = document.querySelector('form');

contactForm.addEventListener('submit', submitEvent);
