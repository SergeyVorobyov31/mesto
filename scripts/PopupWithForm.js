import Popup from "./Popup.js";

class PopupWithForm extends Popup {
    constructor(popup, handleFormSubmit) {
        super(popup);
        this._form = this._popup.querySelector(".popup__form");
        this._inputList = Array.from(this._popup.querySelectorAll(".popup__input"))
        this._handleFormSubmit = handleFormSubmit;
    }

    _getInputValues () {
        const obj = {

        }
        this._inputList.forEach((item) => {
            const value = item.value;
            const name = item.name
            obj[name] = value;
        })
        return obj;
    }

    setEventListener() {
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._data = this._getInputValues();
            this._handleFormSubmit(this._data);
        });
        super.setEventListener();
    }

    close() {
        this._form.reset();
        super.close();
    }
}

export default PopupWithForm;