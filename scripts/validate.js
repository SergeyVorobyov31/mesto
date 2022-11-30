//Добавление стиля для неверно введенного инпута
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("popup__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("popup__input-error_active");
};

//Удаления стиля для неверно введенного инпута
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("popup__input_type_error");
  errorElement.classList.remove("popup__input_error_active");
  errorElement.textContent = '';
}

//Проверка инпута на валидность и применение стилей к соотвествующему значению
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
}

//Установка слушателя на каждый инпут
const setEventListener = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
  const buttonElement = formElement.querySelector(".popup__button");
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      toggleButtonState(inputList, buttonElement);
      checkInputValidity(formElement, inputElement);
    });  
  });
}

//Добавление каждого попапа в цикл для дальнейшей проверки внутри него каждого инпута на валидность
const enableValidation = () => {
  const popupList = Array.from(document.querySelectorAll(".popup"));
  popupList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    const containerList = Array.from(formElement.querySelectorAll(".popup__container"));
    containerList.forEach((item) => {
      setEventListener(item);
    });
  });
}

//Функия, которая возвращает true или false в зависимости от валидности инпута
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}
const enableSubmitButton = (buttonElement) => {
  buttonElement.classList.remove("popup__button_disabled");
  buttonElement.removeAttribute('disabled', false);
}

const disableSubmitButton = (buttonElement) => {
  buttonElement.classList.add("popup__button_disabled");
  buttonElement.setAttribute('disabled', true);
}

//Функция, при которой кнопка сабмита неактивна, если поля неверно заполены
const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    disableSubmitButton(buttonElement);
  } else {
    enableSubmitButton(buttonElement);
  }
}

//Функция, которая делает кнопку добавления новой карточки всегда неактивной при открытии попапа
function setSubmitButtonState(isFormValid, buttonElement) {
  if (isFormValid) {
    enableSubmitButton(buttonElement);
  } else {
    disableSubmitButton(buttonElement);
  }
}

// включение валидации вызовом enableValidation
// все настройки передаются при вызове

enableValidation({
    formElement: '.popup',
    inputElement: '.popup__input',
    buttonSubmitCard: '.popup__button',
    buttonSubmitCard: 'popup__button_disabled',
    inputElement: 'popup__input_type_error',
    errorElement: 'popup__error_visible'
  });