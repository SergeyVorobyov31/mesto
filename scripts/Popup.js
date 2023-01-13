class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector
    }

    open() {
        this._popupSelector.classList.add("popup_opened");
    }

    close() {
        this._popupSelector.classList.remove("popup_opened");
    }

    setEventListener() {
        this._iconClose = this._popupSelector.querySelector(".popup__close-icon");
        this._iconClose.addEventListener("click", () => this.close());

        this._overlay = this._popupSelector.querySelector(".popup__overlay");
        this._overlay.addEventListener("click", () => this.close());
        
        this._handleEscClose();
    }

    _handleEscClose() {
        document.addEventListener('keydown', (evt) => {
            if (evt.key === "Escape") {
                this.close();
            }
        });
    }
}

export default Popup;