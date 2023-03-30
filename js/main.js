import createPictureStateList from './data.js';
import initGallery from './thumbnails.js';
import openStatusPopup from './status-popup.js';
import './upload.js';
openStatusPopup('error', {title: 'Заголовок', button:'Ошибка'});

createPictureStateList();
initGallery(createPictureStateList());

