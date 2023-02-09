class UserInfo {
    constructor(nameSelector, jobSelector, avatarSelector) {
        this._name = nameSelector;
        this._job = jobSelector;
        this._avatar = avatarSelector;
    }

    getUserInfo() {
        return {
            userName: this._name.textContent,
            userJob : this._job.textContent,
            userAvatarUrl: this._avatar.src
        }
    }

    setUserInfo(name, job) {
        this._name.textContent = name;
        this._job.textContent = job;
    }

    setUserAvatar(url) {
        this._avatar.src = url;
    }
}

export default UserInfo;