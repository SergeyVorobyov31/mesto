class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._link = data.link;
    this._title = data.name;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick; 
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
    this._elementImage = this._element.querySelector(".element__image");
    this._elementImage.src = this._link;
    this._elementImage.alt = this._title;
    this._elementLike = this._element.querySelector(".element__like");

    this._setEventListeners(this._title, this._link);

    this._element.querySelector(".element__delete").addEventListener("click", () => {
      this._deleteCard();
    })

    this._element.querySelector(".element__text").textContent = this._title;

    this._elementLike.addEventListener("click", () => {
      this._setToggleLike();
    });

    return this._element;
  }

  //Метод, который навешивает слушатель на каждое изображение в карточке
  _setEventListeners(name, link) {
    this._elementImage.addEventListener("click", () => {
      this._handleCardClick(name, link);
    });
  }

  //Метод для переключения лайков
  _setToggleLike() {
    this._elementLike.classList.toggle("element__like_active");
  }

  //Метод для удаления карточки по клику на "корзину"
  _deleteCard() {
    const deleteButton = this._element.querySelector(".element__delete");
    this._element.remove();
  }
}

export default Card;