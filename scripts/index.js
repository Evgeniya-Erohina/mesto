import { initialCards } from "./constants.js";

const imageTemplate = document.querySelector('.gallary__template');
const galleryList = document.querySelector('.gallery__list');
const popupImagePicture = document.querySelector('.popup__image');
const openPopupBtnEdit = document.querySelector('.profile__form-edit');
const openPopupBtnAdd = document.querySelector('.profile__form-add');
const popups = document.querySelectorAll('.popup');
const popupEdit = document.querySelector('#popup-edit');
const popupAdd = document.querySelector('#popup-add');
const popupCard = document.querySelector('#popup-card');
const formEdit = document.forms.edit;
const nameInput = formEdit.elements.firstname;
const jobInput = formEdit.elements.job;
const formAdd = document.forms.add;
const linkInput = formAdd.elements.link;
const nameCardInput = formAdd.elements.nameCard;
// Создание карточки
const createCard = ({ name, link }) => {
  const newCard = imageTemplate.content.querySelector('.gallery__item').cloneNode(true);
  const cardImage = newCard.querySelector('.gallery__image');
  cardImage.src = link;
  cardImage.alt = name;
  newCard.querySelector('.gallery__title').textContent = name;
  galleryList.prepend(newCard);
  //Лайк карточки
  const handleLike = () => {
    newCard.querySelector('.gallery__button-like').classList.toggle('gallery__button-like_active');
  }
  newCard.querySelector('.gallery__button-like').addEventListener('click', handleLike);
  //Удаление карточки
  const deleteCard = () => {
    newCard.remove();
  }
  newCard.querySelector('.gallery__button-delete').addEventListener('click', deleteCard);
  // Открытие созданной карточки
  const handleCardClick = evt => {
    popupImagePicture.src = evt.target.src;
    popupImagePicture.alt = evt.target.alt;
    document.querySelector('.popup__title').textContent = evt.target.alt;
    openPopup(popupCard);
  }
  cardImage.addEventListener('click', handleCardClick);
  return newCard;
}

initialCards.forEach((initialCard) => {
  galleryList.appendChild(createCard(initialCard));
})

// Открытие модальных окон
function openPopup(popup) {
  popup.classList.add("popup_opened");
}

openPopupBtnEdit.addEventListener('click', function () {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  openPopup(popupEdit);
});
openPopupBtnAdd.addEventListener('click', function () {
  formAdd.reset();
  openPopup(popupAdd);
});

// Метод закрытия по клику вне или кнопке
const nameProfile = document.querySelector('.profile__form-name');
const jobProfile = document.querySelector('.profile__form-job');
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}
const closePopupByClick = event => {
  const isOverlay = event.target.classList.contains('popup');
  const isCloseBtn = event.target.classList.contains('popup__button-close');
  if (isOverlay || isCloseBtn) {
    closePopup(event.currentTarget);
  }
}

popups.forEach(popup => {
  popup.addEventListener('click', closePopupByClick);
})
// Функция редактирования профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupEdit);
}
formEdit.addEventListener('submit', handleProfileFormSubmit);

formAdd.addEventListener('submit', function (evt) {
  evt.preventDefault();
  const link = linkInput.value;
  const name = nameCardInput.value;
  createCard({ name, link });
  closePopup(popupAdd);
});
function keyHandler(event){
  if (event.key === "Escape") {
    closePopup;
  }
}
document.addEventListener('keydown', keyHandler);
