function checkInputValidity(formElement, inputElement, validationConfig) {
  const errorElement = formElement.querySelector(`.popup__input-error-${inputElement.id}`);
  if (!inputElement.validity.valid) {
    showError(inputElement, errorElement, validationConfig);
  } else {
    hideError(inputElement, errorElement, validationConfig);
  }
}

function showError(inputElement, errorElement, validationConfig) {
  inputElement.classList.add(validationConfig.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(validationConfig.errorClass);
}

function hideError(inputElement, errorElement, validationConfig) {
  inputElement.classList.remove(validationConfig.inputErrorClass);
  errorElement.textContent = '';
  errorElement.classList.remove(validationConfig.errorClass);
}
function lengthRange(inputtxt, minlength, maxlength) {
  const userText = inputtxt.value;
  if (userText.length >= minlength && userText.length <= maxlength) {
    hideError(inputElement);
  }
  else {
    showError(inputElement);
  }
}
function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function toggleButtonState(inputList, buttonElement, validationConfig) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(validationConfig.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(validationConfig.inactiveButtonClass);
    buttonElement.disabled = false;
  }
}
function setEventListeners(formElement, validationConfig) {
  const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
  const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, validationConfig);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, validationConfig);
      toggleButtonState(inputList, buttonElement, validationConfig);
    });
  });
}
const enableValidation = (validationConfig) => {
  const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, validationConfig);
  });
};
enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-create',
  inactiveButtonClass: 'popup__button-create_disabled',
  inputErrorClass: "popup__input_invalid",
  errorClass: 'popup__input-error'
});
