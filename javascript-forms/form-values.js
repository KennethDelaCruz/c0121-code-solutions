
function submitEvent() {
  event.preventDefault();
  var name1 = contactForm.elements.name.value;
  var email1 = contactForm.elements.email.value;
  var message1 = contactForm.elements.message.value;
  var formInfo = {
    name: name1,
    email: email1,
    message: message1
  };
  console.log('form information', formInfo);
  document.querySelector('form').reset();
}

var contactForm = document.querySelector('form');

contactForm.addEventListener('submit', submitEvent);
