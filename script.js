let editButton = document.querySelector(".profile__info-edit-button");
//Функция открытия формы
function editButtonOpen() {
    let editForm = document.querySelector(".edit-form");
    console.log(editForm);
    editForm.classList.add("edit-form_opened");
    editForm.classList.remove("edit-form");
} 
editButton.addEventListener("click", editButtonOpen);

let closeForm = document.querySelector(".edit-form__close-icon");
//Функция закрытия формы
function closePopup() {
    let formEdit = document.querySelector(".edit-form_opened");
    formEdit.classList.add("edit-form");
    formEdit.classList.remove("edit-form_opened");
}
closeForm.addEventListener("click", closePopup);

let formElement = document.querySelector(".edit-form");
let nameInput = document.querySelector(".popup-container__name");
let jobInput = document.querySelector(".popup-container__job");

//Функия отправки формы с ее закрытием
function formSubmitHandler (evt) {
    evt.preventDefault(); 
    let profileInfoTitle = document.querySelector(".profile__info-title");
    let profileInfoSubtitle = document.querySelector(".profile__info-subtitle");
    profileInfoTitle.textContent = nameInput.value;
    profileInfoSubtitle.textContent = jobInput.value;
    console.log(profileInfoSubtitle);
    console.log(profileInfoTitle);
    closePopup();
}

formElement.addEventListener("submit", formSubmitHandler);