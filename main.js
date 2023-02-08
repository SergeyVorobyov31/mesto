(()=>{"use strict";var t={174:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),e.hash&&(t+=e.hash),e.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t):t}},551:(t,e,n)=>{t.exports=n.p+"bbe2a6eafac19c3d031c.svg"}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.m=t,n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.p="",n.b=document.baseURI||self.location.href,(()=>{var t=n(174),e=n.n(t),r=new URL(n(551),n.b);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,c=[],a=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(c.push(r.value),c.length!==e);a=!0);}catch(t){l=!0,o=t}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===o(i)?i:String(i)),r)}var i}e()(r);const a=function(){function t(e,n,r,o,i,u){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._data=e,this._link=e.link,this._title=e.name,this._templateSelector=n,this._handleCardClick=r,this._handleDeleteClick=i,this._ownerProfileId=o,this._ownerCardId=e.owner._id,this._cardId=e._id,this._handleLikeClick=u}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"createCard",value:function(){return this._element=this._getTemplate(),this._elementImage=this._element.querySelector(".element__image"),this._elementImage.src=this._link,this._elementImage.alt=this._title,this._elementLike=this._element.querySelector(".element__like"),this._element.querySelector(".element__text").textContent=this._title,this._numberLike=this._element.querySelector(".element__number-likes"),this._numberLike.textContent=this._data.likes.length,this._showLikeActive(),this._setEventListeners(this._title,this._link),this._removeBasket(),this._element}},{key:"_removeBasket",value:function(){var t=this;this._ownerProfileId.then((function(e){t._ownerCardId!=e._id&&t._element.querySelector(".element__delete").remove()})).catch((function(t){return console.log(t)}))}},{key:"_setEventListeners",value:function(t,e){var n=this;this._elementImage.addEventListener("click",(function(){n._handleCardClick(t,e)})),this._element.querySelector(".element__delete").addEventListener("click",(function(){n._handleDeleteClick(n)})),this._elementLike.addEventListener("click",(function(){n.setToggleLike()}))}},{key:"getIdCard",value:function(){return this._cardId}},{key:"setToggleLike",value:function(){var t=this;this._elementLike.classList.toggle("element__like_active"),this._elementLike.classList.contains("element__like_active")?Promise.all([this._handleLikeClick(this._cardId,!0),this._ownerProfileId]).then((function(e){var n=i(e,2)[1];t._data.likes.push(n),t._numberLike.textContent=t._data.likes.length})).catch((function(t){return console.log(t)})):Promise.all([this._handleLikeClick(this._cardId,!1),this._ownerProfileId]).then((function(e){var n=i(e,2)[1];t._data.likes.shift(n),t._numberLike.textContent=t._data.likes.length})).catch((function(t){return console.log(t)}))}},{key:"_showLikeActive",value:function(){var t=this;this._ownerProfileId.then((function(e){t._data.likes.find((function(t){return t._id===e._id}))?t._elementLike.classList.add("element__like_active"):t._elementLike.classList.remove("element__like_active")})).catch((function(t){return console.log(t)}))}},{key:"isLike",value:function(t){t?this._elementLike.classList.add("element__like_active"):this._elementLike.classList.remove("element__like_active")}},{key:"deleteCard",value:function(){this._element.remove()}}])&&c(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===l(o)?o:String(o)),r)}var o}const f=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._inputElement=e.inputElement,this._buttonSubmit=e.buttonSubmit,this._buttonSubmitDisabled=e.buttonSubmitDisabled,this._inputElementError=e.inputElementError,this._inputErrorActiveClass=e.inputErrorActiveClass,this._errorElement=e.errorElement,this._form=n,this._inputList=Array.from(this._form.querySelectorAll(this._inputElement)),this._buttonElement=this._form.querySelector(this._buttonSubmit)}var e,n;return e=t,(n=[{key:"_showInputError",value:function(t,e){var n=this._form.querySelector(".".concat(t.id,"-error"));t=this._inputElementError,n.textContent=e,n.classList.add(this._inputErrorActiveClass)}},{key:"_hideInputError",value:function(t){var e=this._form.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._inputElementError),e.classList.remove(this._inputErrorActiveClass),e.textContent=""}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_setEventListener",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListener()}},{key:"_hasInvalidInput",value:function(t){return t.some((function(t){return!t.validity.valid}))}},{key:"_enableSubmitButton",value:function(){this._buttonElement.classList.remove(this._buttonSubmitDisabled),this._buttonElement.removeAttribute("disabled",!1)}},{key:"disableSubmitButton",value:function(){this._buttonElement.classList.add(this._buttonSubmitDisabled),this._buttonElement.setAttribute("disabled",!0)}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?this.disableSubmitButton():this._enableSubmitButton()}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==p(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===p(o)?o:String(o)),r)}var o}const h=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._container=n,this._renderer=r}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}}])&&y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==m(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===m(o)?o:String(o)),r)}var o}const _=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=e,this._ESC_CODE="Escape"}var e,n;return e=t,(n=[{key:"open",value:function(){var t=this;this._popup.classList.add("popup_opened"),document.addEventListener("keydown",(function(e){return t._handleEscClose(e)}))}},{key:"close",value:function(){var t=this;this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",(function(e){return t._handleEscClose(e)}))}},{key:"setEventListener",value:function(){var t=this;this._iconClose=this._popup.querySelector(".popup__close-icon"),this._iconClose.addEventListener("click",(function(){return t.close()})),this._overlay=this._popup.querySelector(".popup__overlay"),this._overlay.addEventListener("click",(function(){return t.close()}))}},{key:"_handleEscClose",value:function(t){t.key===this._ESC_CODE&&this.close()}}])&&d(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==b(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===b(o)?o:String(o)),r)}var o}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=g(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},S.apply(this,arguments)}function g(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=j(t)););return t}function k(t,e){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},k(t,e)}function w(t,e){if(e&&("object"===b(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function j(t){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},j(t)}const E=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&k(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=j(r);if(o){var n=j(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return w(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._name=t.querySelector(".popup__subtitle"),e._image=e._popup.querySelector(".popup__image"),e}return e=u,(n=[{key:"open",value:function(t,e){this._image.src=e,this._image.alt=t,this._name.textContent=t,S(j(u.prototype),"open",this).call(this)}}])&&v(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(_);function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==P(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==P(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===P(o)?o:String(o)),r)}var o}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=L(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},C.apply(this,arguments)}function L(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=T(t)););return t}function I(t,e){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},I(t,e)}function q(t,e){if(e&&("object"===P(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function T(t){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},T(t)}const x=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&I(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=T(r);if(o){var n=T(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return q(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._form=e._popup.querySelector(".popup__form"),e}return e=u,(n=[{key:"_getInputValues",value:function(){return this._name=this._popup.querySelector(".popup__input_type_title").value,this._link=this._popup.querySelector(".popup__input_type_link").value,this._name,this._link}},{key:"setEventListener",value:function(){this._form.addEventListener("submit",(function(t){t.preventDefault()})),C(T(u.prototype),"setEventListener",this).call(this)}},{key:"close",value:function(){this._form.reset(),C(T(u.prototype),"close",this).call(this)}}])&&O(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(_);function R(t){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(t)}function A(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==R(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==R(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===R(o)?o:String(o)),r)}var o}function D(){return D="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=U(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},D.apply(this,arguments)}function U(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=N(t)););return t}function B(t,e){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},B(t,e)}function z(t,e){if(e&&("object"===R(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function N(t){return N=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},N(t)}const V=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&B(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=N(r);if(o){var n=N(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return z(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._form=t.querySelector(".popup__form"),e}return e=u,(n=[{key:"setSubmitHandler",value:function(t){return this._handler=t,this._handler}},{key:"setEventListener",value:function(){var t=this;this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handler(),t.close()})),D(N(u.prototype),"setEventListener",this).call(this)}}])&&A(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(_);function J(t){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},J(t)}function M(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==J(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==J(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===J(o)?o:String(o)),r)}var o}const H=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e,this._job=n}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{userName:this._name.textContent,userJob:this._job.textContent}}},{key:"setUserInfo",value:function(t,e){this._name.textContent=t.value,this._job.textContent=e.value}}])&&M(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function $(t){return $="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$(t)}function Q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==$(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==$(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===$(o)?o:String(o)),r)}var o}var F=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.baseUrl,this._id=e.headers.authorization}var e,n;return e=t,n=[{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:{authorization:"".concat(this._id)}}).then((function(t){return t.ok?t.json():Promise.reject("Что-то пошло не так: ".concat(t.status))})).then((function(t){return t})).catch((function(t){return console.log(t)}))}},{key:"getUserData",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:{authorization:"".concat(this._id)}}).then((function(t){return t.ok?t.json():Promise.reject("Что-то пошло не так: ".concat(t.status))})).then((function(t){return t})).catch((function(t){return console.log(t)}))}},{key:"getUserId",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:{authorization:"".concat(this._id)}}).then((function(t){return t.ok?t.json():Promise.reject("Что-то пошло не так: ".concat(t.status))})).then((function(t){return t._id})).catch((function(t){return console.log(t)}))}},{key:"sendUserData",value:function(t,e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:{authorization:"".concat(this._id),"Content-Type":"application/json"},body:JSON.stringify({name:"".concat(t),about:"".concat(e)})}).then((function(t){return t.ok?t.json():Promise.reject("Что-то пошло не так: ".concat(t.status))}))}},{key:"sendNewCard",value:function(t){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:{authorization:"".concat(this._id),"Content-Type":"application/json"},body:JSON.stringify({link:"".concat(t.link),name:"".concat(t.name)})}).then((function(t){return t.ok?t.json():Promise.reject("Что-то пошло не так: ".concat(t.status))}))}},{key:"sendNewAvatar",value:function(t){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:{authorization:"".concat(this._id),"Content-Type":"application/json"},body:JSON.stringify({avatar:"".concat(t)})}).then((function(t){return t.ok?t.json():Promise.reject("Что-то пошло не так: ".concat(t.status))}))}},{key:"deleteCard",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:{authorization:"".concat(this._id),"Content-Type":"application/json"}}).then((function(t){return t.ok?t.json():Promise.reject("Что-то пошло не так: ".concat(t.status))}))}},{key:"changeLikeCard",value:function(t,e){return e?fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:{authorization:"".concat(this._id)}}).then((function(t){return t.ok?t.json():Promise.reject("Что-то пошло не так: ".concat(t.status))})).catch((function(t){return console.log(t)})):fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:{authorization:"".concat(this._id)}}).then((function(t){return t.ok?t.json():Promise.reject("Что-то пошло не так: ".concat(t.status))})).catch((function(t){return console.log(t)}))}}],n&&Q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();const G=F;var K={inputElement:".popup__input",buttonSubmit:".popup__button",buttonSubmitDisabled:"popup__button_disabled",inputElementError:"popup__input_type_error",inputErrorActiveClass:"popup__input_type_error",errorElement:"popup__error_visible"},W=document.querySelector(".profile__info-edit-button"),X=document.querySelector(".popup_type_profile"),Y=document.querySelector(".popup_type_card"),Z=document.querySelector(".popup__form-profile"),tt=document.querySelector(".profile__info-title"),et=document.querySelector(".profile__info-subtitle"),nt=document.querySelector(".profile__add-button"),rt=document.querySelector(".popup__input_type_title"),ot=document.querySelector(".popup__input_type_link"),it=document.querySelector(".popup__form-card"),ut=document.querySelector(".elements__list"),ct=document.querySelector(".popup_type_image"),at=document.querySelector(".popup_type_delete"),lt=document.querySelector(".popup__input_type_name"),st=document.querySelector(".popup__input_type_job"),ft=document.querySelector(".popup_type_avatar"),pt=document.querySelector(".popup__input_type_avatar"),yt=document.querySelector(".profile__avatar"),ht=document.querySelector(".popup__form_avatar");function mt(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,c=[],a=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(c.push(r.value),c.length!==e);a=!0);}catch(t){l=!0,o=t}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return dt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?dt(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function dt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var _t=new G({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-58",headers:{authorization:"3ff37044-95e4-4bd3-b490-b086237c1a77","Content-Type":"application/json"}}),bt=new V(at),vt=new x(X);vt.setEventListener();var St=new x(Y);St.setEventListener();var gt=new x(ft);gt.setEventListener();var kt=new H(tt,et),wt=new E(ct),jt=new f(K,it);jt.enableValidation();var Et=new f(K,Z);Et.enableValidation(),new f(K,ht).enableValidation();var Pt=function(t){return new a(t,".element-template",Ct,_t.getUserData().then((function(t){return t})),(function(t){bt.open(),bt.setEventListener(),bt.setSubmitHandler((function(){var e=t.getIdCard();_t.deleteCard(e),console.log("Пост удален"),t.deleteCard()}))}),(function(t,e){_t.changeLikeCard(t,e)})).createCard()},Ot=new h({renderer:function(t){Ot.addItem(Pt(t))}},ut);function Ct(t,e){wt.open(t,e),wt.setEventListener()}function Lt(t){document.querySelector(".popup__button").textContent=t?"Сохранение ...":"Сохранить"}Promise.all([_t.getInitialCards(),_t.getUserData()]).then((function(t){var e=mt(t,2),n=e[0],r=e[1];return Ot.renderItems(n),tt.textContent=r.name,et.textContent=r.about,yt.src=r.avatar,Ot})).catch((function(t){return console.log(t)})),yt.addEventListener("click",(function(){gt.open(),document.querySelector(".popup__button").textContent="Сохранить"})),W.addEventListener("click",(function(){vt.open(),lt.value=kt.getUserInfo().userName,st.value=kt.getUserInfo().userJob,Et.disableSubmitButton(),document.querySelector(".popup__button").textContent="Сохранить"})),nt.addEventListener("click",(function(){St.open(),document.querySelector(".popup__button").textContent="Создать",jt.disableSubmitButton()})),ht.addEventListener("submit",(function(){_t.sendNewAvatar(pt.value).then((function(t){yt.src=pt.value,gt.close()})),Lt(!0)})),Z.addEventListener("submit",(function(){kt.setUserInfo(lt,st),_t.sendUserData(tt.textContent,et.textContent),vt.close(),Lt(!0)})),it.addEventListener("submit",(function(){var t;t={link:ot.value,name:rt.value,owner:{id:[]}},Promise.all([_t.sendNewCard(t),_t.getUserData()]).then((function(e){var n=mt(e,2),r=n[0],o=n[1];console.log(r,o._id),t.owner._id=o._id,t._id=r._id;var i=Pt(r);return Ot.addItem(i),Ot})).catch((function(t){return console.log(t)})),St.close(),Lt(!0)}))})()})();