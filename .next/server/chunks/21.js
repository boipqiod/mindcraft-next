"use strict";
exports.id = 21;
exports.ids = [21];
exports.modules = {

/***/ 2410:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/i-play-g.24f64c85.png","height":30,"width":30,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAVUlEQVR42kWNywmAMBBEx0P6sC7rEPY1pDctRezBLgxJxEEiy+7CYz5ioXExSVIkBtHCw8Yo00KjUqJxM0tWeLPvYWCU/U9FfS3RLV3B/oWy/rUkhgepW0TxUpUC5gAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 8090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/i-share-g.0d5a2b24.png","height":30,"width":30,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAZklEQVR42k2Nuw2DYBgD/YUkcyRLRMoWbPMf7wYqlkCMAg3QsAaPJZAQCK6zZfkkYRJPqbTItMcDetpir16ph0/FRBN44ucWRpz7nsM/KwOOj07Cd2b41Mw0yeN+2tFGpksbW27SBp+KIIpILNk/AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 1693:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ ContItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__]);
_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const ContItem = (src, count)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                h: "8px",
                src: src
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                children: count
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9081:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ useShare)
/* harmony export */ });
const useShare = ()=>{
    const share = async (title, url)=>{
        if (navigator.share) {
            navigator.share({
                title,
                url
            }).then(()=>console.log("성공적으로 공유되었습니다.")).catch((error)=>console.log("공유 중 오류가 발생했습니다.", error));
        } else {
            await navigator.clipboard.writeText(url);
            alert("url이 복사되었습니다!");
        }
    };
    return {
        share
    };
};


/***/ }),

/***/ 4870:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ TestService)
/* harmony export */ });
/* harmony import */ var _utils_Requester__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1118);
/* harmony import */ var _types_api_response__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3118);
/* harmony import */ var _types_api_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(850);
/* harmony import */ var _utils_dummy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8541);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_Requester__WEBPACK_IMPORTED_MODULE_0__]);
_utils_Requester__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




class TestService {
    static async getTestList() {
        return new _types_api_response__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z(200, "success", _utils_dummy__WEBPACK_IMPORTED_MODULE_2__/* .dummy */ .jX);
    // return await Requester.instance.request<undefined, response.test.testItem>(APIConfig.test.getTestList);
    }
    static async getTestDetail(id) {
        const item = _utils_dummy__WEBPACK_IMPORTED_MODULE_2__/* .dummy */ .jX.find((item)=>item.id === id);
        if (item) {
            return new _types_api_response__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z(200, "success", item);
        } else {
            return new _types_api_response__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z(404, "fail", undefined);
        }
    // const data: request.test.getTestDetail = {
    //     id: id
    // };
    // return await Requester.instance.request<typeof data, response.test.testItemDetail>(
    //     APIConfig.test.getTestDetail,
    //     data
    // );
    }
    static async createTest(title, description, query) {
        const data = {
            title: title,
            description: description,
            query: query
        };
        return await _utils_Requester__WEBPACK_IMPORTED_MODULE_0__/* .Requester */ .l.instance.request(_types_api_config__WEBPACK_IMPORTED_MODULE_1__/* .APIConfig */ .cO.test.createTest, data);
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;