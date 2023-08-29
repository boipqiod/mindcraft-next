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
    static async register(email, password, nickname, image) {
        const data = {
            email: email,
            password: password,
            nickname: nickname,
            image: image
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
    static async requestCodeSubmit(code) {
        const data = {
            code: code
        };
        return await _utils_Requester__WEBPACK_IMPORTED_MODULE_0__/* .Requester */ .l.instance.request(_types_api_config__WEBPACK_IMPORTED_MODULE_1__/* .APIConfig */ .cO.auth.requestCodeSubmit, data);
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WP: () => (/* binding */ httpContentType),
/* harmony export */   cO: () => (/* binding */ APIConfig),
/* harmony export */   o6: () => (/* binding */ httpMethod)
/* harmony export */ });
var httpMethod;
(function(httpMethod) {
    httpMethod["get"] = "get";
    httpMethod["post"] = "post";
    httpMethod["put"] = "put";
    httpMethod["delete"] = "delete";
})(httpMethod || (httpMethod = {}));
var httpContentType;
(function(httpContentType) {
    httpContentType["json"] = "application/json";
    httpContentType["form"] = "multipart/form-data";
})(httpContentType || (httpContentType = {}));
var APIConfig;
(function(APIConfig) {
    let auth;
    (function(auth) {
        var signIn = auth.signIn = {
            method: httpMethod.post,
            url: "/auth/sign-in"
        };
        var register = auth.register = {
            method: httpMethod.post,
            url: "/auth/register",
            contentType: httpContentType.form
        };
        var requestCode = auth.requestCode = {
            method: httpMethod.post,
            url: "/auth/request-code"
        };
        var requestCodeSubmit = auth.requestCodeSubmit = {
            method: httpMethod.post,
            url: "/auth/request-code-submit"
        };
    })(auth = APIConfig.auth || (APIConfig.auth = {}));
    let test;
    (function(test) {
        var getTestList = test.getTestList = {
            method: httpMethod.get,
            url: "/mindTestes"
        };
        var getTestDetail = test.getTestDetail = {
            method: httpMethod.get,
            url: "/mindTestes/:id"
        };
        var createTest = test.createTest = {
            method: httpMethod.post,
            url: "/mindTest"
        };
    })(test = APIConfig.test || (APIConfig.test = {}));
})(APIConfig || (APIConfig = {}));


/***/ }),

/***/ 3118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ APIResponse)
/* harmony export */ });
class APIResponse {
    constructor(code, message, data){
        this.statusCode = code;
        this.message = message;
        this.data = data;
        this.isSuccess = code === 200;
        this.isError = code !== 200;
        this.isTokenExpired = code === 401 || code === 403;
    }
}


/***/ }),

/***/ 4121:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Logger)
/* harmony export */ });
class Logger {
    static log(...args) {
        if (this.isDebug()) console.log(...args);
    }
    static info(...args) {
        if (this.isDebug()) console.info(...args);
    }
    static warn(...args) {
        if (this.isDebug()) console.warn(...args);
    }
    static error(...args) {
        if (this.isDebug()) console.error(...args);
    }
    static{
        this.isDebug = ()=>{
            return "production" === "development";
        };
    }
}


/***/ }),

/***/ 1118:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ Requester)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _types_api_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(850);
/* harmony import */ var _types_api_response__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3118);
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4121);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




class Requester {
    static get instance() {
        if (!Requester._instance) Requester._instance = new Requester();
        return Requester._instance;
    }
    constructor(){
        this.setConfig = (apiConfig, data)=>{
            let url = apiConfig.url;
            //URL Placeholder 적용
            const _data = data;
            if (_data) {
                for (const [key, value] of Object.entries(_data)){
                    if (url.includes(`:${key}`)) {
                        url = url.replace(`:${key}`, value);
                        delete _data[key];
                    }
                }
            }
            const config = {
                method: apiConfig.method,
                url: url
            };
            //get 일때 prams 로 셋팅
            if (apiConfig.method === _types_api_config__WEBPACK_IMPORTED_MODULE_1__/* .httpMethod */ .o6.get) config.params = _data;
            else if (apiConfig.contentType === _types_api_config__WEBPACK_IMPORTED_MODULE_1__/* .httpContentType */ .WP.form) config.data = this.transToFromData(_data);
            else config.data = _data;
            return config;
        };
        this.request = async (apiConfig, data)=>{
            const config = this.setConfig(apiConfig, data);
            try {
                const response = await this.axios.request(config);
                const res = new _types_api_response__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z(response.data.statusCode, response.data.message, response.data.data);
                if (res.isError) {
                    this.failLog(config, data, response.data);
                } else {
                    this.successLog(config, data, res);
                }
                return res;
            } catch (error) {
                let e;
                let message;
                let status = 5050;
                // 서버 응답 에러 (status code가 2xx가 아닌 경우)
                if (error.response) {
                    e = error.response;
                    status = error.response.status;
                    message = "http 응답 실패";
                // 요청이 전송되었으나 응답이 없는 경우 (네트워크 에러 등)
                } else if (error.request) {
                    e = error.request;
                    message = "응답 없음";
                // 그 외에 발생한 에러
                } else {
                    e = error.message;
                    message = "에러 메시지 확인";
                    status = 5051;
                }
                const res = new _types_api_response__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z(status, message);
                this.errorLog(apiConfig, data, e, res);
                return res;
            }
        };
        this.transToFromData = (data)=>{
            const formData = new FormData();
            for(const key in data){
                const _data = data[key];
                if (typeof _data === "string" || _data instanceof Blob || _data instanceof File) {
                    formData.set(key, _data);
                } else if (Array.isArray(_data)) {
                    for (const item of _data){
                        if (typeof item === "string" || item instanceof Blob || item instanceof File) {
                            formData.set(key, item);
                        }
                    }
                } else if (_data !== null && _data !== undefined) {
                    formData.set(key, String(_data));
                }
            }
            console.log(formData);
            return formData;
        };
        this.errorLog = (config, body, error, data)=>{
            _Logger__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.error("\n====REQUEST====", "\nBaseUrl\n", process.env.REACT_APP_API_BASE_URL, "\napiConfig\n", config, "\nbody\n", body, "\n\n=====ERROR=====", "\ndata\n", data, "\nerror\n", error);
        };
        this.failLog = (config, body, data)=>{
            _Logger__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.warn("\n====REQUEST====", "\nBaseUrl\n", process.env.REACT_APP_API_BASE_URL, "\napiConfig\n", config, "\nbody\n", body, "\n\n=====ERROR=====", "\nResponse\n", data);
        };
        this.successLog = (config, body, data)=>{
            _Logger__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.log("\n====REQUEST====", "\nBaseUrl\n", process.env.REACT_APP_API_BASE_URL, "\napiConfig\n", config, "\nbody\n", body, "\n\n====RESPONSE====\n", data);
        };
        this.axios = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
            baseURL: `${process.env.REACT_APP_API_BASE_URL}`
        });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;