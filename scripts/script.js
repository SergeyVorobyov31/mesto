let editButton = document.querySelector(".profile__info-edit-button");
let editForm = document.querySelector(".popup");    
let closeForm = document.querySelector(".popup__close-icon");
let formElement = document.querySelector(".popup");
let nameInput = document.querySelector(".popup__input_name");
let jobInput = document.querySelector(".popup__input_job");
let profileInfoTitle = document.querySelector(".profile__info-title");
let profileInfoSubtitle = document.querySelector(".profile__info-subtitle");


//Функция открытия формы
function editButtonOpen() {
    editForm.classList.add("popup_opened");
    nameInput.value = profileInfoTitle.textContent;
    jobInput.value = profileInfoSubtitle.textContent;
} 


//Функция закрытия формы
function closePopup() {
    let formEdit = document.querySelector(".popup_opened");
    formEdit.classList.remove("popup_opened");
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