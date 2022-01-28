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
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    note: 'собственно любой текст'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
    note: 'собственно любой текст'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    note: 'собственно любой текст'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    note: 'собственно любой текст'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
    note: 'собственно любой текст'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
    note: 'собственно любой текст'
  }
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
  image.src = item.link;
  image.alt = item.name;

  /*image.addEventListener('click', () => { //открытие модального окна у картинки
    modalLabel.textContent = item.name;
    modalImage.src = item.link;
    modalImage.alt = item.name;
    openModal(modalCard);
  })*/

  return picElement;
}
function renderCards(array) { //отбираем элементы из массива
  array.forEach((item) =>
    addCard(createCard(item)));
}
renderCards(initialCards);