class Card {
  constructor(
    data,
    templateSelector,
    handleCardClick,
    ownerProfile,
    handleDeleteClick,
    handleLikeClick
    ) 
  {
    this._data = data;
    this._link = data.link;
    this._title = data.name;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick; 
    this._handleDeleteClick = handleDeleteClick;
    this._ownerProfile = ownerProfile
    this._ownerProfileId = ownerProfile._id
    this._ownerCardId = data.owner._id;
    this._cardId = data._id;
    this._handleLikeClick = handleLikeClick;    
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
    this._element.querySelector(".element__text").textContent = this._title;
    this._numberLike = this._element.querySelector(".element__number-likes");
    this._numberLike.textContent = this._data.likes.length; 

    this._showLikeActive();
    this._setEventListeners(this._title, this._link);
    this._removeBasket();

    return this._element;
  }

  _removeBasket() {
      if(this._ownerCardId != this._ownerProfileId) {
        this._element.querySelector(".element__delete").remove();
      }
  }

  //Метод, который навешивает слушатель на каждое изображение и "корзину" в карточке
  _setEventListeners(name, link) {
    this._elementImage.addEventListener("click", () => {
      this._handleCardClick(name, link);
    });
    this._element.querySelector(".element__delete").addEventListener("click", () => {
      this._handleDeleteClick(this);
    });
    this._elementLike.addEventListener("click", () => {
      this.setToggleLike();
    });
  }

  getIdCard() {
      return this._cardId;
  }

  setToggleLike() {
    if (this._elementLike.classList.contains("element__like_active")) {
      Promise.all([this._handleLikeClick(this._cardId, false)])
      .then (([]) => {
        this._data.likes.shift(this._ownerProfile);
        this._numberLike.textContent = this._data.likes.length;
        this._elementLike.classList.toggle("element__like_active");
      })
      .catch(err => console.log(err))
    } else {
      Promise.all([this._handleLikeClick(this._cardId, true)])
      .then (([]) => {
        this._data.likes.push(this._ownerProfile);
        this._numberLike.textContent = this._data.likes.length;
        this._elementLike.classList.toggle("element__like_active");
      })
      .catch(err => console.log(err))
    }
  }

  _showLikeActive() {
      if(this._data.likes.find(item => item._id === this._ownerProfileId)) {
        this._elementLike.classList.add("element__like_active")
      } else {
        this._elementLike.classList.remove("element__like_active")
      }
  }

  isLike(value) {
    if (value) {
      this._elementLike.classList.add("element__like_active")
    } else {
      this._elementLike.classList.remove("element__like_active");
    }
  }

  //Метод для удаления карточки по клику на "корзину"
  deleteCard() {
      this._element.remove();
      this._element = null;
  }
}

export default Card;