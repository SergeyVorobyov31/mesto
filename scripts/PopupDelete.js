import Popup from "./Popup.js"

class PopupDelete extends Popup {
    constructor(popup) {
        super(popup)
        this._form = popup.querySelector(".popup__form");
    }

    setSubmitHandler(handler) {
        this._handler = handler;
    }

    setEventListener() {
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._handler();
        })
        super.setEventListener();
    }
}

export default PopupDelete;