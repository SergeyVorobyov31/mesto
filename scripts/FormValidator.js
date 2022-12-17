class FormValidation {
  constructor (settingsObject, form) {
    this._settignsObject = settingsObject;
    this._form = form;
  }

  _showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add("popup__input_type_error");
    errorElement.textContent = errorMessage;
    errorElement.classList.add("popup__input-error_active");
  }

  _hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove("popup__input_type_error");
    errorElement.classList.remove("popup__input_error_active");
    errorElement.textContent = '';
  }

  _checkInputValidity(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(formElement, inputElement);
    }  
  }

  _setEventListener(formElement){
    const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
    const buttonElement = formElement.querySelector(".popup__button");
    this._toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._toggleButtonState(inputList, buttonElement);
        this._checkInputValidity(formElement, inputElement);
      });  
    }); 
  }

  enableValidation() {
    const popupList = Array.from(document.querySelectorAll(".popup"));
    popupList.forEach((formElement) => {
      formElement.addEventListener("submit", (evt) => {
        evt.preventDefault();
      });
      const containerList = Array.from(formElement.querySelectorAll(".popup__container"));
      containerList.forEach((item) => {
        this._setEventListener(item);
      });
    });
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _enableSubmitButton(buttonElement) {
    buttonElement.classList.remove("popup__button_disabled");
    buttonElement.removeAttribute('disabled', false);
  }

  _disableSubmitButton(buttonElement) {
    buttonElement.classList.add("popup__button_disabled");
    buttonElement.setAttribute('disabled', true);
  }

  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      this._disableSubmitButton(buttonElement);
    } else {
      this._enableSubmitButton(buttonElement);
    }
  }

  _setSubmitButtonState(isFormValid, buttonElement) {
    if (isFormValid) {
      this._enableSubmitButton(buttonElement);
    } else {
      this._disableSubmitButton(buttonElement);
    }
  }
};

const formValidation = new FormValidation({inputElement: ".popup__input",
buttonSubmitCard: ".popup__button",
buttonSubmitCard: "popup__button_disabled",
inputElement: "popup__input_type_error",
errorElement: "popup__error_visible"}, ".popup");

formValidation.enableValidation();

export default FormValidation;
