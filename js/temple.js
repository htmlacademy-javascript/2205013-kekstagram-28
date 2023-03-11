//Генератор карточки товара
// //Создает любой элемент (у каждого есть тег, у тега класс, и текст)
// var makeElement = function (tagName, className, text) {
//   var element = document.createElement(tagName);
//   element.classList.add(className);
//   if (text) {
//     element.textContent = text;
//     };
//   return element;
//   };
// //Создает карточку товара
// var createCard = function (good) {
//   //Создает вприницпе карточку с тегом li и классом good
//   var listItem = makeElement ('li', 'good');

//   //Добавляет класс наличия/остсутсвия
//   var abilitityClass = 'good--available';
//   if(!good.inStock) {abilitityClass = 'good--unavailable' };
//   listItem.classList.add(abilitityClass);

//    //Добавляет в карточку заголовок, с классом и текстом в нем
//   var title = makeElement ('h2', 'good__description', good.text);
//   listItem.appendChild(title);

//  //Добавялет фото с адресом и описанием
//   var picture = makeElement ('img', 'good__image');
//   picture.src = good.imgUrl;
//   picture.alt = good.text;
//   listItem.appendChild(picture);


//  //Добавялет цену
//   var price =  makeElement ('p', 'good__price', good.price + '₽/кг');
//   listItem.appendChild(price);

//   //Добавляет класс если товар хит
//   if(good.isHit) {listItem.classList.add('good--hit')
//     //Добавляет описание спецпредложения для хита
//   var specialOffer = makeElement ('p', 'good__special-offer', good.specialOffer);
//   listItem.appendChild(specialOffer);
//   };

//   return listItem;
// };

// //Добавлет карточки из заданного массива
// var renderCards = function (goods) {
//   var cardList = document.querySelector('.goods');
// for (var i  = 0; i < goods.length; i++) {

//   var createItem = createCard(goods[i]);
//   cardList.appendChild(createItem);};
//   };

// renderCards(cardsData);

//Счетчик лайков
// let heart = document.querySelector('.heart');
// let likesNumber = document.querySelector('.likes-number');

// heart.onclick = function () {
//   if (heart.classList.contains('added')) {
//     likesNumber.textContent--;
//   } else {
//     likesNumber.textContent++;
//   }
//   heart.classList.toggle('added');
// };
