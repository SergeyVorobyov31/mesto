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

const profilePopup = new PopupWithForm(popupProfile, handleFormProfileSubmit);
profilePopup.setEventListener();

const cardPopup = new PopupWithForm(popupCard, addCard);
cardPopup.setEventListener();


const avatarPopup = new PopupWithForm(popupAvatar, handleFormAvatarSubmit);
avatarPopup.setEventListener();

const userInfo = new UserInfo(profileInfoTitle, profileInfoSubtitle, avatarImage);

const imagePopup = new PopupWithImage(popupImage);
imagePopup.setEventListener();

const formValidationCard = new FormValidation(validationConfig, formElementCard);
formValidationCard.enableValidation();

const formValidationProfile = new FormValidation(validationConfig, formElementProfile);
formValidationProfile.enableValidation();

const formValidationAvatar = new FormValidation(validationConfig, formElementAvatar);
formValidationAvatar.enableValidation();

let userDataId;

const initCard = (data) => {
  const card = new Card(
    data,
    ".element-template",
    handleOpenPopup,
    userDataId,
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
      .then(() => {
        card.setToggleLike();
      });
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
  userDataId = dataProfile._id;

  newCardList.renderItems(defaultCards);

  profileInfoTitle.textContent = dataProfile.name;
  profileInfoSubtitle.textContent = dataProfile.about;

  userInfo.setUserAvatar(dataProfile.avatar);
  return newCardList;
})
.catch(err => console.log(err))

//Функция добавление карточки для попапа
function addCard (newCardData) {
  //без обертки не работает
  renderLoading(true)
  Promise.all([api.sendNewCard(newCardData)])
  .then(([data]) => {
    newCardData._id = data._id;
    const card = initCard(data);
    cardPopup.close();
    newCardList.addItemPrepend(card);
  })
  .catch(err => console.log(err))
  .finally(() => {
    renderLoading(false, "Создать");
  })
}

function handleOpenPopup(name, link) {
  imagePopup.open(name, link);
}

function handleFormAvatarSubmit() {
  renderLoading(true)
  api.sendNewAvatar(linkAvatar.value)
  .then((res) => {
    avatarImage.src = res.avatar
    avatarPopup.close();
  })
  .catch(err => console.log(err))
  .finally(() => {
    renderLoading(false, "Сохранить");
  })
}

//Функция отправки формы профиля с ее закрытием
function handleFormProfileSubmit () {
  const user = profilePopup.getInputValues();
  userInfo.setUserInfo(user.name, user.about);
  renderLoading(true)
  api.sendUserData(profileInfoTitle.textContent, profileInfoSubtitle.textContent)
  .then(() => {
    profilePopup.close();
  })
  .catch(err => console.log(err))
  .finally(() => {
    renderLoading(false, "Сохранить");
  })
}

function renderLoading(isLoading, buttonText) {
  if(isLoading) {
    document.querySelector(".popup__button").textContent = "Сохранение ...";
  } else {
    document.querySelector(".popup__button").textContent = `${buttonText}`;
  }
}

avatarImage.addEventListener("click", () => {
  avatarPopup.open();
  formValidationAvatar.disableSubmitButton();
})

buttonEdit.addEventListener("click", () => {
  profilePopup.open();
  const user = userInfo.getUserInfo();
  console.log(user);
  nameProfile.value = user.userName;
  jobProfile.value = user.userJob;
  formValidationProfile.disableSubmitButton();
});

buttonAddCard.addEventListener("click", () => {
  cardPopup.open();
  formValidationCard.disableSubmitButton();
});
