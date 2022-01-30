const editBtn = document.querySelector('.profile__edit-button');
const closeBtn = document.querySelector('.modal__close-icon');
const profileEditBlock = document.querySelector('.modal__container');
const profileBanner = document.querySelector('.profile__banner');

const formElem = document.querySelector('.modal__form_place_regform');
const username = document.querySelector('.profile__name');
const userjob = document.querySelector('.profile__occupation');
const userphoto = document.querySelector('.profile__foto');
const nameInput = document.querySelector('.modal__field_type_name');
const jobInput = document.querySelector('.modal__field_type_occupation');
const fotoInput = document.querySelector('.modal__field_type_foto-link');

function visibleBlock(div) {
  div.classList.add('container_visibility');
}
function hideBlock(div) {
  div.classList.remove('container_visibility');
}

function visibleProfileBlock() {
  nameInput.value = username.textContent;
  jobInput.value = userjob.textContent;
  visibleBlock(profileEditBlock);
}

function submitFormHandler(evt) {
  evt.preventDefault();

  username.textContent = nameInput.value;
  userphoto.src = fotoInput.value;
  userjob.textContent = jobInput.value;
  hideBlock(profileEditBlock);
  hideBlock(profileBanner);
}

document.querySelectorAll('a[href^="#"]').forEach(item => {
  item.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

editBtn.addEventListener('click', () => visibleProfileBlock());
editBtn.addEventListener('click', () => visibleBlock(profileBanner));

closeBtn.addEventListener('click', () => hideBlock(profileEditBlock));
closeBtn.addEventListener('click', () => hideBlock(profileBanner));
formElem.addEventListener('submit', submitFormHandler);


const initialCards = [
  {
    name: 'Matterhorn',
    link: 'http://www.rosphoto.com/images/u/articles/1608/1_24.jpg',
    note: 'A peak in the Pennine Alps, on the border of Switzerland (canton of Valais) and Italy (province of Aosta Valley). The most extreme climbers dare to conquer the top of the Matterhorn.'
  },
  {
    name: 'Stetind',
    link: 'http://www.rosphoto.com/images/u/articles/1608/4_17.jpg',
    note: 'Translated from English, "stetind" means "insignificant hill". The mountain attracts tourists of different levels of training.'
  },
  {
    name: 'Cerro Torre',
    link: 'http://www.rosphoto.com/images/u/articles/1608/5_16.jpg',
    note: 'Due to the proximity of the Pacific Ocean, bad weather is almost always raging at the top. The peak is covered with ice, which is very dangerous to move along.'
  },
  {
    name: 'Licancabur',
    link: 'http://www.rosphoto.com/images/u/articles/1608/6_15.jpg',
    note: 'The stratovolcano on the border of Chile and Bolivia is adjacent to the Huriquez volcano and Laguna Verde Lake. At the top is 400-meter drive a crater with a small lake.'
  },
  {
    name: 'Rocks of Tre Cime di Lavaredo',
    link: 'http://www.rosphoto.com/images/u/articles/1608/7_13.jpg',
    note: 'The jagged peaks are part of the park of the same name. The eastern peak is called Cima Piccola (2,857 m), the central peak is Cima Grande (2,999 m), and the western peak is Cima Ovest (2,973 m). The peak of Cima Piccola is considered the most difficult, and the northern slope of Cima Grande is one of the six "great northern slopes of the Alps".'
  },
  {
    name: 'Kirkjufell',
    link: 'http://www.rosphoto.com/images/u/articles/1608/8_11.jpg',
    note: 'A mountain in the western part of Iceland, located near the town of Grundarfjordur on the western shore of the fjord of the same name in the north of the Snaifedlsnes peninsula. Despite the very small height and accessibility, the mountain now and then becomes the hero of travelers'
  },
  {
    name: 'Laila Peak',
    link: 'http://www.rosphoto.com/images/u/articles/1608/9_11.jpg',
    note: 'Laila Peak is a mountain located in the Karakoram Mountain system east of Chukduzera Glacier and west of Chogolis Glacier. It is famous for the predominance of capricious weather and requires climbers not only the proper level of training, but also willpower.'
  },
  {
    name: 'Mount Kailash',
    link: 'http://www.rosphoto.com/images/u/articles/1608/10_11.jpg',
    note: 'Kailash (Kangrinboche, Gangdise, Gandisyshan) is a mountain in the Kailash range of the Gangdise Mountain system in the southern Tibetan Plateau. According to Hindu beliefs, Kailash is the cosmic center of the universe, where the god Shiva lives.'
  },
  {
    name: 'The Eiger',
    link: 'http://www.rosphoto.com/images/u/articles/1608/11_7.jpg',
    note: 'Together with the Jungfrau and Mönch peaks, the Eiger forms the famous trio. The mountain is constantly affected by cold air masses brought in from the north. Even in summer, snowstorms are raging, and temperatures change steeply in just a few hours.'
  },
];
const picContainer = document.querySelector('.element_litle-size');
const picTemplate = document.querySelector('#element').content;

function addCard(item) {
  picContainer.prepend(item);
}
function createCard(item) {
  const picElement = picTemplate.cloneNode(true);
  const image = picElement.querySelector('.element__image');
  picElement.querySelector('.element__name').textContent = item.name;
  picElement.querySelector('.element__description').textContent = item.note;
  image.src = item.link;
  image.alt = item.name;

  document.querySelector('.element__name__type_big-size').textContent = item.name;
  document.querySelector('.element__description_type_big-size').textContent = item.note;
  document.querySelector('.element__image_type_big-size').src = item.link;
  document.querySelector('.element__image_type_big-size').alt = item.name;

  image.addEventListener('click', () => { //открытие модального окна у картинки
    document.querySelector('.element__name__type_big-size').textContent = item.name;
    document.querySelector('.element__description_type_big-size').textContent = item.note;
    document.querySelector('.element__image_type_big-size').src = item.link;
    document.querySelector('.element__image_type_big-size').alt = item.name;

  })

  return picElement;
}
function renderCards(array) { //отбираем элементы из массива
  array.forEach((item) =>
    addCard(createCard(item)));
}
renderCards(initialCards);

const addPhotoBtn = document.querySelector('.gallery__add-button');
const addPhotoPopup = document.querySelector('.modalpic');
function openPopup(popup) {
  popup.classList.add('modal_active');
  document.body.classList.add('page-js');
}
function closePopup(popup) {
  popup.classList.remove('modal_active');
  document.body.classList.remove('page-js');
}
addPhotoBtn.addEventListener('click', () => openPopup(addPhotoPopup));
document.querySelector('.modal__close-icon_place_modalpic').addEventListener('click', () => closePopup(addPhotoPopup));



function submitFormNewCard(evt) {
  evt.preventDefault();
  const picElement = {
    name: document.querySelector('.modal__field_type_card-name').value,
    link: document.querySelector('.modal__field_type_card-link').value,
    note: document.querySelector('.modal__field_type_card-description').value
  }
  addCard(createCard(picElement));
  closePopup(addPhotoPopup);
}

document.querySelector('.modal__form_place_modalpic').addEventListener('submit', submitFormNewCard);