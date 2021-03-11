var taskList = document.querySelector('.task-list');

function $function(event) {
  console.log('What is the event target : ', event.target);
  console.log('What is the event target tag name:', event.target.tagName);

  var closestItemList = event.target.closest('.task-list-item');

  if (event.target.tagName === 'BUTTON') {
    console.log('closest: ', event.target.closest('.task-list-item'));
    closestItemList.remove();
  }
}

taskList.addEventListener('click', $function);
