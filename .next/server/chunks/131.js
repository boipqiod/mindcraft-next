"use strict";
exports.id = 131;
exports.ids = [131];
exports.modules = {

/***/ 3131:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _utils_Requester__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1118);
/* harmony import */ var _types_api_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(850);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_Requester__WEBPACK_IMPORTED_MODULE_0__]);
_utils_Requester__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


class AuthService {
    static async register(email, password, nickname, imageUrl) {
        const data = {
            email: email,
            password: password,
            nickname: nickname,
            url: imageUrl
        };
        return await _utils_Requester__WEBPACK_IMPORTED_MODULE_0__/* .Requester */ .l.instance.request(_types_api_config__WEBPACK_IMPORTED_MODULE_1__/* .APIConfig */ .cO.auth.register, data);
    }
    static async signIn(email, password) {
        const data = {
            email: email,
            password: password
        };
        return await _utils_Requester__WEBPACK_IMPORTED_MODULE_0__/* .Requester */ .l.instance.request(_types_api_config__WEBPACK_IMPORTED_MODULE_1__/* .APIConfig */ .cO.auth.signIn, data);
    }
    static async requestCode(email) {
        const data = {
            email: email
        };
        return await _utils_Requester__WEBPACK_IMPORTED_MODULE_0__/* .Requester */ .l.instance.request(_types_api_config__WEBPACK_IMPORTED_MODULE_1__/* .APIConfig */ .cO.auth.requestCode, data);
    }
    static async requestCodeSubmit(email, code) {
        const data = {
            email: email,
            code: code
        };
        return await _utils_Requester__WEBPACK_IMPORTED_MODULE_0__/* .Requester */ .l.instance.request(_types_api_config__WEBPACK_IMPORTED_MODULE_1__/* .APIConfig */ .cO.auth.requestCodeSubmit, data);
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;