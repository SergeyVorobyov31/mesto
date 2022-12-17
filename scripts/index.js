import Card from "./Card.js";
import FormValidation from "./FormValidator.js";

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
const buttonSubmitCard = document.querySelector(".popup__button_card");

export const popupImage = document.querySelector(".popup_type_image");
export const popupSubtitle = document.querySelector(".popup__subtitle");
export const popupImageBackground = document.querySelector(".popup__image");

buttonCloseList.forEach(btn => {
  const popup = btn.closest(".popup");
  btn.addEventListener("click", () => closePopup(popup));
});

const formValidation = new FormValidation;

//Функция добавление карточки для попапа
function addCard () {
  const newCardData = {
    name: nameCard.value,
    link: imageCard.value
  }
  const card = new Card (newCardData.link, newCardData.name, ".element-template");
  const cardElement = card.createCard();
  document.querySelector(".elements__list").prepend(cardElement);

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
function closePopupOnClick (popup) {
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
  formValidation._setSubmitButtonState(false, buttonSubmitCard); //нужно изменить
}

buttonEdit.addEventListener("click", () => {
  nameInput.value = profileInfoTitle.textContent;
  jobInput.value = profileInfoSubtitle.textContent;
  openPopup(popupProfile)
});
buttonAddCard.addEventListener("click", () => openPopup(popupCard));
formElementProfile.addEventListener("submit", handleFormProfileSubmit);
formElementCard.addEventListener("submit", handleFormCardSubmit);
closePopupOnClick(popupProfile);
closePopupOnClick(popupCard);
closePopupOnClick(popupImage);