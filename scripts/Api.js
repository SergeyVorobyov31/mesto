class Api {
    constructor(options) {
        this._url = options.baseUrl;
        this._id = options.headers.authorization;
    }

    getInitialCards() {
        return fetch(`${this._url}/cards`, {
                headers: {
                    authorization: `${this._id}`
                }
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Что-то пошло не так: ${res.status}`);
        })
        .then((result) => {
            return result
        })
        .catch(err => console.log(err))
    }

    getUserData() {
        return fetch(`${this._url}/users/me`, {
            headers: {
                authorization: `${this._id}`
            }
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Что-то пошло не так: ${res.status}`);
        })
        .then((result) => {
            return result
        })
        .catch(err => console.log(err))
    }

    getUserId() {
        return fetch(`${this._url}/users/me`, {
            headers: {
                authorization: `${this._id}`
            }
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Что-то пошло не так: ${res.status}`);
        })
        .then((result) => {
            return result._id
        })
        .catch(err => console.log(err))
    }

    sendUserData(nameProfile, infoProfile) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: {
              authorization: `${this._id}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: `${nameProfile}`,
              about: `${infoProfile}`
            })
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Что-то пошло не так: ${res.status}`);
        })
    }

    sendNewCard(newCard) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: {
              authorization: `${this._id}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              link: `${newCard.link}`,
              name: `${newCard.name}`
            })
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Что-то пошло не так: ${res.status}`);
        })
    }

    sendNewAvatar(avatarUrl) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
              authorization: `${this._id}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              avatar: `${avatarUrl}`
            })
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Что-то пошло не так: ${res.status}`);
        })
    }

    deleteCard(cardId) {
        return fetch(`${this._url}/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
              authorization: `${this._id}`,
              'Content-Type': 'application/json'
            }
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Что-то пошло не так: ${res.status}`);
        })
    }

    changeLikeCard(cardId, isLike) {
        if(isLike) {
            return fetch(`${this._url}/cards/${cardId}/likes`, {
                method: "PUT",
                headers: {
                    authorization: `${this._id}`
                }
            })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Что-то пошло не так: ${res.status}`);
            })
            .catch(err => console.log(err))
        } else {
            return fetch(`${this._url}/cards/${cardId}/likes`, {
                method: "DELETE",
                headers: {
                    authorization: `${this._id}`
                }
            })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Что-то пошло не так: ${res.status}`);
            })
            .catch(err => console.log(err))
        }
    }
}

export default Api