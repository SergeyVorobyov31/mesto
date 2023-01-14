import "./index.html";
import "../pages/index.css";
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
  popupImage,
  nameProfile,
  jobProfile
} from "../scripts/constants.js";

const profilePopup = new PopupWithForm(popupProfile);
const cardPopup = new PopupWithForm(popupCard);
const userInfo = new UserInfo(profileInfoTitle, profileInfoSubtitle);

const formValidationCard = new FormValidation(validationConfig, formElementCard);
formValidationCard.enableValidation();

const formValidationProfile = new FormValidation(validationConfig, formElementProfile);
formValidationProfile.enableValidation();

function initCard(item) {
  const card = new Card (item, ".element-template", handleOpenPopup);
      const cardElement = card.createCard();
      defaultCardList.addItem(cardElement);
}

const defaultCardList = new Section({
    items: initialCards,
    renderer: (item) => {
      initCard(item);
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
  initCard(newCardData);
}

function handleOpenPopup(name, link) {
  const popupElement = new PopupWithImage(name, link, popupImage);
  popupElement.open(name, link);
  popupElement.setEventListener();
}

//Функция отправки формы профиля с ее закрытием
function handleFormProfileSubmit () {
    const userInfo = new UserInfo(profileInfoTitle, profileInfoSubtitle);
    userInfo.setUserInfo(profileInfoTitle, profileInfoSubtitle);
    profileInfoTitle.textContent = nameProfile.value;
    profileInfoSubtitle.textContent = jobProfile.value;
    profilePopup.close();
}

//Функция отправки формы карточки с ее закрытием
function handleFormCardSubmit () {
  addCard();
  cardPopup.close();
}

buttonEdit.addEventListener("click", () => {
  profilePopup.open();
  profilePopup.setEventListener();
  userInfo.getUserInfo();
  nameProfile.value = userInfo.getUserInfo().userName;
  jobProfile.value = userInfo.getUserInfo().userJob;
  formValidationProfile.disableSubmitButton();  
});

buttonAddCard.addEventListener("click", () => {
  cardPopup.open();
  cardPopup.setEventListener();
  formValidationCard.disableSubmitButton();
});

formElementProfile.addEventListener("submit", handleFormProfileSubmit);
formElementCard.addEventListener("submit", handleFormCardSubmit);