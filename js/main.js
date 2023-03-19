import createPictureStateList from './data.js';
import initGallery from './thumbnails.js';
import './form.js';

createPictureStateList();
initGallery(createPictureStateList());

