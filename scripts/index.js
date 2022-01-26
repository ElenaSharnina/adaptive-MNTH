const editBtn = document.querySelector('.profile__edit-button');
const closeBtn = document.querySelector('.modal__close-icon');
const profileEditBlock = document.querySelector('.modal__container');
const profileBanner = document.querySelector('.profile__banner');
function visibleBlock(div) {
  div.classList.add('container_visibility');
}
function hideBlock(div) {
  div.classList.remove('container_visibility');
}

editBtn.addEventListener('click', () => visibleBlock(profileEditBlock));
editBtn.addEventListener('click', () => visibleBlock(profileBanner));
closeBtn.addEventListener('click', () => hideBlock(profileEditBlock));
closeBtn.addEventListener('click', () => hideBlock(profileBanner));