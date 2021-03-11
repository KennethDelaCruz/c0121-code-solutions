function handleClick(event) {
  console.log('button clicked');
  console.log('event:', event);
  console.log('event target:', event.target);
}

var clickbutton = document.querySelector('.click-button');

clickbutton.addEventListener('click', handleClick, false);

function handleMouseover(event) {
  console.log('Button hovered');
  console.log('event:', event);
  console.log('console target', event.target);

}

var hoverbutton = document.querySelector('.hover-button');

hoverbutton.addEventListener('mouseover', handleMouseover, false);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event:', event);
  console.log('target: ', event.target);
}

var dblclick = document.querySelector('.double-click-button');

dblclick.addEventListener('dblclick', handleDoubleClick, false);
