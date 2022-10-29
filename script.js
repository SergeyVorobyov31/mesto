let editButton = document.querySelector(".profile__info-edit-button");
console.log(editButton);
//Функция открытия формы
function editButtonOpen() {
    let editForm = document.querySelector(".edit-form");
    console.log(editForm);
    editForm.classList.add("edit-form_opened");
    editForm.classList.remove("edit-form");
} 

editButton.addEventListener("click", editButtonOpen);

let closeForm = document.querySelector(".edit-form__close-icon");
console.log(closeForm);
//Функция закрытия формы
function closePopup() {
    let formEdit = document.querySelector(".edit-form_opened");
    formEdit.classList.add("edit-form");
    formEdit.classList.remove("edit-form_opened");
}
closeForm.addEventListener("click", closePopup);

// Находим форму в DOM
let formElement = document.querySelector(".popup-container");
// Находим поля формы в DOM
let nameInput = document.querySelector(".popup-container__name");
let jobInput = document.querySelector(".popup-container__job");

let save = document.querySelector(".popup-container__button");
function saveClick() {
    save.classList.add("popup-container__button_clicked");
}
save.addEventListener("click", saveClick);


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); 
    let profileInfoTitle = document.querySelector(".profile__info-title");
    let profileInfoSubtitle = document.querySelector(".profile__info-subtitle");
    profileInfoTitle.textContent=`${nameInput.value}`;
    profileInfoSubtitle.textContent=`${jobInput.value}`;
    console.log(profileInfoSubtitle);
    console.log(profileInfoTitle);
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener("submit", formSubmitHandler);