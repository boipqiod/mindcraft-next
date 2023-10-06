"use strict";
exports.id = 212;
exports.ids = [212];
exports.modules = {

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

/***/ 9094:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ useAuth)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

const useAuth = ()=>{
    const authDispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
    const auth = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)((state)=>state.auth.isAuthenticated);
    const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)((state)=>state.auth.user);
    return {
        authDispatch,
        auth,
        user
    };
};


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

/***/ 4075:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ AuthWrapper)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9094);
/* harmony import */ var _utils_StorageUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5430);
/* harmony import */ var _service_AuthService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3131);
/* harmony import */ var _redux_auth_authAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9593);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_service_AuthService__WEBPACK_IMPORTED_MODULE_4__]);
_service_AuthService__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const AuthWrapper = ({ children })=>{
    const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);
    const { auth, authDispatch } = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__/* .useAuth */ .a)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        //이미 로그인 중이라면
        if (auth) {
            setLoading(false);
            return;
        }
        const token = _utils_StorageUtil__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getToken();
        //토큰이 없다면
        if (!token) {
            setLoading(false);
            return;
        }
        //토큰 검증
        _service_AuthService__WEBPACK_IMPORTED_MODULE_4__/* .AuthService */ .e.validateToken(token).then((res)=>{
            if (res.isSuccess && res.data) {
                authDispatch((0,_redux_auth_authAction__WEBPACK_IMPORTED_MODULE_5__/* .login */ .x)({
                    token: token,
                    id: res.data.id,
                    email: res.data.email,
                    username: res.data.username,
                    imageUrl: res.data.profileImageUrl
                }));
            } else if (res.isTokenExpired) {
                _utils_StorageUtil__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.removeToken();
                alert("로그인이 만료되었습니다. 다시 로그인해주세요.");
            } else {
                _utils_StorageUtil__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.removeToken();
                alert(`토큰 인증에 실패했습니다. 다시 로그인해주세요. ${res.message}`);
            }
            setLoading(false);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}) : children
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
/* harmony import */ var _redux_auth_authAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9593);
/* harmony import */ var _hooks_utils_usePage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(856);
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9094);
/* harmony import */ var _utils_StorageUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5430);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__]);
_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const NavigationBar = ()=>{
    const { auth, authDispatch, user } = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_6__/* .useAuth */ .a)();
    const { toMain, toSignIn, toCreate } = (0,_hooks_utils_usePage__WEBPACK_IMPORTED_MODULE_5__/* .usePage */ .q)();
    const MenuItems = ()=>{
        return auth ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.MenuList, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
                    children: "마이 페이지"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
                    onClick: toCreate,
                    children: "테스트 만들기"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
                    onClick: ()=>{
                        authDispatch((0,_redux_auth_authAction__WEBPACK_IMPORTED_MODULE_8__/* .logout */ .k)());
                        _utils_StorageUtil__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.removeToken();
                        alert("로그아웃 되었습니다.");
                        toMain().then();
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
                            src: user?.imageUrl
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1159);
/* harmony import */ var _layout_AuthWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4075);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layout_AppLayout__WEBPACK_IMPORTED_MODULE_2__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__, _layout_AuthWrapper__WEBPACK_IMPORTED_MODULE_8__]);
([_layout_AppLayout__WEBPACK_IMPORTED_MODULE_2__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__, _layout_AuthWrapper__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









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
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_6__.Provider, {
            store: _redux_store__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_AppLayout__WEBPACK_IMPORTED_MODULE_2__/* .AppLayout */ .L, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                                children: "MindCraft"
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
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                                rel: "manifest",
                                href: "/manifest.json"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_AuthWrapper__WEBPACK_IMPORTED_MODULE_8__/* .AuthWrapper */ .c, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                            ...pageProps
                        })
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
const store = (0,external_redux_.legacy_createStore)(rootReducer);
/* harmony default export */ const redux_store = (store);


/***/ }),

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
    static async register(email, password, username, image) {
        const data = {
            email: email,
            password: password,
            username: username,
            profileImage: image
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
    static async validateToken(token) {
        const data = {
            token: token
        };
        return await _utils_Requester__WEBPACK_IMPORTED_MODULE_0__/* .Requester */ .l.instance.request(_types_api_config__WEBPACK_IMPORTED_MODULE_1__/* .APIConfig */ .cO.auth.validateToken, data);
    }
    static async checkUsername(username) {
        const data = {
            username: username
        };
        return await _utils_Requester__WEBPACK_IMPORTED_MODULE_0__/* .Requester */ .l.instance.request(_types_api_config__WEBPACK_IMPORTED_MODULE_1__/* .APIConfig */ .cO.auth.checkUsername, data);
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
            url: "/auth/login"
        };
        var register = auth.register = {
            method: httpMethod.post,
            url: "/user",
            contentType: httpContentType.form
        };
        var requestCode = auth.requestCode = {
            method: httpMethod.post,
            url: "/auth/email"
        };
        var requestCodeSubmit = auth.requestCodeSubmit = {
            method: httpMethod.post,
            url: "/auth/code"
        };
        var validateToken = auth.validateToken = {
            method: httpMethod.post,
            url: "/auth/token"
        };
        var checkUsername = auth.checkUsername = {
            method: httpMethod.get,
            url: "/user/username"
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
        this.isTokenExpired = code === 409;
    }
}


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
                let message;
                let status = 500;
                // 서버 응답 에러 (status code가 2xx가 아닌 경우)
                if (error.response) {
                    status = error.response.status;
                    message = "http 응답 실패";
                // 요청이 전송되었으나 응답이 없는 경우 (네트워크 에러 등)
                } else if (error.request) {
                    message = error.message;
                // 그 외에 발생한 에러
                } else {
                    message = error.message;
                    status = 501;
                }
                const res = new _types_api_response__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z(status, message);
                this.errorLog(apiConfig, data, error, res);
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
            // baseURL: `${process.env.REACT_APP_API_BASE_URL}`
            baseURL: `http://ec2-3-39-232-89.ap-northeast-2.compute.amazonaws.com:8080`
        });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5430:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ StorageUtil)
/* harmony export */ });
class StorageUtil {
    static{
        this.TOKEN = "token";
    }
    static setToken(token) {
        localStorage.setItem(StorageUtil.TOKEN, token);
    }
    static getToken() {
        return localStorage.getItem(StorageUtil.TOKEN);
    }
    static removeToken() {
        localStorage.removeItem(StorageUtil.TOKEN);
    }
}


/***/ })

};
;