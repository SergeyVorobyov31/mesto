class FormValidation {
  constructor (settingsObject, form) {
    this._inputElement = settingsObject.inputElement;
    this._buttonSubmit = settingsObject.buttonSubmit;
    this._buttonSubmitDisabled = settingsObject.buttonSubmitDisabled;
    this._inputElementError = settingsObject.inputElementError;
    this._inputErrorActiveClass = settingsObject.inputErrorActiveClass;
    this._errorElement = settingsObject.errorElement;
    this._form = form;
    this._inputList = Array.from(this._form.querySelectorAll(this._inputElement));
    this._buttonElement = this._form.querySelector(this._buttonSubmit);
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
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }  
  }
  

  _setEventListener(){
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
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
  
  _enableSubmitButton() {
    this._buttonElement.classList.remove(this._buttonSubmitDisabled);
    this._buttonElement.removeAttribute('disabled', false);
  }

  disableSubmitButton() {
    this._buttonElement.classList.add(this._buttonSubmitDisabled);
    this._buttonElement.setAttribute('disabled', true);
  }

  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      this.disableSubmitButton();
    } else {
      this._enableSubmitButton();
    }
  }
};

export default FormValidation;
