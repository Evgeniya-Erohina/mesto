const openPopupBtn = document.querySelector('.profile__form-redaction_popup-open');
const popup = document.querySelector('.popup');
const popupCloseBtn = document.querySelector('.popup__form-close');

function openPopup() {
  popup.classList.add('popup_open');
}
function closePopup(evt) {
  const isOverlay = evt.target.classList.contains('popup');
  const isCloseBtn = evt.target.classList.contains('popup__form-close');

  if (isOverlay || isCloseBtn) {
    popup.classList.remove('popup_open');
  }
}
openPopupBtn.addEventListener('click', openPopup);

popup.addEventListener('click', closePopup);



 // Находим форму в DOM
let formElement = document.querySelector('.popup__form');

// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__form-name');
let jobInput = document.querySelector('.popup__form-job');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
  evt.preventDefault();
}
  // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

 // Получите значение полей jobInput и nameInput из свойства value

  // Выберите элементы, куда должны быть вставлены значения полей*/
let nameProfile = document.querySelector('.profile__form-name');
let jobProfile = document.querySelector('.profile__form-job');
  // Вставьте новые значения с помощью textContent
const showButton = document.querySelector('.popup__form-button');
  showButton.addEventListener('click', () => {
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    popup.classList.remove('popup_open');
  }
  )
  formElement.addEventListener('submit', handleFormSubmit);
