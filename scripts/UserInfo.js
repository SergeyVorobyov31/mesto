class UserInfo {
    constructor(name, info) {
        this._name = name;
        this._info = info;
    }

    getUserInfo() {
        this._nameInput = document.querySelector(".popup__input_type_name");
        this._nameInput.value = this._name.textContent;
        this._jobInput = document.querySelector(".popup__input_type_job");
        this._jobInput.value = this._info.textContent;
        return(this._nameInput.value, this._jobInput.value);
    }

    setUserInfo() {
        this._nameInput = document.querySelector(".popup__input_type_name");
        this._jobInput = document.querySelector(".popup__input_type_job");
        this._name.textContent = this._nameInput.value;
        this._info.textContent = this._jobInput.value;
        return(this._name, this._info);
    }
}

export default UserInfo;