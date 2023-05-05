// Добавляем картинки массивом
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
const imageTemplate = document.getElementById('image-template');
const galleryList = document.querySelector('.gallery__list');
let buttonCreate = document.getElementById('button-create');

const createImageElement = (initialCard) => {
  const imageElement = imageTemplate.content.querySelector('.gallery__item').cloneNode(true);
  imageElement.querySelector('.gallery__title').textContent = initialCard.name;
  imageElement.querySelector('.gallery__image').style.backgroundImage = "url(" + initialCard.link + ")";
  return imageElement;
}
initialCards.forEach((initialCard) => {
  galleryList.appendChild(createImageElement(initialCard));
})
// Добавление карточки
buttonCreate.addEventListener('click', addition = (event) => {
  event.preventDefault();
  let imageCard = imageTemplate.content.querySelector('.gallery__item').cloneNode(true);
  imageCard.querySelector('.gallery__title').textContent = document.getElementById('name-card').value;
  imageCard.querySelector('.gallery__image').style.backgroundImage = "url(" + document.getElementById('link-card').value + ")";
  createImageElement(imageCard)
  galleryList.append(imageCard);
  document.getElementById('addition').classList.remove('popup_opened');
})
// Открытие модальных окон профиля
const openPopupBtnRdt = document.querySelector('.profile__form-redaction');
const openPopupBtnAdd = document.querySelector('.profile__form-addition');
const popups = document.querySelectorAll('.popup');

const nameProfile = document.querySelector('.profile__form-name');
const jobProfile = document.querySelector('.profile__form-job');
let nameInput = document.getElementById('name');
let jobInput = document.getElementById('job');

function togglePopup(index) {
  popups[index].classList.toggle("popup_opened");
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}
openPopupBtnRdt.addEventListener('click', () => togglePopup(0));
openPopupBtnAdd.addEventListener('click', () => togglePopup(1));

// Закрытие окна профиля с изменениями
popups.forEach(popup => {
  function closePopup(event) {
    const isOverlay = event.target.classList.contains('popup');
    const isCloseBtn = event.target.classList.contains('popup__button-close');
    if (isOverlay || isCloseBtn) {
      popup.classList.remove('popup_opened');
    }
  }
  popup.addEventListener('click', closePopup);
  let formElement = popup.querySelector('.popup__container');
  function handleFormSubmit(event) {
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    event.preventDefault();
    popup.classList.remove('popup_opened');
  }
  formElement.addEventListener('submit', handleFormSubmit);
})

// 4. Лайк карточки
const galleryLikeButtons = document.querySelectorAll('.gallery__button-like');

function handlelike(event) {
  const galleryLikeButton = event.currentTarget;
  galleryLikeButton.classList.toggle('gallery__button-like_active');
};

galleryLikeButtons.forEach(galleryLikeButton => {
  galleryLikeButton.addEventListener('click', handlelike)
});

// 5. Удаление карточки
const imageDeleteBtn = document.querySelectorAll('.gallery__button-delete');

function deleteImage(event) {
  const clickDeleteBtn = event.currentTarget;
  clickDeleteBtn.closest('.gallery__item').remove();
}
imageDeleteBtn.forEach(clickDeleteBtn => {
  clickDeleteBtn.addEventListener('click', deleteImage)
})

//6. Открытие попапа с картинкой
const gallaryItems = document.querySelectorAll('.gallery__item');

gallaryItems.forEach(gallaryItem => {
  const gallaryImage = gallaryItem.querySelector('.gallery__image');
  gallaryImage.onclick = () => {

    const gallaryTitle = gallaryItem.querySelector('.gallery__title');
    document.getElementById('image-wrapper').style.display = 'flex';
    let url = gallaryImage.style.backgroundImage;
    url = url.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
    document.querySelector('.popup__image').src = url;
    document.querySelector('.popup__image-title').textContent = gallaryTitle.textContent;
  }
});
document.getElementById('button-close').onclick = () => {
  document.getElementById('image-wrapper').style.display = 'none';
}
