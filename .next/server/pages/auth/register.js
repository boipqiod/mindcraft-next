"use strict";
(() => {
var exports = {};
exports.id = 461;
exports.ids = [461,660];
exports.modules = {

/***/ 4288:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),
/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),
/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),
/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3185);
/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5244);
/* harmony import */ var next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7182);
/* harmony import */ var next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2940);
/* harmony import */ var next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9212);
/* harmony import */ var private_next_pages_auth_register_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5161);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__, private_next_pages_auth_register_tsx__WEBPACK_IMPORTED_MODULE_5__]);
([private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__, private_next_pages_auth_register_tsx__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_auth_register_tsx__WEBPACK_IMPORTED_MODULE_5__, "default"));
// Re-export methods.
const getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_auth_register_tsx__WEBPACK_IMPORTED_MODULE_5__, "getStaticProps");
const getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_auth_register_tsx__WEBPACK_IMPORTED_MODULE_5__, "getStaticPaths");
const getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_auth_register_tsx__WEBPACK_IMPORTED_MODULE_5__, "getServerSideProps");
const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_auth_register_tsx__WEBPACK_IMPORTED_MODULE_5__, "config");
const reportWebVitals = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_auth_register_tsx__WEBPACK_IMPORTED_MODULE_5__, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_auth_register_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_auth_register_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_auth_register_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticParams");
const unstable_getServerProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_auth_register_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerProps");
const unstable_getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_auth_register_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.PAGES,
        page: "/auth/register",
        pathname: "/auth/register",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__["default"],
        Document: (next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3___default())
    },
    userland: private_next_pages_auth_register_tsx__WEBPACK_IMPORTED_MODULE_5__
});

