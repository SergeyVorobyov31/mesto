const editButton = document.querySelector(".profile__info-edit-button");
const popupProfile = document.querySelector(".popup_type_profile");  
const popupCard = document.querySelector(".popup_type_card");  
const closeFormProfile = document.querySelector(".popup__close-profile");
const closeFormCard = document.querySelector(".popup__close-card");
const formElementProfile = document.querySelector(".popup__form-profile");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_job");
const profileInfoTitle = document.querySelector(".profile__info-title");
const profileInfoSubtitle = document.querySelector(".profile__info-subtitle");
const elementsContainer = document.querySelector(".elements__list");
const elementTemplate = document.querySelector(".element-template").content;
const buttonAddCard = document.querySelector(".profile__add-button");
const nameCard = document.querySelector(".popup__input_type_title");
const imageCard = document.querySelector(".popup__input_type_link");
const formElementCard = document.querySelector(".popup__form-card");
const popupImage = document.querySelector(".popup_type_image");
const closeImage = document.querySelector(".popup__close-image");

initialCards.forEach(function(item){
    createCard(item);
});

//Функция создания карточки
function createCard (item) {
  const cardElement = elementTemplate.cloneNode(true);
    cardElement.querySelector(".element__text").textContent = item.name;
    cardElement.querySelector(".element__image").src = item.link;
    cardElement.querySelector(".element__image").addEventListener("click", function(){
      openPopupImage(item.name, item.link)
    });
    cardElement.querySelector(".element__like").addEventListener("click", function(evt) {
        evt.target.classList.toggle("element__like_active");
    });
    elementsContainer.prepend(cardElement);
    closeCard();
}


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
function addCard () {
  const arrayNewCard = 
  [
    {
      name: nameCard.value,
      link: imageCard.value
    }
  ];
  const newCard = arrayNewCard.map(function(item) {
    return (item);
  });;
  newCard.forEach(function(item){
    createCard(item);
    nameCard.value = '';
    imageCard.value = '';
  });
}

//Универсальная функция закрытия попапа
function openPopup (popup) {
  popup.classList.add("popup_opened");
}

//Универсальная функция открытия попапа
function closePopup (popup) {
  popup.classList.remove("popup_opened");
}

//Функция открытия формы картинки
function openPopupImage(item, itemImg) {
  openPopup(popupImage);
  openBigImg(item, itemImg);
}

nameInput.value = profileInfoTitle.textContent;
jobInput.value = profileInfoSubtitle.textContent;

//Функция отправки формы профиля с ее закрытием
function handleFormProfileSubmit (evt) {
    evt.preventDefault(); 
    profileInfoTitle.textContent = nameInput.value;
    profileInfoSubtitle.textContent = jobInput.value;
    closePopup(popupProfile);
}

//Функция отправки формы карточки с ее закрытием
function handleFormCardSubmit (evt) {
  evt.preventDefault();
  addCard();
  closePopup(popupCard);
}
const popupSubtitle = document.querySelector(".popup__subtitle");
const popupImageBackground = document.querySelector(".popup__image");

//Функция открытия большого изображения
function openBigImg (item, itemImg) {
  popupSubtitle.textContent = item;
  popupImageBackground.src = itemImg;
  popupImageBackground.alt = item;
}


editButton.addEventListener("click", () => openPopup(popupProfile));
buttonAddCard.addEventListener("click", () => openPopup(popupCard));
closeFormProfile.addEventListener("click", () => closePopup(popupProfile));
closeFormCard.addEventListener("click", () => closePopup(popupCard));
formElementProfile.addEventListener("submit", handleFormProfileSubmit);
formElementCard.addEventListener("submit", handleFormCardSubmit);
closeImage.addEventListener("click", () => closePopup(popupImage));