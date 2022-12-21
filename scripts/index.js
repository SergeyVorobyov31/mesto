import Card from "./Card.js";
import FormValidation from "./FormValidator.js";
import {initialCards, validationConfig} from "./constants.js";

const buttonEdit = document.querySelector(".profile__info-edit-button");
const popupProfile = document.querySelector(".popup_type_profile");  
const popupCard = document.querySelector(".popup_type_card");  
const formElementProfile = document.querySelector(".popup__form-profile");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_job");
const profileInfoTitle = document.querySelector(".profile__info-title");
const profileInfoSubtitle = document.querySelector(".profile__info-subtitle");
const buttonAddCard = document.querySelector(".profile__add-button");
const nameCard = document.querySelector(".popup__input_type_title");
const imageCard = document.querySelector(".popup__input_type_link");
const formElementCard = document.querySelector(".popup__form-card");
const buttonCloseList = document.querySelectorAll(".popup__close-icon");
const elementsList = document.querySelector(".elements__list");

export const popupImage = document.querySelector(".popup_type_image");
export const popupSubtitle = document.querySelector(".popup__subtitle");
export const popupImageBackground = document.querySelector(".popup__image");

function createCard(item) {
  const card = new Card (item.link, item.name, ".element-template", handleOpenPopup);
  const cardElement = card.createCard();
  elementsList.prepend(cardElement);
}
const formValidationCard = new FormValidation(validationConfig, formElementCard);
formValidationCard.enableValidation();

const formValidationProfile = new FormValidation(validationConfig, formElementProfile);
formValidationProfile.enableValidation();

/*initialCards.forEach(function(item){
  const card = new Card (item.link, item.name, ".element-template", handleOpenPopup);
  const cardElement = card.createCard();
  document.querySelector('.elements__list').prepend(cardElement);
});*/

initialCards.forEach(function(item){
  createCard(item);
});

buttonCloseList.forEach(btn => {
  const popup = btn.closest(".popup");
  btn.addEventListener("click", () => closePopup(popup));
});

//Функция добавление карточки для попапа
function addCard () {
  const newCardData = {
    name: nameCard.value,
    link: imageCard.value
  }
  createCard(newCardData);

  formElementCard.reset();
  closePopup(popupCard);
}

//Функция для проверки нажатой кнопки при открытом попапе
export function handleCloseByEsc(evt) {
  if (evt.key === "Escape") {
    const popup = document.querySelector(".popup_opened");
    closePopup(popup);
  };
}

export function handleOpenPopup(name, link) {
  popupSubtitle.textContent = name;
  popupImageBackground.src = link;
  popupImageBackground.alt = name;
  popupImage.classList.add("popup_opened");
  document.addEventListener("keydown", handleCloseByEsc);
}

//Универсальная функция открытия попапа и добавления возможности закртыть окно при esc
function openPopup (popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", handleCloseByEsc);
}

//Универсальная функция закрытия попапа
function closePopup (popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleCloseByEsc);
}

//Функция закрытия попапа кликом по оверлею
function initClosePopupOnClick (popup) {
  const popupOverlay = popup.querySelector(".popup__overlay");
  popupOverlay.addEventListener("click", () => closePopup(popup));
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
}

buttonEdit.addEventListener("click", () => {
  nameInput.value = profileInfoTitle.textContent;
  jobInput.value = profileInfoSubtitle.textContent;
  openPopup(popupProfile)
  //const formValidation = new FormValidation(validationConfig, popupProfile);
  const btn = popupProfile.querySelector(".popup__button");
  formValidationProfile.disableSubmitButton(btn);  
});
buttonAddCard.addEventListener("click", () => openPopup(popupCard));
formElementProfile.addEventListener("submit", handleFormProfileSubmit);
formElementCard.addEventListener("submit", handleFormCardSubmit);
initClosePopupOnClick(popupProfile);
initClosePopupOnClick(popupCard);
initClosePopupOnClick(popupImage);