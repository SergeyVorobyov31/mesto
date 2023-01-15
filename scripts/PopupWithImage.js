import Popup from './Popup.js';

class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._name = popupSelector.querySelector(".popup__subtitle");
        this._image = this._popup.querySelector(".popup__image");
    }

    open(name, link) {
        this._image.src = link;
        this._image.alt = name;
        this._name.textContent = name;
        super.open();
    }
}

export default PopupWithImage;