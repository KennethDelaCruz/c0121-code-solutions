function handleFocus(event) {
  console.log('focus has fired', event.target.name);

}

function handleBlur(event) {
  console.log('blur has fired', event.target.name);
}

function handleInput(event) {
  console.log('this is logging the name and value', event.target.name, event.target.value);
}

var userName = document.querySelector('#user-name');
var userEmail = document.querySelector('#user-email');
var userMessage = document.querySelector('#user-message');

console.log();

userName.addEventListener('focus', handleFocus);
userName.addEventListener('input', handleInput);
userName.addEventListener('blur', handleBlur);

userEmail.addEventListener('focus', handleFocus);
userEmail.addEventListener('input', handleInput);
userEmail.addEventListener('blur', handleBlur);

userMessage.addEventListener('focus', handleFocus);
userMessage.addEventListener('input', handleInput);
userMessage.addEventListener('blur', handleBlur);
