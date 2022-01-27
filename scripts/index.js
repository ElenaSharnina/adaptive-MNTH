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
}



editBtn.addEventListener('click', () => visibleProfileBlock());
editBtn.addEventListener('click', () => visibleBlock(profileBanner));

closeBtn.addEventListener('click', () => hideBlock(profileEditBlock));
closeBtn.addEventListener('click', () => hideBlock(profileBanner));
formElem.addEventListener('submit', submitFormHandler); 