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

const deletePopup = new PopupDelete(popupDelete);
deletePopup.setEventListener();
console

const profilePopup = new PopupWithForm(popupProfile);
profilePopup.setEventListener();

const cardPopup = new PopupWithForm(popupCard);
cardPopup.setEventListener();


const avatarPopup = new PopupWithForm(popupAvatar);
avatarPopup.setEventListener();

const userInfo = new UserInfo(profileInfoTitle, profileInfoSubtitle);

const imagePopup = new PopupWithImage(popupImage);
imagePopup.setEventListener();

const formValidationCard = new FormValidation(validationConfig, formElementCard);
formValidationCard.enableValidation();

const formValidationProfile = new FormValidation(validationConfig, formElementProfile);
formValidationProfile.enableValidation();

const formValidationAvatar = new FormValidation(validationConfig, formElementAvatar);
formValidationAvatar.enableValidation();

let userData;

const initCard = (data) => {
  const card = new Card(
    data,
    ".element-template",
    handleOpenPopup,
    userData,
    ((card) => {
      deletePopup.open();
      deletePopup.setSubmitHandler(() => {
        const id = card.getIdCard();
        api.deleteCard(id)
        .then(() => {
          console.log("Пост удален")
          card.deleteCard();
        })
        .catch(err => console.log(err));
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
    newCardList.addItemAppend(initCard(data));
  }
},
elementsList)

Promise.all([api.getInitialCards(), api.getUserData()])
.then(([defaultCards, dataProfile]) => {
  userData = dataProfile;

  newCardList.renderItems(defaultCards);

  profileInfoTitle.textContent = dataProfile.name;
  profileInfoSubtitle.textContent = dataProfile.about;

  avatarImage.src = dataProfile.avatar;
  return newCardList;
})
.catch(err => console.log(err))

//Функция добавление карточки для попапа
function addCard () {
  const newCardData = cardPopup.getInputValues();
  Promise.all([api.sendNewCard(newCardData)])
  .then(([data]) => {
    newCardData._id = data._id;
    const card = initCard(data);
    newCardList.addItemPrepend(card);
  })
  .catch(err => console.log(err))
  .finally(() => {
    renderLoading(true);
  })
}

function handleOpenPopup(name, link) {
  imagePopup.open(name, link);
}

function handleFormAvatarSubmit() {
  api.sendNewAvatar(linkAvatar.value)
  .then((res) => {
    avatarImage.src = res.avatar
    avatarPopup.close();
  })
  .catch(err => console.log(err))
  .finally(() => {
    renderLoading(true);
  })
}

//Функция отправки формы профиля с ее закрытием
function handleFormProfileSubmit () {
  const user = profilePopup.getInputValues();
  userInfo.setUserInfo(user.name, user.about);
  api.sendUserData(profileInfoTitle.textContent, profileInfoSubtitle.textContent)
  .then(() => {
    profilePopup.close();
  })
  .catch(err => console.log(err))
  .finally(() => {
    renderLoading(true);
  })
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
  formValidationAvatar.disableSubmitButton();
  document.querySelector(".popup__button").textContent = "Сохранить";
})

buttonEdit.addEventListener("click", () => {
  profilePopup.open();
  const user = userInfo.getUserInfo();
  console.log(user);
  nameProfile.value = user.userName;
  jobProfile.value = user.userJob;
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
});
formElementProfile.addEventListener("submit", () => {
  handleFormProfileSubmit();
});
formElementCard.addEventListener("submit", () => {
  handleFormCardSubmit();
});