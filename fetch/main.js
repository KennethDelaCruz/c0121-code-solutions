fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'GET'
})
  .then(response => response.json())
  .then(data => console.log(data));

const pokemon = 'sandshrew';
fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, {
  method: 'GET'
})
  .then(response => response.json())
  .then(data => console.log(data));
