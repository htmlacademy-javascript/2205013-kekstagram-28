const upLoadForm = document.querySelector('.img-upload__form');
const upLoad = document.querySelector('#upload-file');
const upLoadEdit = document.querySelector('.img-upload__overlay');
const cancelButton = document.querySelector('#upload-cancel');

new Pristine(upLoadForm);

upLoad.addEventListener('change', () => {
  // event.preventDefault();
  upLoadEdit.classList.remove('hidden');
});


cancelButton.addEventListener('click', () => {
  upLoadEdit.classList.add('hidden');
  document.body.classList.remove('modal-open');

});


