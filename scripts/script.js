const buttonEdit = document.querySelector(".profile__info-edit-button");
const popupProfile = document.querySelector(".popup_type_profile");  
const popupCard = document.querySelector(".popup_type_card");  
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
const inputList = Array.from(document.querySelectorAll(".popup__input"));
const buttonSubmitCard = document.querySelector(".popup__button_card");
const popupSubtitle = document.querySelector(".popup__subtitle");
const popupImageBackground = document.querySelector(".popup__image");

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
  const deleteButton = evt.target;
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

//Функция для проверки нажатой кнопки при открытом попапе
function checkKey(evt) {
  const popup = document.querySelector(".popup_opened");
  if (evt.key === "Escape") {
    closePopup(popup);
  };
}

//Универсальная функция открытия попапа и добавления возможности закртыть окно при esc
function openPopup (popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", checkKey);
}

//Универсальная функция закрытия попапа
function closePopup (popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", checkKey);
}

//Функция закрытия попапа кликом по оверлею
function closePopupOnClick (popup) {
  const popupOverlay = popup.querySelector(".popup__overlay");
  popupOverlay.addEventListener("click", () => closePopup(popup));
}

//Функция открытия формы картинки
function openPopupImage(item, itemImg) {
  openPopup(popupImage);
  fillPopup(item, itemImg);
}

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
  setSubmitButtonState(false, buttonSubmitCard);
}

//Функция открытия большого изображения
function fillPopup (item, itemImg) {
  popupSubtitle.textContent = item;
  popupImageBackground.src = itemImg;
  popupImageBackground.alt = item;
}

buttonEdit.addEventListener("click", () => {
  nameInput.value = profileInfoTitle.textContent;
  jobInput.value = profileInfoSubtitle.textContent;
  openPopup(popupProfile)
});
buttonAddCard.addEventListener("click", () => openPopup(popupCard));
formElementProfile.addEventListener("submit", handleFormProfileSubmit);
formElementCard.addEventListener("submit", handleFormCardSubmit);
popupProfile.addEventListener("click", closePopupOnClick(popupProfile));
popupCard.addEventListener("click", closePopupOnClick(popupCard));
popupImage.addEventListener("click", closePopupOnClick(popupImage));