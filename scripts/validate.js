const validationConfig = ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-create',
  inactiveButtonClass: 'popup__button-create_disabled',
  errorInput: 'popup__input-error',
  inputErrorClass: 'popup__input_invalid',
  errorSpan: `'.popup__input-error-${inputElement.id}'`
});
const showError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(validationConfig.errorSpan);
  inputElement.classList.add(validationConfig.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validationConfig.errorInput);
}

const hideError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(validationConfig.errorSpan);
  inputElement.classList.remove(validationConfig.inputErrorClass);
  errorElement.classList.remove(validationConfig.errorInput);
  errorElement.textContent = "";
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
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideError(formElement, inputElement);
  }
};
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};
const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add(validationConfig.inactiveButtonClass);
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove(validationConfig.inactiveButtonClass);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
  const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};
const enableValidation = (validationConfig) => {
  const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement);
  });
};
