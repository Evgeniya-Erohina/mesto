const showError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.popup__input-error-${inputElement.id}`);
  inputElement.classList.add('popup__input_invalid');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error');
}

const hideError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.popup__input-error-${inputElement.id}`);
  inputElement.classList.remove('popup__input_invalid');
  errorElement.classList.remove('popup__input-error');
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
    buttonElement.classList.add('popup__button-create_disabled');
  } else {
    buttonElement.classList.remove('popup__button-create_disabled');
  }
};
const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector(".popup__button-create");
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
    console.log(buttonElement)
  });
};
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement);
  });
};
enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-create",
  inactiveButtonClass: ".popup__button-create_disabled",
  inputErrorClass: ".popup__input_invalid",
  errorClass: "`.popup__input-error-${inputElement.id}`",
  errorInput: ".popup__input-error"
});