//# sourceMappingURL=pages.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9660:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ useRegister)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
/* harmony import */ var _utils_FromUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5978);
/* harmony import */ var _utils_usePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(856);
/* harmony import */ var _service_AuthService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3131);
/* harmony import */ var _utils_Logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4121);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _service_AuthService__WEBPACK_IMPORTED_MODULE_3__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _service_AuthService__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const steps = [
    {
        description: "이메일 인증"
    },
    {
        description: "인증 번호 입력"
    },
    {
        description: "기타 정보 입력"
    }
];
const useRegister = ()=>{
    const { activeStep, setActiveStep } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useSteps)({
        index: 0,
        count: steps.length
    });
    const { toMain } = (0,_utils_usePage__WEBPACK_IMPORTED_MODULE_2__/* .usePage */ .q)();
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [emailCode, setEmailCode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [passwordCheck, setPasswordCheck] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [nickname, setNickname] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [loadingEmailCode, setLoadingEmailCode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [loadingEmailCodeSubmit, setLoadingEmailCodeSubmit] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [loadingRegister, setLoadingRegister] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const toNextStep = ()=>{
        setActiveStep((prevActiveStep)=>prevActiveStep + 1);
    };
    const requestCodeSend = ()=>{
        const validEmail = _utils_FromUtil__WEBPACK_IMPORTED_MODULE_5__/* .FromUtil */ .b.instance.checkEmail(email);
        if (!validEmail) {
            alert("이메일 형식이 올바르지 않습니다.");
            return;
        }
        //TODO: 이메일 인증 코드 전송
        setLoadingEmailCode(true);
        //인증 코드 입력창 보이기
        toNextStep();
        setLoadingRegister(false);
    };
    const requestCodeSubmit = (value)=>{
        //TODO: 이메일 인증 코드 확인 요청
        setLoadingEmailCodeSubmit(true);
        _utils_Logger__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.info(value);
        //다음 단계로 이동
        toNextStep();
        setLoadingEmailCodeSubmit(false);
    };
    const requestRegister = async ()=>{
        const validPassword = _utils_FromUtil__WEBPACK_IMPORTED_MODULE_5__/* .FromUtil */ .b.instance.checkPassword(password);
        if (!validPassword) {
            alert("비밀번호 형식이 올바르지 않습니다.");
            return;
        }
        if (password !== passwordCheck) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }
        const validNickname = _utils_FromUtil__WEBPACK_IMPORTED_MODULE_5__/* .FromUtil */ .b.instance.checkNickname(nickname);
        const validNickname1 = _utils_FromUtil__WEBPACK_IMPORTED_MODULE_5__/* .FromUtil */ .b.instance.checkNickname("nickname");
        const validNickname2 = _utils_FromUtil__WEBPACK_IMPORTED_MODULE_5__/* .FromUtil */ .b.instance.checkNickname("1234");
        const validNickname3 = _utils_FromUtil__WEBPACK_IMPORTED_MODULE_5__/* .FromUtil */ .b.instance.checkNickname("닉네임");
        const validNickname4 = _utils_FromUtil__WEBPACK_IMPORTED_MODULE_5__/* .FromUtil */ .b.instance.checkNickname("닉네임112");
        _utils_Logger__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.info(validNickname, validNickname1, validNickname2, validNickname3, validNickname4);
        if (!validNickname) {
            alert("닉네임 형식이 올바르지 않습니다. (2~10자)");
            return;
        }
        setLoadingRegister(true);
        const res = await _service_AuthService__WEBPACK_IMPORTED_MODULE_3__/* .AuthService */ .e.requestCode(email);
        setLoadingRegister(false);
        if (res.isSuccess) {
            _utils_Logger__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.info(email, emailCode, password, nickname, image);
            toMain();
        } else {
            alert(`회원가입 실패: ${res.message}`);
        }
    };
    const handleEmailChange = (e)=>{
        setEmail(e.target.value);
    };
    const handleEmailCodeChange = (e)=>{
        setEmailCode(e.target.value);
    };
    const handlePasswordChange = (e)=>{
        setPassword(e.target.value);
    };
    const handlePasswordCheckChange = (e)=>{
        setPasswordCheck(e.target.value);
    };
    const handleNicknameChange = (e)=>{
        setNickname(e.target.value);
    };
    const handleImageChange = (e)=>{
        setImage(e.target.value);
    };
    return {
        email,
        emailCode,
        activeStep,
        setActiveStep,
        steps,
        nickname,
        image,
        password,
        passwordCheck,
        requestCodeSend,
        requestCodeSubmit,
        handleEmailChange,
        handleEmailCodeChange,
        handlePasswordChange,
        requestRegister,
        handlePasswordCheckChange,
        handleNicknameChange,
        handleImageChange,
        loadingEmailCode,
        loadingEmailCodeSubmit,
        loadingRegister
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5161:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Register: () => (/* binding */ Register),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9660);
/* harmony import */ var _types_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3484);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _hooks_useRegister__WEBPACK_IMPORTED_MODULE_3__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _hooks_useRegister__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function Register() {
    const register = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_3__/* .useRegister */ .m)();
    const activeStepText = register.steps[register.activeStep].description;
    const firstStep = ()=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
                isRequired: true,
                width: "80%",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {
                        children: "이메일"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                        placeholder: "mindcraft@example.com",
                        mb: 3,
                        type: "email",
                        value: register.email,
                        onChange: register.handleEmailChange
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                        width: "100%",
                        color: "white",
                        bg: _types_common__WEBPACK_IMPORTED_MODULE_4__/* .colors */ .O.key,
                        onClick: register.requestCodeSend,
                        isLoading: register.loadingEmailCode,
                        children: "인증 메일 발송"
                    })
                ]
            })
        });
    };
    const secondStep = ()=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                isRequired: true,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {
                        children: "인증 번호"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.PinInput, {
                            onComplete: register.requestCodeSubmit,
                            isDisabled: register.loadingEmailCodeSubmit,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.PinInputField, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.PinInputField, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.PinInputField, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.PinInputField, {})
                            ]
                        })
                    })
                ]
            })
        });
    };
    const thirdStep = ()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
                    width: "full",
                    justifyContent: "space-between",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                            width: "55%",
                            display: "flex",
                            alignItems: "center",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
                                isRequired: true,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {
                                        children: "비밀번호"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                        placeholder: "비밀번호",
                                        mb: 3,
                                        type: "password",
                                        value: register.password,
                                        onChange: register.handlePasswordChange
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                        placeholder: "비밀번호 확인",
                                        mb: 3,
                                        type: "password",
                                        value: register.passwordCheck,
                                        onChange: register.handlePasswordCheckChange
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {
                                        children: "닉네임"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                        placeholder: "닉네임",
                                        mb: 3,
                                        type: "text",
                                        value: register.nickname,
                                        onChange: register.handleNicknameChange
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                            width: "40%",
                            display: "flex",
                            alignItems: "center",
                            height: "full",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {
                                        boxSize: "full",
                                        children: [
                                            "프로필 이미지",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                                src: "gibbresh.png",
                                                fallbackSrc: "https://via.placeholder.com/150"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                        hidden: true,
                                        type: "file",
                                        accept: "image/*",
                                        value: register.image,
                                        onChange: register.handleImageChange
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                    width: "100%",
                    color: "white",
                    bg: _types_common__WEBPACK_IMPORTED_MODULE_4__/* .colors */ .O.key,
                    onClick: register.requestRegister,
                    isLoading: register.loadingRegister,
                    children: "회원 가입 요청"
                })
            ]
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
        maxW: "400px",
        width: "80%",
        height: "80%",
        mx: "auto",
        my: "8vh",
        direction: "column",
        alignItems: "center",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                width: "100%",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        width: "100%",
                        textAlign: "center",
                        children: activeStepText
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stepper, {
                        size: "sm",
                        index: register.activeStep,
                        gap: "1",
                        children: register.steps.map((step, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Step, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.StepIndicator, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.StepStatus, {
                                            complete: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.StepIcon, {})
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.StepSeparator, {})
                                ]
                            }, index))
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                width: "full",
                textAlign: "center",
                my: 30,
                children: "회원 가입"
            }),
            register.activeStep === 0 ? firstStep() : register.activeStep === 1 ? secondStep() : register.activeStep === 2 ? thirdStep() : null
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Register);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5978:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ FromUtil)
/* harmony export */ });
class FromUtil {
    static get instance() {
        if (!FromUtil._instance) {
            FromUtil._instance = new FromUtil();
        }
        return FromUtil._instance;
    }
    constructor(){}
    checkEmail(email) {
        const emailRegExp = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        return emailRegExp.test(email);
    }
    checkPassword(password) {
        const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return passwordRegExp.test(password);
    }
    checkNickname(nickname) {
        // 길이 체크 (2~10자)
        if (nickname.length < 2 || nickname.length > 10) return false;
        else if (/^\d+$/.test(nickname)) return false;
        else if (/[^가-힣a-zA-Z0-9]/.test(nickname)) return false;
        return true;
    }
    checkNumber(number) {
        const numberRegExp = /^[0-9]*$/;
        return numberRegExp.test(number);
    }
}


/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2210:
/***/ ((module) => {

module.exports = import("@chakra-ui/react");;

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [940,815,212,131], () => (__webpack_exec__(4288)));
module.exports = __webpack_exports__;

})();