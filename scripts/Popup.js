class Popup {
    constructor(popup) {
        this._popup = popup;
        this._ESC_CODE = "Escape";
    }

    open() {
        this._popup.classList.add("popup_opened");
        document.addEventListener("keydown", (evt) => this._handleEscClose(evt));
    }

    close() {
        this._popup.classList.remove("popup_opened");
        document.removeEventListener("keydown", (evt) => this._handleEscClose(evt));
    }

    setEventListener() {
        this._iconClose = this._popup.querySelector(".popup__close-icon");
        this._iconClose.addEventListener("click", () => this.close());

        this._overlay = this._popup.querySelector(".popup__overlay");
        this._overlay.addEventListener("click", () => this.close());
    }

    _handleEscClose(evt) {
        if (evt.key === this._ESC_CODE) {
            this.close();
        }
    }
}

export default Popup;