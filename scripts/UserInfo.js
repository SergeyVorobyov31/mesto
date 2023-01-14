class UserInfo {
    constructor(nameSelector, jobSelector) {
        this._name = nameSelector;
        this._job = jobSelector;
    }

    getUserInfo() {
        return {
            userName: this._name.textContent,
            userJob : this._job.textContent
        }
    }

    setUserInfo(name, job) {
        this._name.textContent = name.value;
        this._job.textContent = job.value;
    }
}

export default UserInfo;