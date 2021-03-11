var modalContent = document.querySelector('.modal-content');
var openButton = document.querySelector('.open-modal');
var modal1 = document.querySelector('.modal');
var closeButton = document.querySelector('.close-modal');

function openModal(event) {
  modalContent.classList.remove('hidden');
  modal1.classList.add('inactive');
}
function closeModal(event) {
  modalContent.classList.add('hidden');
  modal1.classList.remove('inactive');
}
openButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
