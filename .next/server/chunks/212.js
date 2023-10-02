"use strict";
exports.id = 212;
exports.ids = [212];
exports.modules = {

/***/ 7061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/demo.b66c3078.jpg","height":1787,"width":2965,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAwX/2gAMAwEAAhADEAAAAJRDf//EABoQAQABBQAAAAAAAAAAAAAAAAERAAMjU+H/2gAIAQEAAT8AzQg2STX2v//EABgRAAIDAAAAAAAAAAAAAAAAAAAEAQJT/9oACAECAQE/AIda2sf/xAAZEQABBQAAAAAAAAAAAAAAAAAAAgMTU5H/2gAIAQMBAT8AharTh//Z","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ 8860:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/favicon.3a45a216.png","height":96,"width":96,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA5klEQVR42j1PyWoCQRTs3+l8QojJ78RzlnMwh0SEkIWEaDCDK0rP9LgMLoiHmQ/Qo4oe1KM4LiBKNy2lPYIFBcVbqCqiMXcvqePE3CT/kZpaz70relp6IWpY74uwkcBdNoX7XAq3R/1/nPneDSWW/ey+cIbOcCAy7QaSTQfd0UDEyhwmj7gkYX7JiFmEUgo7IbDZbaERLXH8sg8ZHDyxAoSU8NcrzJYLqL3Cq20hzj5lYBG1TfQmY2G0aojXy+hPJ+KtYoNpC98LXZxC/uEhl8ZjPoPwOeQ1PdesBjW/paauqR8JIeQAfvutqmo28FwAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 7324:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/mindcraft_logo.9bef8d7f.png","height":100,"width":924,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAHklEQVR4nGP89+/fIQYGhqdAzA7EP6GYA4g/A/FvAKyiCJIfnvE0AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":1});

/***/ }),

/***/ 856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ usePage)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);

const usePage = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
    return {
        async toBack () {
            router.back();
        },
        async toMain () {
            await router.push("/");
        },
        async toDetail (id) {
            await router.push(`/detail/${id}`);
        },
        async toPlaying (id) {
            await router.push(`/detail/${id}/play`);
        },
        async toSignIn () {
            await router.push("/auth/login");
        },
        async toRegister () {
            await router.push("/auth/register");
        },
        async toUser () {
            await router.push("/auth/user");
        },
        async toCreate () {
            await router.push("/create");
        }
    };
};


/***/ }),

