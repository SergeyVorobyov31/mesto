export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const validationConfig = {
  inputElement: ".popup__input",
  buttonSubmit: ".popup__button",
  buttonSubmitDisabled: "popup__button_disabled",
  inputElementError: "popup__input_type_error",
  inputErrorActiveClass : "popup__input_type_error",
  errorElement: "popup__error_visible",
};

export const buttonEdit = document.querySelector(".profile__info-edit-button");
export const popupProfile = document.querySelector(".popup_type_profile");  
export const popupCard = document.querySelector(".popup_type_card");  
export const formElementProfile = document.querySelector(".popup__form-profile");
export const profileInfoTitle = document.querySelector(".profile__info-title");
export const profileInfoSubtitle = document.querySelector(".profile__info-subtitle");
export const buttonAddCard = document.querySelector(".profile__add-button");
export const nameCard = document.querySelector(".popup__input_type_title");
export const imageCard = document.querySelector(".popup__input_type_link");
export const formElementCard = document.querySelector(".popup__form-card");
export const elementsList = document.querySelector(".elements__list");
export const popupImage = document.querySelector(".popup_type_image");