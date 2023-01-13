import '../pages/index.css';
import Card from "../scripts/Card.js";
import FormValidation from "../scripts/FormValidator.js";
import Section from "../scripts/Section.js";
import PopupWithImage from '../scripts/PopupWithImage.js';
import PopupWithForm from '../scripts/PopupWithForm.js';
import UserInfo from "../scripts/UserInfo.js";
import {
  initialCards,
  validationConfig,
  buttonEdit,
  popupProfile,
  popupCard,
  formElementProfile,
  profileInfoTitle,
  profileInfoSubtitle,
  buttonAddCard,
  nameCard,
  imageCard,
  formElementCard,
  elementsList,
  popupImage
} from "../scripts/constants.js";

const formValidationCard = new FormValidation(validationConfig, formElementCard);
formValidationCard.enableValidation();

const formValidationProfile = new FormValidation(validationConfig, formElementProfile);
formValidationProfile.enableValidation();

const defaultCardList = new Section({
    items: initialCards,
    renderer: (item) => {
      const card = new Card (item, ".element-template", handleOpenPopup);
      const cardElement = card.createCard();
      defaultCardList.addItem(cardElement);
    }
  },
elementsList);

defaultCardList.renderItems();

//Функция добавление карточки для попапа
function addCard () {
  const newCardData = {
    link: imageCard.value,
    name: nameCard.value
  }
  const newCard = new Card (newCardData, ".element-template", handleOpenPopup);
  const newCardElement = newCard.createCard();
  defaultCardList.addItem(newCardElement);

  const popupElement = new PopupWithForm(popupCard);
  popupElement.close();
}

//Универсальная функция открытия попапа и добавления возможности закртыть окно при esc
function openPopup (popup) {
  const popupElement = new PopupWithForm(popup);
  popupElement.open();
  popupElement.setEventListener();
}

//Универсальная функция закрытия попапа
function closePopup (popup) {
  const popupElement = new PopupWithForm(popup);
  popupElement.close();
}

function handleOpenPopup(name, link) {
  const popupElement = new PopupWithImage(name, link, popupImage);
  popupElement.open();
  popupElement.setEventListener();
}

//Функция закрытия попапа кликом по оверлею
// function initClosePopupOnClick (popup) {
//   const popupOverlay = popup.querySelector(".popup__overlay");
//   popupOverlay.addEventListener("click", () => closePopup(popup));
// }

//Функция отправки формы профиля с ее закрытием
function handleFormProfileSubmit () {
    const userInfo = new UserInfo(profileInfoTitle, profileInfoSubtitle);
    userInfo.setUserInfo();
    closePopup(popupProfile);
}

//Функция отправки формы карточки с ее закрытием
function handleFormCardSubmit () {
  const popupElement = new PopupWithForm(popupCard);
  popupElement.setEventListener();
  addCard();
}

buttonEdit.addEventListener("click", () => {
  openPopup(popupProfile);
  const userInfo = new UserInfo(profileInfoTitle, profileInfoSubtitle);
  userInfo.getUserInfo();
  formValidationProfile.disableSubmitButton();  
});

buttonAddCard.addEventListener("click", () => {
  openPopup(popupCard);
  formValidationCard.disableSubmitButton();
});

formElementProfile.addEventListener("submit", handleFormProfileSubmit);
formElementCard.addEventListener("submit", handleFormCardSubmit);
//initClosePopupOnClick(popupCard);
//initClosePopupOnClick(popupImage);