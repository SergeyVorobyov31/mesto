class Card {
  constructor(link, title, templateSelector, handleOpenPopup) {
    this._link = link;
    this._title = title;
    this._templateSelector = templateSelector;
    this._handleOpenPopup = handleOpenPopup; 
  }
  
  //Метод, который возвращает template
  _getTemplate() {
    const cardElement = document
    .querySelector(this._templateSelector)
    .content
    .querySelector(".element")
    .cloneNode(true);
    return cardElement;
  }
  
  //Метод, который возвращает готовую карточку
  createCard() {
    this._element = this._getTemplate();
    const elementImage = this._element.querySelector(".element__image");
    elementImage.src = this._link;
    elementImage.alt = this._title;
    this._setEventListeners(this._title, this._link);
    this._element.querySelector(".element__delete").addEventListener("click", () => {
      this._deleteCard();
    })
    this._element.querySelector(".element__text").textContent = this._title;
    this._element.querySelector(".element__like").addEventListener("click", () => {
      this._setToggleLike();
    });

    return this._element;
  }
  
  //Метод для закрытия формы изображения
  _handleClosePopup() {
    popupImageBackground.src = "";
    popupImage.classList.remove("popup_opened");
  }

  //Метод, который навешивает слушатель на каждое изображение в карточке
  _setEventListeners(name, link) {
    this._element.querySelector(".element__image").addEventListener("click", () => {
      this._handleOpenPopup(name, link);
    });
  }

  //Метод для переключения лайков
  _setToggleLike() {
    this._element.querySelector(".element__like").classList.toggle("element__like_active");
  }

  //Метод для удаления карточки по клику на "корзину"
  _deleteCard() {
    const deleteButton = this._element.querySelector(".element__delete");
    this._element.remove();
  }
}

export default Card;