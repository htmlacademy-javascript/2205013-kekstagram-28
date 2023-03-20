const upLoad = document.querySelector('#upload-file');
const upLoadForm = document.querySelector('.img-upload__overlay');
const cancelButton = document.querySelector('#upload-cancel');

upLoad.addEventListener('change', () => {
  // event.preventDefault();
  upLoadForm.classList.remove('hidden');
});


cancelButton.addEventListener('click', () => {
  upLoadForm.classList.add('hidden');
  document.body.classList.remove('modal-open');

});


