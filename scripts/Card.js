import {popupSubtitle, popupImageBackground, popupImage, handleCloseByEsc} from "./index.js";

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

class Card {
  constructor(image, title, templateSelector) {
    this._image = image;
    this._title = title;
    this._templateSelector = templateSelector;
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
    this._element.querySelector(".element__image").src = this._image;
    this._element.querySelector(".element__image").alt = this._title;
    this._element.querySelector(".element__image").addEventListener("click", () => {
      this._handleOpenPopup();
    })
    this._element.querySelector(".element__delete").addEventListener("click", () => {
      this._deleteCard();
    })
    this._element.querySelector(".element__text").textContent = this._title;
    this._element.querySelector(".element__like").addEventListener("click", () => {
      this._setToggleLike();
    });

    return this._element;
  }

  //Метод, который открывает форму изображения и передает atl и src и навешивает слушатель для закрытия по Esc
  _handleOpenPopup() {
    popupSubtitle.textContent = this._title;
    popupImageBackground.src = this._image;
    popupImageBackground.alt = this.title;
    popupImage.classList.add("popup_opened");
    document.addEventListener("keydown", handleCloseByEsc);
  }
  
  //Метод для закрытия формы изображения
  _handleClosePopup() {
    popupImageBackground.src = "";
    popupImage.classList.remove("popup_opened");
  }

  //Метод, который навешивает слушатель на каждое изображение в карточке
  _setEventListeners() {
    this._image.addEventListener("click", () => {
      this._handleOpenPopup();
    });
    imageClose.addEventListener("click", () => {
      this._handleClosePopup();
    })
  }

  //Метод для переключения лайков
  _setToggleLike() {
    this._element.querySelector(".element__like").classList.toggle("element__like_active");
  }

  //Метод для удаления карточки по клику на "корзину"
  _deleteCard() {
    const deleteButton = this._element.querySelector(".element__delete");
    const deleteItem = deleteButton.closest(".element");
    deleteItem.remove();
  }
}

initialCards.forEach(function(item){
  const card = new Card (item.link, item.name, ".element-template");
  const cardElement = card.createCard();
  document.querySelector('.elements__list').prepend(cardElement);
});

export default Card;