let editButton = document.querySelector(".profile__info-edit-button");
let popup = document.querySelector(".popup");    
let closeForm = document.querySelector(".popup__close-icon");
let formElement = document.querySelector(".popup__form");
let nameInput = document.querySelector(".popup__input_type_name");
let jobInput = document.querySelector(".popup__input_type_job");
let profileInfoTitle = document.querySelector(".profile__info-title");
let profileInfoSubtitle = document.querySelector(".profile__info-subtitle");


//Функция открытия формы
function editButtonOpen() {
    popup.classList.add("popup_opened");
    nameInput.value = profileInfoTitle.textContent;
    jobInput.value = profileInfoSubtitle.textContent;
} 


//Функция закрытия формы
function closePopup() {
    popup.classList.remove("popup_opened");
}


//Функция отправки формы с ее закрытием
function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileInfoTitle.textContent = nameInput.value;
    profileInfoSubtitle.textContent = jobInput.value;
    closePopup();
}


editButton.addEventListener("click", editButtonOpen);
closeForm.addEventListener("click", closePopup);
formElement.addEventListener("submit", formSubmitHandler);