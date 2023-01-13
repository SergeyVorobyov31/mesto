import Popup from "./Popup.js";

class PopupWithForm extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._form = this._popupSelector.querySelector(".popup__form");
    }

    _getInputValues () {
        this._name = this._popupSelector.querySelector(".popup__input_type_title").value;
        this._link = this._popupSelector.querySelector(".popup__input_type_link").value
        return (this._name, this._link);
    }

    setEventListener() {
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
        super.setEventListener();
    }

    close() {
        this._form.reset();
        super.close();
    }
}

export default PopupWithForm;