const upLoad = document.querySelector('#upload-file');
const upLoadForm = document.querySelector('.img-upload__overlay');

upLoad.addEventListener('change', () => {
  // event.preventDefault();
  upLoadForm.classList.remove('hidden');
});
