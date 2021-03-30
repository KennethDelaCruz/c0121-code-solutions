import ReactDOM from 'react-dom';
import Carousel from './carousel.jsx';
import React from 'react';

const array = [
  'https://cdn.bulbagarden.net/upload/3/3e/039Jigglypuff.png',
  'https://img.pokemondb.net/artwork/large/sandshrew.jpg',
  'https://cdn.bulbagarden.net/upload/2/21/001Bulbasaur.png'
];

ReactDOM.render(
  <Carousel gallery={array}/>,
  document.querySelector('#root')
);
