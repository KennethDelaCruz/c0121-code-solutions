var userList = document.querySelector('#user-list');
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', function() {
  console.log(xhr.status);
  console.log(xhr.response);
  var people = xhr.response;
  for (var i = 0 ; i < people.length ; i++) {
    var newList = document.createElement('li');
    newList.textContent = people[i].name;
    userList.appendChild(newList);
  }
});
xhr.send();
