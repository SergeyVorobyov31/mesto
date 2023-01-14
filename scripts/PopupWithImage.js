import Popup from './Popup.js';

class PopupWithImage extends Popup {
    constructor(name, link, popupSelector) {
        super(popupSelector);
        this._name = name;
        this._link = link;
        this._image = this._popup.querySelector(".popup__image");
    }

    open(name, link) {
        this._image.src = link
        this._image.alt = name;
        this._popup.querySelector(".popup__subtitle").textContent = name;
        super.open();
    }
}

export default PopupWithImage;