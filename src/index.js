import "./index.html";
import "../pages/index.css";
import Card from "../scripts/Card.js";
import FormValidation from "../scripts/FormValidator.js";
import Section from "../scripts/Section.js";
import PopupWithImage from '../scripts/PopupWithImage.js';
import PopupWithForm from '../scripts/PopupWithForm.js';
import PopupDelete from '../scripts/PopupDelete.js'
import UserInfo from "../scripts/UserInfo.js";
import Api from "../scripts/Api.js";
import {
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
  popupDelete,
  nameProfile,
  jobProfile,
  popupAvatar,
  linkAvatar,
  avatarImage,
  formElementAvatar
} from "../scripts/constants.js";

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-58',
  headers: {
    authorization: '3ff37044-95e4-4bd3-b490-b086237c1a77',
    'Content-Type': 'application/json'
  }
});

const deletePopup = new PopupDelete(popupDelete)

const profilePopup = new PopupWithForm(popupProfile);
profilePopup.setEventListener();

const cardPopup = new PopupWithForm(popupCard);
cardPopup.setEventListener();

const avatarPopup = new PopupWithForm(popupAvatar);
avatarPopup.setEventListener();

const userInfo = new UserInfo(profileInfoTitle, profileInfoSubtitle);

const imagePopup = new PopupWithImage(popupImage);

const formValidationCard = new FormValidation(validationConfig, formElementCard);
formValidationCard.enableValidation();

const formValidationProfile = new FormValidation(validationConfig, formElementProfile);
formValidationProfile.enableValidation();

const formValidationAvatar = new FormValidation(validationConfig, formElementAvatar);
formValidationAvatar.enableValidation();



const initCard = (data) => {
  const card = new Card(
    data,
    ".element-template",
    handleOpenPopup,
    getUserData(),
    ((card) => {
      deletePopup.open();
      deletePopup.setEventListener();
      deletePopup.setSubmitHandler(() => {
        const id = card.getIdCard();
        api.deleteCard(id);
        console.log("Пост удален")
        card.deleteCard();
      })
    }),
    ((idCard, value) => {
      api.changeLikeCard(idCard, value)
    })
  )
  return card.createCard()
}

const newCardList = new Section({
  renderer: (data) => {
    newCardList.addItem(initCard(data));
  }
},
elementsList)

function getUserData() {
  return api.getUserData()
  .then((res) => {
    return res;
  })
}

Promise.all([api.getInitialCards(), api.getUserData()])
.then(([defaultCards, dataProfile]) => {
  newCardList.renderItems(defaultCards);

  profileInfoTitle.textContent = dataProfile.name;
  profileInfoSubtitle.textContent = dataProfile.about;

  avatarImage.src = dataProfile.avatar;
  return newCardList;
})
.catch(err => console.log(err))

//Функция добавление карточки для попапа
function addCard () {
  const newCardData = {
    link: imageCard.value,
    name: nameCard.value,
    owner: {
      id: [] 
    }
  }
  Promise.all([api.sendNewCard(newCardData), api.getUserData()])
  .then(([data, profile]) => {
    console.log(data, profile._id);
    newCardData.owner._id = profile._id
    newCardData._id = data._id;
    const card = initCard(data);
    newCardList.addItem(card);
    return newCardList;
  })
  .catch(err => console.log(err))
}

function handleOpenPopup(name, link) {
  imagePopup.open(name, link);
  imagePopup.setEventListener();
}

function handleFormAvatarSubmit() {
  api.sendNewAvatar(linkAvatar.value)
  .then((res) => {
    avatarImage.src = linkAvatar.value
    avatarPopup.close();
  })
}

//Функция отправки формы профиля с ее закрытием
function handleFormProfileSubmit () {
    userInfo.setUserInfo(nameProfile, jobProfile);
    api.sendUserData(profileInfoTitle.textContent, profileInfoSubtitle.textContent)
    profilePopup.close();
}

//Функция отправки формы карточки с ее закрытием
function handleFormCardSubmit () {
  addCard();
  cardPopup.close();
}

function renderLoading(isLoading) {
  if(isLoading) {
    document.querySelector(".popup__button").textContent = "Сохранение ...";
  } else {
    document.querySelector(".popup__button").textContent = "Сохранить";
  }
}

avatarImage.addEventListener("click", () => {
  avatarPopup.open();
  document.querySelector(".popup__button").textContent = "Сохранить";
})

buttonEdit.addEventListener("click", () => {
  profilePopup.open();
  nameProfile.value = userInfo.getUserInfo().userName;
  jobProfile.value = userInfo.getUserInfo().userJob;
  formValidationProfile.disableSubmitButton();
  document.querySelector(".popup__button").textContent = "Сохранить";  
});

buttonAddCard.addEventListener("click", () => {
  cardPopup.open();
  document.querySelector(".popup__button").textContent = "Создать";
  formValidationCard.disableSubmitButton();
});

formElementAvatar.addEventListener("submit", () => {
  handleFormAvatarSubmit();
  renderLoading(true);
});
formElementProfile.addEventListener("submit", () => {
  handleFormProfileSubmit();
  renderLoading(true);
});
formElementCard.addEventListener("submit", () => {
  handleFormCardSubmit();
  renderLoading(true);
});