import React from 'react';
import ReactDom from 'react-dom';

const reactElement = React.createElement(
  'h1',
  null,
  'Hello, React!'
);

ReactDom.render(
  reactElement,
  document.getElementById('root')
);
