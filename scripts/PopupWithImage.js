import Popup from './Popup.js';

class PopupWithImage extends Popup {
    constructor(popup) {
        super(popup);
        this._name = popup.querySelector(".popup__subtitle");
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