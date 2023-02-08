import Popup from "./Popup.js";

class PopupWithForm extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._form = this._popup.querySelector(".popup__form");
    }

    getInputValues () {
        let obj = {

        }
        const inputList = Array.from(this._popup.querySelectorAll(".popup__input"))
        inputList.forEach((item) => {
            const value = item.value;
            const name = item.name
            obj[name] = value;
        })
        return obj;
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