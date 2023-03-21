import createPictureStateList from './data.js';
import initGallery from './thumbnails.js';
import './upload.js';

createPictureStateList();
initGallery(createPictureStateList());

