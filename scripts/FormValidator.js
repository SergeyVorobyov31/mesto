class FormValidation {
  constructor (settingsObject, form) {
    this._settignsObject = settingsObject;
    this._inputElement = settingsObject.inputElement;
    this._buttonSubmit = settingsObject.buttonSubmit;
    this._buttonSubmitDisabled = settingsObject.buttonSubmitDisabled;
    this._inputElementError = settingsObject.inputElementError;
    this._inputErrorActiveClass = settingsObject.inputErrorActiveClass;
    this._errorElement = settingsObject.errorElement;
    this._form = form;
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement = this._inputElementError;
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._inputErrorActiveClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputElementError);
    errorElement.classList.remove(this._inputErrorActiveClass);
    errorElement.textContent = '';
  }

  _checkInputValidity(inputElement) {
    //console.log(inputElement);
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }  
  }
  

  _setEventListener(){
    const formElement = this._form;
    const inputList = Array.from(formElement.querySelectorAll(this._inputElement));
    const buttonElement = formElement.querySelector(this._buttonSubmit);
    this._toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });  
    }); 
  }

  enableValidation() {
    this._setEventListener();
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  
  _enableSubmitButton(buttonElement) {
    buttonElement.classList.remove(this._buttonSubmitDisabled);
    buttonElement.removeAttribute('disabled', false);
  }

  disableSubmitButton(buttonElement) {
    buttonElement.classList.add(this._buttonSubmitDisabled);
    buttonElement.setAttribute('disabled', true);
  }

  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      this.disableSubmitButton(buttonElement);
    } else {
      this._enableSubmitButton(buttonElement);
    }
  }
};

export default FormValidation;
