const editButton = document.querySelector(".profile__info-edit-button");
const popup = document.querySelector(".popup");
const popupProfile = document.querySelector(".popup_type_profile");  
const popupCard = document.querySelector(".popup_type_card");  
const closeForm = document.querySelector(".popup__close-icon");
const closeFormProfile = document.querySelector(".popup__close-profile");
const closeFormCard = document.querySelector(".popup__close-card");
const formElementProfile = document.querySelector(".popup__form-profile");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_job");
const profileInfoTitle = document.querySelector(".profile__info-title");
const profileInfoSubtitle = document.querySelector(".profile__info-subtitle");
const elementList = document.querySelector(".elements__list");
const elementTemplate = document.querySelector(".element-template").content;
const addCardButton = document.querySelector(".profile__add-button");
const nameCard = document.querySelector(".popup__input_type_title");
const imageCard = document.querySelector(".popup__input_type_link");
const formElementCard = document.querySelector(".popup__form-card");
const popupImage = document.querySelector(".popup_type_image");
const closeImage = document.querySelector(".popup__close-image");
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

initialCards.forEach(function(item){
    const cardElement = elementTemplate.cloneNode(true);
    cardElement.querySelector(".element__text").textContent = item.name;
    cardElement.querySelector(".element__image").src = item.link;
    cardElement.querySelector(".element__image").addEventListener("click", function(){
      openPopupImage(item.name, item.link)
    });
    cardElement.querySelector(".element__like").addEventListener("click", function(evt) {
        evt.target.classList.toggle("element__like_active");
    });
    elementList.append(cardElement);
});

//Функция удаления карточки
function closeCard() {
    const arrDeleteButtons = Array.from(document.querySelectorAll(".element__delete"));
    arrDeleteButtons.forEach(function(item){
        item.addEventListener("click", function() {
            const deleteItem = item.closest('.element');
            deleteItem.remove();
        });
    });
}

//Функция добавление карточки для попапа
function addCard (nameValue, srcValue) {
  const cardElement = elementTemplate.cloneNode(true);
  cardElement.querySelector(".element__text").textContent = nameValue.value;
  cardElement.querySelector(".element__image").src = srcValue.value;
  cardElement.querySelector(".element__image").addEventListener("click", function() {
    openPopupImage(nameValue.value, srcValue.value)
  });
  cardElement.querySelector(".element__like").addEventListener("click", function(evt) {
      evt.target.classList.toggle("element__like_active");
  });
  elementList.prepend(cardElement);
}

//Функция открытия формы профиля
function editButtonOpen() {
    popupProfile.classList.add("popup_opened");
    nameInput.value = profileInfoTitle.textContent;
    jobInput.value = profileInfoSubtitle.textContent;
} 

//Функция закрытия формы профиля
function closePopupProfile() {
  popupProfile.classList.remove("popup_opened");
}

//Функция открытия формы карточек
function addCardButtonOpen() {
    popupCard.classList.add("popup_opened");
}

//Функция закрытия формы карточек
function closePopupCard() {
    popupCard.classList.remove("popup_opened");
}

//Функция открытия формы картинки
function openPopupImage(item, itemImg) {
  popupImage.classList.add("popup_opened");
  openBigImg(item, itemImg);
}

//Функция закрытия формы картинки
function closePopupImage() {
  popupImage.classList.remove("popup_opened");
}

//Функция отправки формы профиля с ее закрытием
function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileInfoTitle.textContent = nameInput.value;
    profileInfoSubtitle.textContent = jobInput.value;
    closePopupProfile();
}

//Функция отправки формы карточки с ее закрытием
function formCardSubmitHandler (evt) {
  evt.preventDefault();
  addCard(nameCard, imageCard);
  closeCard();
  closePopupCard();
}

//Функция открытия большого изображения
function openBigImg (item, itemImg) {
  const popupSubtitle = document.querySelector(".popup__subtitle");
  popupSubtitle.textContent = item;
  const popupImageBackground = document.querySelector(".popup__image");
  popupImageBackground.src = itemImg;
}

closeCard();
editButton.addEventListener("click", editButtonOpen);
addCardButton.addEventListener("click", addCardButtonOpen);
closeFormProfile.addEventListener("click", closePopupProfile);
closeFormCard.addEventListener("click", closePopupCard);
formElementProfile.addEventListener("submit", formSubmitHandler);
formElementCard.addEventListener("submit",formCardSubmitHandler);
closeImage.addEventListener("click", closePopupImage);