/***/ 399:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ AppLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2210);
/* harmony import */ var _NavigationBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4478);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__, _NavigationBar__WEBPACK_IMPORTED_MODULE_3__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__, _NavigationBar__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const AppLayout = ({ children })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
        width: {
            base: "100vw",
            md: "800px"
        },
        m: "0 auto",
        bg: "white",
        position: "relative",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavigationBar__WEBPACK_IMPORTED_MODULE_3__/* .NavigationBar */ .v, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                padding: 5,
                width: {
                    base: "95vw",
                    md: "720px"
                },
                m: "0 auto",
                pt: {
                    base: "60px",
                    md: "80px"
                },
                children: children
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4478:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ NavigationBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2210);
/* harmony import */ var _assets_mindcraft_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7324);
/* harmony import */ var _types_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3484);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_auth_authAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9593);
/* harmony import */ var _hooks_utils_usePage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(856);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__]);
_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const NavigationBar = ()=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
    const auth = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.auth.isAuthenticated);
    const { toMain, toSignIn } = (0,_hooks_utils_usePage__WEBPACK_IMPORTED_MODULE_6__/* .usePage */ .q)();
    const MenuItems = ()=>{
        return auth ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.MenuList, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
                    children: "마이 페이지"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
                    children: "테스트 만들기"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
                    onClick: ()=>{
                        dispatch((0,_redux_auth_authAction__WEBPACK_IMPORTED_MODULE_7__/* .logout */ .k)());
                    },
                    children: "로그아웃"
                })
            ]
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.MenuList, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
                onClick: toSignIn,
                children: "로그인"
            })
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
        pos: "fixed",
        bg: _types_common__WEBPACK_IMPORTED_MODULE_4__/* .colors */ .O.primary,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 5,
        zIndex: 10,
        w: "100%",
        maxW: 800,
        h: {
            base: "40px",
            md: "60px"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
                width: 150,
                objectFit: "scale-down",
                src: _assets_mindcraft_logo_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.src,
                alt: "logo",
                onClick: toMain,
                cursor: "pointer"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.MenuButton, {
                        boxSize: 10,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Avatar, {
                            width: "100%",
                            height: "100%",
                            src: "https://bit.ly/broken-link"
                        })
                    }),
                    MenuItems()
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9212:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(399);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2210);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_favicon_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8860);
/* harmony import */ var _assets_demo_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7061);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1159);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layout_AppLayout__WEBPACK_IMPORTED_MODULE_2__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__]);
([_layout_AppLayout__WEBPACK_IMPORTED_MODULE_2__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.extendTheme)({
    breakpoints: {
        sm: "300px",
        md: "800px"
    },
    styles: {
        global: {
            html: {
                fontSize: "14px",
                backgroundColor: "#d9d9d9",
                display: "flex",
                justifyContent: "center",
                minHeight: "100vh"
            },
            body: {
                margin: "0",
                padding: "0"
            }
        }
    }
});
const APP = ({ Component, pageProps })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ChakraProvider, {
        theme: theme,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_7__.Provider, {
            store: _redux_store__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_AppLayout__WEBPACK_IMPORTED_MODULE_2__/* .AppLayout */ .L, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                                children: "MindCraft"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                name: "description",
                                content: "MindCraft is a web application that allows you to create test and share them with your friends!"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                property: "og:description",
                                content: "MindCraft is a web application that allows you to create test and share them with your friends!"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                name: "viewport",
                                content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                name: "theme-color",
                                content: "#80A9A3"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                property: "og:type",
                                content: "wap"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                                rel: "icon",
                                href: `${_assets_favicon_png__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.src}`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                property: "og:image",
                                content: _assets_demo_jpg__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.src
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                                rel: "manifest",
                                href: "/manifest.json"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (APP);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9923:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ LOGOUT),
/* harmony export */   y: () => (/* binding */ LOGIN)
/* harmony export */ });
//회원 관련
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";


/***/ }),

/***/ 9593:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ logout),
/* harmony export */   x: () => (/* binding */ login)
/* harmony export */ });
/* harmony import */ var _redux_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9923);

const login = (user)=>{
    return {
        type: _redux_actionTypes__WEBPACK_IMPORTED_MODULE_0__/* .LOGIN */ .y,
        payload: user
    };
};
const logout = ()=>{
    return {
        type: _redux_actionTypes__WEBPACK_IMPORTED_MODULE_0__/* .LOGOUT */ .N
    };
};


/***/ }),

/***/ 1159:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ redux_store)
});

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(6695);
// EXTERNAL MODULE: ./src/redux/actionTypes.ts
var actionTypes = __webpack_require__(9923);
;// CONCATENATED MODULE: ./src/redux/auth/authReducer.ts

const initialState = {
    isAuthenticated: false,
    user: null
};
const authReducer = (state = initialState, action)=>{
    switch(action.type){
        case actionTypes/* LOGIN */.y:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload
            };
        case actionTypes/* LOGOUT */.N:
            return {
                ...state,
                isAuthenticated: false,
                user: null
            };
        default:
            return state;
    }
};
/* harmony default export */ const auth_authReducer = (authReducer);

;// CONCATENATED MODULE: ./src/redux/store.ts


const rootReducer = (0,external_redux_.combineReducers)({
    auth: auth_authReducer
});
const store = (0,external_redux_.createStore)(rootReducer);
/* harmony default export */ const redux_store = (store);


/***/ }),

/***/ 3484:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ colors)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var colors;
(function(colors) {
    colors["primary"] = "#80A9A3";
    colors["key"] = "#F5C31F";
})(colors || (colors = {}));


/***/ })

};
;