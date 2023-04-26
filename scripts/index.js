const openPopupBtn = document.querySelector('.profile__form-redaction');
const popup = document.querySelector('.popup');
const nameProfile = document.querySelector('.profile__form-name');
const jobProfile = document.querySelector('.profile__form-job');
let nameInput = document.getElementById('name');
let jobInput = document.getElementById('job');
let formElement = document.querySelector('.popup__container');

function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}
openPopupBtn.addEventListener('click', openPopup);

function closePopup(evt) {
  const isOverlay = evt.target.classList.contains('popup');
  const isCloseBtn = evt.target.classList.contains('popup__button-close');

  if (isOverlay || isCloseBtn) {
    popup.classList.remove('popup_opened');
  }
}

popup.addEventListener('click', closePopup);

function handleFormSubmit(evt) {
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  evt.preventDefault();
  popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', handleFormSubmit);
