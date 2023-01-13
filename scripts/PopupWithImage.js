import Popup from './Popup.js';

class PopupWithImage extends Popup {
    constructor(name, link, popupSelector) {
        super(popupSelector);
        this._name = name;
        this._link = link;
    }

    open() {
        this._popupSelector.querySelector(".popup__image").src = this._link;
        this._popupSelector.querySelector(".popup__image").alt = this._name;
        this._popupSelector.querySelector(".popup__subtitle").textContent = this._name;
        super.open();
    }
}

export default PopupWithImage;