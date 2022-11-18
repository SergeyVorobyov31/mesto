const editButton = document.querySelector(".profile__info-edit-button");
const popupProfile = document.querySelector(".popup_type_profile");  
const popupCard = document.querySelector(".popup_type_card");  
const formProfileClose = document.querySelector(".popup__close-profile");
const formCardClose = document.querySelector(".popup__close-card");
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
const imageClose = document.querySelector(".popup__close-image");
const buttonCloseList = document.querySelectorAll(".popup__close-icon");


buttonCloseList.forEach(btn => {
  const popup = btn.closest(".popup");
  btn.addEventListener("click", () => closePopup(popup));
});

initialCards.forEach(function(item){
    renderCard(item);
});

//Функция создания карточки
function createCard (item) {
  const cardElement = elementTemplate.cloneNode(true);
  cardElement.querySelector(".element__text").textContent = item.name;
  cardElement.querySelector(".element__delete").addEventListener("click", (evt) => closeCard(evt));
  const elementImage = cardElement.querySelector(".element__image");
  elementImage.src = item.link;
  elementImage.alt = item.name;
  elementImage.addEventListener("click", function() {
    openPopupImage(item.name, item.link);
  });
  cardElement.querySelector(".element__like").addEventListener("click", function(evt) {
      evt.target.classList.toggle("element__like_active");
  });
  return cardElement;
}

//Функия добавления карточки на страницу
function renderCard (item) {
  elementsContainer.prepend(createCard(item));
}

//Функция удаления карточки
function closeCard(evt) {
  //const deleteButton = document.querySelector(".element__delete");
  deleteButton = evt.target;
  const deleteItem = deleteButton.closest(".element");
  deleteItem.remove();
}

//Функция добавление карточки для попапа
function addCard () {
  const newCardData = {
    name: nameCard.value,
    link: imageCard.value
  }
  const newCardElement = createCard(newCardData);
  elementsContainer.prepend(newCardElement);
  formElementCard.reset();
  closePopup(popupCard);
}

//Универсальная функция открытия попапа
function openPopup (popup) {
  popup.classList.add("popup_opened");
}

//Универсальная функция закрытия попапа
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
  //closePopup(popupCard);
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
formElementProfile.addEventListener("submit", handleFormProfileSubmit);
formElementCard.addEventListener("submit", handleFormCardSubmit);