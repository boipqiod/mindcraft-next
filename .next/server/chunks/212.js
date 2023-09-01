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

/***/ 3523:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ AuthProvider),
/* harmony export */   V: () => (/* binding */ AuthContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const init = {
    auth: false,
    setAuth: ()=>{}
};
const AuthContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext(init);
const AuthProvider = ({ children })=>{
    const [auth, setAuth] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{}, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: {
            auth,
            setAuth
        },
        children: children
    });
};


/***/ }),

/***/ 5740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ TestProvider),
/* harmony export */   x: () => (/* binding */ TestContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_dummy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8541);



const TestContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext(undefined);
const TestProvider = ({ children })=>{
    const [testItemList, setTestItemList] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([
        ..._utils_dummy__WEBPACK_IMPORTED_MODULE_2__/* .dummy */ .jX
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TestContext.Provider, {
        value: {
            testItemList,
            setTestItemList
        },
        children: children
    });
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
            md: "720px"
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
                    md: "540px"
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
/* harmony import */ var _hooks_utils_usePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(856);
/* harmony import */ var _context_AuthProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3523);
/* harmony import */ var _types_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3484);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__]);
_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const NavigationBar = ()=>{
    const { auth, setAuth } = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(_context_AuthProvider__WEBPACK_IMPORTED_MODULE_5__/* .AuthContext */ .V);
    const { toMain, toSignIn } = (0,_hooks_utils_usePage__WEBPACK_IMPORTED_MODULE_4__/* .usePage */ .q)();
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
                        setAuth(false);
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
        bg: _types_common__WEBPACK_IMPORTED_MODULE_6__/* .colors */ .O.primary,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 5,
        zIndex: 10,
        w: "100%",
        maxW: 720,
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
/* harmony import */ var _context_TestProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5740);
/* harmony import */ var _context_AuthProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3523);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_favicon_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8860);
/* harmony import */ var _assets_demo_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7061);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layout_AppLayout__WEBPACK_IMPORTED_MODULE_2__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__]);
([_layout_AppLayout__WEBPACK_IMPORTED_MODULE_2__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.extendTheme)({
    breakpoints: {
        sm: "300px",
        md: "720px"
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
const MyApp = ({ Component, pageProps })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ChakraProvider, {
        theme: theme,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_context_TestProvider__WEBPACK_IMPORTED_MODULE_4__/* .TestProvider */ .o, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_context_AuthProvider__WEBPACK_IMPORTED_MODULE_5__/* .AuthProvider */ .H, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_AppLayout__WEBPACK_IMPORTED_MODULE_2__/* .AppLayout */ .L, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {
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
                                    content: "website"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                                    rel: "icon",
                                    href: `${_assets_favicon_png__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.src}`
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                    property: "og:image",
                                    content: _assets_demo_jpg__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.src
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
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 8541:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  jX: () => (/* binding */ dummy),
  u2: () => (/* binding */ dummyBest),
  _B: () => (/* binding */ testDetialDummy)
});

;// CONCATENATED MODULE: ./src/assets/demo1.png
/* harmony default export */ const demo1 = ({"src":"/_next/static/media/demo1.38a6969a.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/AADQ/4Klz5RYT5p4glVCT0grLVlXYJLI7gBw2P5mborGkoblurlWJy4AAAA4EgCGs9IAZtP0V1FlwJqX8dLKtJSUY05UHAAALpS9AKnM31Y8Se7g3fjq5//t6synqQAAAHOPogCRv9InAADLtbX2y8rw0c6eeHxCAABOdZAAlMLVZDlOQgs037ey252VcCEgQisyTWJxAK3O3kcvLVs/d9+urPS7qI5fegAAAE5fcgCyvdBZJj/Oo8j52c7sz9prSH5AGgBOM1om62DJFEbL8AAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/assets/demo2.png
/* harmony default export */ const demo2 = ({"src":"/_next/static/media/demo2.1fc1f7bd.png","height":557,"width":315,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAIAAAC+k6JsAAAAb0lEQVR42g2MWw7DIAzAcv/DTdO0reNVKASSEFjVGxTJX5ZlIFKROcbV9WQZgM7X91O2l3we0jrkTN7uNYQUosgfWtOCPdZZmzIPcDb+7GHy3L5uteDD4X1Smc4lRAGiwTwRuzF7KQzrsVg2xkKkN6wharoNSBbMAAAAAElFTkSuQmCC","blurWidth":5,"blurHeight":8});
;// CONCATENATED MODULE: ./src/assets/demo3.png
/* harmony default export */ const demo3 = ({"src":"/_next/static/media/demo3.0a09305b.png","height":4961,"width":7016,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAIAAABxZ0isAAAAk0lEQVR42gXAQA6CIJ7ToVmb2pzJMCQEFRWpNJszjfTSat6qg2934PX4FZjHWESkYL4IkapEOQ8jeOtZhplikkHG3UiFaUKkCijoSi2zYb0yyM5skpgjeM1uVd4C00Inj3V+/tHTWN85RO2lH5sJOFsT21638b7635+f0LBpoARMAbIcfKxjWpWEuPYh8ilDzLH2CxkeK1qHxqfeAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./src/assets/demo4.png
/* harmony default export */ const demo4 = ({"src":"/_next/static/media/demo4.3e1c3d01.png","height":1194,"width":2122,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42mNIyC9vnTzX3su7praxt7/dJ9TAyFZL00SZIS6/snHSvMjUnO7e/rUrluQXxZs4quqa6jJE5pRX9MysbGpfvXLl4b07J/S3Bcb627hbM0QX16dVFJU11i9cMO3Q3p3LlixIzE3Ss1JiCMlK84/3CIjxcfGSmzy5uaenzspNW8dcDwCZQjLxQnzJdAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./src/assets/demo5.png
/* harmony default export */ const demo5 = ({"src":"/_next/static/media/demo5.91d340c5.png","height":1706,"width":3032,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAgklEQVR42mOwtQu1NPeztXa3d/S0d3JxcHZzcPV0cPVicA/PCc9rdE+udPDPsvdKsHcNtbVxs7NxYoion5rSNiWouNUjtdYxqca7pDuoeqJHag2Da2Ccs3e4k5u/e3Ccs0+og3docHlnYvc8BnsXPwf3ACCyc/YBkvYuvnYOXj5RaQBqMidJB76UeAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./src/assets/demo6.png
/* harmony default export */ const demo6 = ({"src":"/_next/static/media/demo6.89002ed9.png","height":1800,"width":2880,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAcklEQVR42gUAWwoCIXBGXZxZXPooOlQ/naGjV0QUREbiax1d8HS+eH877I/353umSWtDk6qtmZ9/LZh2BNcSQmytD2dNWav6fB8dLaAmZlCaiGKDKmjSPweOMZWSMyKKCAxBHMqynckiDCIGAGZenBPpGzjoNn0WHjQ5AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./src/assets/demo7.png
/* harmony default export */ const demo7 = ({"src":"/_next/static/media/demo7.f95edca2.png","height":1440,"width":3440,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAIAAAAhqtkfAAAAVklEQVR42gFLALT/AHR2d6urq5ycnaenqLCzs62wsKinp2FhYgClpKTp6OjPzs7j4eH6+fn39fXh3996enoAlpWV09LSvLq6zszN4uDc393bzMvLcG9vSMUzrlu7PEYAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":3});
;// CONCATENATED MODULE: ./src/assets/demo8.png
/* harmony default export */ const demo8 = ({"src":"/_next/static/media/demo8.eb4189c8.png","height":363,"width":1003,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAIAAAAhqtkfAAAASklEQVR42g3JSwqAMAxF0e5/dSIi6FRnTZ9QSAZpPmZ2L6cBYObMHGOIiLtXqGr7gPoCIppzmlnvJCwtrzuAyLTjDOZYy7bdn/cHDzVEQ9vNG00AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":3});
;// CONCATENATED MODULE: ./src/assets/demo9.png
/* harmony default export */ const demo9 = ({"src":"/_next/static/media/demo9.fb11d9ed.png","height":1080,"width":1920,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAeUlEQVR42gUAyw2CMPT9SgOt2MSLhoMmDuESDuEiTutFDyrSmEJbKMHr7V4AkYgJNXMII1cMSuTxeipcXNsClSFNh/2xiChIBIxxzo0sIU6NZom+0+JI0cZaNs5U+nI+CdmvT773VkgM5G3NlOdu5wrI/zPUit79bwVsGylYrUmAtwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./src/assets/demo10.png
/* harmony default export */ const demo10 = ({"src":"/_next/static/media/demo10.ffff2bfd.png","height":4400,"width":6800,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAQlBMVEWt186q2NCo19Cn18+o1s+n1s6n1c6p1Mym1c6l1c2k1c6k1c2l1M2k1M6k1M2j1M2j1Myj08yi08yqycqfycaaysj4PutUAAAALklEQVR42gVAhxEAEAx8JboPwf6rOpgmkoswCVqlLox5s1IK+jvwkQWSXBub9gEpcgHASAGGEwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./src/utils/dummy.ts










const dummyBest = [
    {
        id: 10,
        title: "커뮤니케이션 스킬 테스트",
        playedCount: 500,
        sharedCount: 35,
        description: "커뮤니케이션 능력을 평가해보세요.",
        url: demo4.src,
        userId: 110
    },
    {
        id: 7,
        title: "리더십 스타일 테스트",
        playedCount: 350,
        sharedCount: 25,
        description: "당신의 리더십 스타일을 파악해보세요.",
        url: demo2.src,
        userId: 107
    },
    {
        id: 17,
        title: "자기계발 의지 테스트",
        playedCount: 350,
        sharedCount: 25,
        description: "자기계발에 대한 당신의 의지를 확인해보세요.",
        url: demo9.src,
        userId: 117
    },
    {
        id: 16,
        title: "팀워크 능력 테스트",
        playedCount: 400,
        sharedCount: 30,
        description: "팀에서의 역할과 능력을 알아보세요.",
        url: demo3.src,
        userId: 116
    }
];
const dummy = [
    {
        id: 1,
        title: "성격 유형 테스트",
        playedCount: 150,
        sharedCount: 10,
        description: "당신의 성격 유형을 알아보세요.당신의 성격 유형을 알아보세요.당신의 성격 유형을 알아보세요.당신의 성격 유형을 알아보세요.당신의 성격 유형을 알아보세요.당신의 성격 유형을 알아보세요.당신의 성격 유형을 알아보세요.당신의 성격 유형을 알아보세요.당신의 성격 유형을 알아보세요.당신의 성격 유형을 알아보세요.당신의 성격 유형을 알아보세요.당신의 성격 유형을 알아보세요.당신의 성격 유형을 알아보세요.당신의 성격 유형을 알아보세요.당신의 성격 유형을 알아보세요.당신의 성격 유형을 알아보세요.",
        url: demo5.src,
        userId: 101
    },
    {
        id: 2,
        title: "직업 적성 테스트",
        playedCount: 300,
        sharedCount: 25,
        description: "당신에게 어울리는 직업은 무엇일까요?",
        url: demo3.src,
        userId: 102
    },
    {
        id: 3,
        title: "사랑 언어 테스트",
        playedCount: 200,
        sharedCount: 15,
        description: "당신의 사랑 언어를 찾아보세요.",
        url: demo8.src,
        userId: 103
    },
    {
        id: 4,
        title: "스트레스 지수 테스트",
        playedCount: 250,
        sharedCount: 20,
        description: "당신의 스트레스 수준을 확인해보세요.",
        url: demo1.src,
        userId: 104
    },
    {
        id: 5,
        title: "인간관계 유형 테스트",
        playedCount: 100,
        sharedCount: 5,
        description: "인간관계에서의 당신의 유형은?",
        url: demo7.src,
        userId: 105
    },
    {
        id: 6,
        title: "창의력 테스트",
        playedCount: 400,
        sharedCount: 30,
        description: "당신의 창의력 수준을 알아보세요.",
        url: demo10.src,
        userId: 106
    },
    {
        id: 7,
        title: "리더십 스타일 테스트",
        playedCount: 350,
        sharedCount: 25,
        description: "당신의 리더십 스타일을 파악해보세요.",
        url: demo2.src,
        userId: 107
    },
    {
        id: 8,
        title: "가족 관계 테스트",
        playedCount: 275,
        sharedCount: 18,
        description: "가족과의 관계 유형을 알아보세요.",
        url: demo6.src,
        userId: 108
    },
    {
        id: 9,
        title: "자기 통제 능력 테스트",
        playedCount: 325,
        sharedCount: 22,
        description: "자기 통제 능력을 진단해보세요.",
        url: demo9.src,
        userId: 109
    },
    {
        id: 10,
        title: "커뮤니케이션 스킬 테스트",
        playedCount: 500,
        sharedCount: 35,
        description: "커뮤니케이션 능력을 평가해보세요.",
        url: demo4.src,
        userId: 110
    },
    {
        id: 11,
        title: "감정 지능 테스트",
        playedCount: 150,
        sharedCount: 10,
        description: "감정 지능 수준을 확인해보세요.",
        url: demo2.src,
        userId: 111
    },
    {
        id: 12,
        title: "시간 관리 능력 테스트",
        playedCount: 300,
        sharedCount: 25,
        description: "시간 관리 능력을 진단해보세요.",
        url: demo6.src,
        userId: 112
    },
    {
        id: 13,
        title: "건강 생활 습관 테스트",
        playedCount: 200,
        sharedCount: 15,
        description: "건강한 생활 습관을 가지고 계신가요?",
        url: demo10.src,
        userId: 113
    },
    {
        id: 14,
        title: "자기 사랑 테스트",
        playedCount: 250,
        sharedCount: 20,
        description: "자기 자신을 얼마나 사랑하고 있나요?",
        url: demo5.src,
        userId: 114
    },
    {
        id: 15,
        title: "결정력 테스트",
        playedCount: 100,
        sharedCount: 5,
        description: "당신의 결정력을 평가해보세요.",
        url: demo8.src,
        userId: 115
    },
    {
        id: 16,
        title: "팀워크 능력 테스트",
        playedCount: 400,
        sharedCount: 30,
        description: "팀에서의 역할과 능력을 알아보세요.",
        url: demo3.src,
        userId: 116
    },
    {
        id: 17,
        title: "자기계발 의지 테스트",
        playedCount: 350,
        sharedCount: 25,
        description: "자기계발에 대한 당신의 의지를 확인해보세요.",
        url: demo9.src,
        userId: 117
    },
    {
        id: 18,
        title: "긍정 사고 테스트",
        playedCount: 275,
        sharedCount: 18,
        description: "긍정적인 사고를 가지고 계신가요?",
        url: demo1.src,
        userId: 118
    },
    {
        id: 19,
        title: "취미 적합도 테스트",
        playedCount: 325,
        sharedCount: 22,
        description: "당신에게 어울리는 취미를 찾아보세요.",
        url: demo4.src,
        userId: 119
    },
    {
        id: 20,
        title: "인생 가치관 테스트",
        playedCount: 500,
        sharedCount: 35,
        description: "인생에서 중요하게 생각하는 가치관은 무엇인가요?",
        url: demo7.src,
        userId: 120
    }
];
const testDetialDummy = [
    {
        step: 1,
        text: "당신이 밥을 먹을 때는?",
        answers: [
            {
                text: "급하게 먹는다.",
                resultIndex: 0
            },
            {
                text: "천천히 먹는다.",
                resultIndex: 1
            }
        ]
    },
    {
        step: 2,
        text: "주말에는 보통 무엇을 하시나요?",
        answers: [
            {
                text: "친구와 만나 놀기",
                resultIndex: 0
            },
            {
                text: "집에서 쉬기",
                resultIndex: 1
            }
        ]
    },
    {
        step: 3,
        text: "새로운 기술을 배울 때 나는?",
        answers: [
            {
                text: "빠르게 시도해보려 한다.",
                resultIndex: 0
            },
            {
                text: "주변 지원을 받아가며 천천히 익힌다.",
                resultIndex: 1
            }
        ]
    },
    {
        step: 4,
        text: "여행 가기 전에 나는?",
        answers: [
            {
                text: "세부 일정을 정확하게 짜놓는 편이다.",
                resultIndex: 0
            },
            {
                text: "대략적인 계획만 세우고 자유롭게 다니는 편이다.",
                resultIndex: 1
            }
        ]
    },
    {
        step: 5,
        text: "스트레스를 받았을 때 나의 해소 방법은?",
        answers: [
            {
                text: "운동하거나 외출하여 스트레스를 푼다.",
                resultIndex: 0
            },
            {
                text: "독서나 명상을 통해 스트레스를 해소한다.",
                resultIndex: 1
            }
        ]
    }
];


/***/ })

};
;