const openPopupBtn = document.querySelector('.profile__form-redaction');
const popup = document.querySelector('.popup');
const popupCloseBtn = document.querySelector('.popup__button-close');
const savePopupBtn = document.querySelector('.popup__button-save');
const nameProfile = document.querySelector('.profile__form-name');
const jobProfile = document.querySelector('.profile__form-job');

function openPopup() {
  popup.classList.add('popup_opened');
}
openPopupBtn.addEventListener('click', openPopup);

function closePopup(evt) {
  const isOverlay = evt.target.classList.contains('popup');
  const isCloseBtn = evt.target.classList.contains('popup__button-close');

  if (isOverlay || isCloseBtn) {
    popup.classList.remove('popup_opened');
  }
}
openPopupBtn.addEventListener('click', openPopup);

popup.addEventListener('click', closePopup);

 // Находим форму в DOM
let formElement = document.querySelector('.popup__container');

// Находим поля формы в DOM
let nameInput = document.getElementById('name');
let jobInput = document.getElementById('job');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
  evt.preventDefault();
}
  // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

 // Получите значение полей jobInput и nameInput из свойства value
 nameInput.value = nameProfile.textContent;
 jobInput.value = jobProfile.textContent;

  // Выберите элементы, куда должны быть вставлены значения полей
  // Вставьте новые значения с помощью textContent

  savePopupBtn.addEventListener('click', () => {
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    popup.classList.remove('popup_opened');
  })

  formElement.addEventListener('submit', handleFormSubmit);
