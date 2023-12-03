(()=>{"use strict";function e(e,n){t(e,document.getElementById(e._id),n)}function t(e,t,n){var o=t.querySelector(".photo__item-info-text"),r=t.querySelector(".photo__item-picture"),u=t.querySelector(".photo__item-info-number"),i=t.querySelector(".photo__item-info-button"),c=t.querySelector(".photo__item-info-delete");r.src=e.link,r.alt=e.name,o.textContent=e.name,u.textContent=e.likes.length,e.likes.some((function(e){return e._id==n}))?i.classList.add("photo__item-info-button_active"):i.classList.remove("photo__item-info-button_active"),e.owner._id!=n&&(c.disabled="disabled",c.classList.add("photo__item-info-delete_disabled"))}function n(e){e.classList.add("popup_opened"),document.addEventListener("keydown",r)}function o(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",r)}function r(e){"Escape"===e.key&&o(document.querySelector(".popup_opened"))}var u=function(e,t,n){var o=e.querySelector(".".concat(t.name,"-error"));t.classList.remove(n.inputErrorClass),o.classList.remove(n.errorClass),o.textContent=""},i=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(n.inactiveButtonClass),t.disabled=!1):(t.classList.add(n.inactiveButtonClass),t.disabled="disabled")},c=function(e,t){Array.from(e.querySelectorAll(t.inputSelector)).forEach((function(n){return u(e,n,t)}));var n=e.querySelector(t.submitButtonSelector);n.classList.add(t.inactiveButtonClass),n.disabled="disabled"},a={baseUrl:"https://nomoreparties.co/v1/wff-cohort-1",headers:{authorization:"afa88d83-d34b-4e5e-9a10-32caf87badd8","Content-Type":"application/json"}},s=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))},l=document.querySelector(".popup_edit"),d=l.querySelector(".popup__info"),p=l.querySelector(".popup__input_text_name"),_=l.querySelector(".popup__input_text_subtitle"),f=l.querySelector(".popup__close"),m=document.querySelector(".profile__info-title"),h=document.querySelector(".profile__info-subtitle"),v=document.querySelector(".profile__edit"),y=Array.from(document.querySelectorAll(".popup")),S=document.querySelector(".profile__logo"),b=l.querySelector(".popup__submit"),q=document.querySelector(".popup_add"),E=q.querySelector(".popup__info"),L=q.querySelector(".popup__input_text_place-name"),C=q.querySelector(".popup__input_text_place-link"),k=q.querySelector(".popup__close"),x=document.querySelector(".profile__add"),g=document.querySelector(".popup_image"),A=g.querySelector(".popup__photo"),B=g.querySelector(".popup__caption"),U=g.querySelector(".popup__close"),T=document.querySelector(".popup_avatar"),D=T.querySelector(".popup__info"),P=T.querySelector(".popup__input_url_avatar"),w=T.querySelector(".popup__close"),N=document.querySelector(".profile__photo"),O=T.querySelector(".popup__submit"),j=document.querySelector(".profile__logo"),J=document.querySelector(".photo"),M="",G={},H={formSelector:".popup__info",inputSelector:".popup__input",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__button_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function V(e,n,o,r){var u;u=function(e,n,o,r,u){var i=document.querySelector("#photo-template").content.querySelector(".photo__item").cloneNode(!0),c=i.querySelector(".photo__item-picture"),a=i.querySelector(".photo__item-info-button"),s=i.querySelector(".photo__item-info-delete");return i.id=n._id,c.addEventListener("click",(function(){return o(n.link,n.name)})),a.addEventListener("click",(function(){return r(n._id)})),s.addEventListener("click",(function(){return u(n._id,i)})),t(n,i,e),i}(M,e,n,o,r),J.prepend(u)}function z(t){var n,o=G[t];o.likes.some((function(e){return e._id==M}))?(n=o._id,fetch(a.baseUrl+"/cards/likes/"+n,{method:"DELETE",headers:a.headers}).then((function(e){return s(e)}))).then((function(t){G[t._id]=t,e(t,M)})).catch((function(e){return console.error(e)})):function(e){return fetch(a.baseUrl+"/cards/likes/"+e,{method:"PUT",headers:a.headers}).then((function(e){return s(e)}))}(o._id).then((function(t){G[t._id]=t,e(t,M)})).catch((function(e){return console.error(e)}))}function I(e,t){var n;(n=e,fetch(a.baseUrl+"/cards/"+n,{method:"DELETE",headers:a.headers}).then((function(e){return s(e)}))).then((function(){J.removeChild(t),delete G[e]})).catch((function(e){return console.error(e)}))}function F(e,t){A.src=e,B.textContent=t,A.alt=t,n(g)}Promise.all([fetch(a.baseUrl+"/users/me",{method:"GET",headers:a.headers}).then((function(e){return s(e)})),fetch(a.baseUrl+"/cards",{method:"GET",headers:a.headers}).then((function(e){return s(e)}))]).then((function(e){var t=e[0],n=e[1];M=t._id,m.textContent=t.name,h.textContent=t.about,S.src=t.avatar,n.reverse().forEach((function(e){G[e._id]=e,V(e,F,z,I)}))})).catch((function(e){return console.error(e)})),v.addEventListener("click",(function(){p.value=m.textContent,_.value=h.textContent,b.textContent="Сохранить",c(l,H),n(l)})),f.addEventListener("click",(function(){o(l)})),d.addEventListener("submit",(function(e){var t,n;e.preventDefault(),b.disabled="disabled",b.classList.add(H.inactiveButtonClass),b.textContent="Сохранение...",(t=p.value,n=_.value,fetch(a.baseUrl+"/users/me",{method:"PATCH",headers:a.headers,body:JSON.stringify({name:t,about:n})}).then((function(e){return s(e)}))).then((function(e){m.textContent=e.name,h.textContent=e.about,o(l)})).catch((function(e){return console.error(e)}))})),U.addEventListener("click",(function(){o(g)})),x.addEventListener("click",(function(){L.value="",C.value="",c(q,H),n(q)})),k.addEventListener("click",(function(){return o(q)})),N.addEventListener("click",(function(){P.value="",O.textContent="Сохранить",c(T,H),n(T)})),w.addEventListener("click",(function(){return o(T)})),D.addEventListener("submit",(function(e){var t;e.preventDefault(),O.disabled="disabled",O.classList.add(H.inactiveButtonClass),O.textContent="Сохранение...",(t=P.value,fetch(a.baseUrl+"/users/me/avatar",{method:"PATCH",headers:a.headers,body:JSON.stringify({avatar:t})}).then((function(e){return s(e)}))).then((function(e){j.src=e.avatar,o(T)})).catch((function(e){return console.error(e)}))})),E.addEventListener("submit",(function(e){var t,n;e.preventDefault(),(t=L.value,n=C.value,fetch(a.baseUrl+"/cards",{method:"POST",headers:a.headers,body:JSON.stringify({name:t,link:n})}).then((function(e){return s(e)}))).then((function(e){G[e._id]=e,V(e,F,z,I),o(q),L.value="",C.value=""})).catch((function(e){return console.error(e)}))})),y.forEach((function(e){return function(e){e.addEventListener("mousedown",(function(t){t.target.classList.contains("popup")&&o(e)}))}(e)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){return e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(t.submitButtonSelector);i(n,o,t),n.forEach((function(r){r.addEventListener("input",(function(){(function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?u(e,t,n):function(e,t,n,o){var r=e.querySelector(".".concat(t.name,"-error"));t.classList.add(o.inputErrorClass),r.textContent=n,r.classList.add(o.errorClass)}(e,t,t.validationMessage,n)})(e,r,t),i(n,o,t)}))}))}(t,e)}))}(H)})();