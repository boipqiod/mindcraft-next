(() => {
var exports = {};
exports.id = 417;
exports.ids = [417,660];
exports.modules = {

/***/ 9583:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var private_next_pages_create_index_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9120);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__, private_next_pages_create_index_tsx__WEBPACK_IMPORTED_MODULE_5__]);
([private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__, private_next_pages_create_index_tsx__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_create_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "default"));
// Re-export methods.
const getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_create_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "getStaticProps");
const getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_create_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "getStaticPaths");
const getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_create_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "getServerSideProps");
const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_create_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "config");
const reportWebVitals = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_create_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_create_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_create_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_create_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticParams");
const unstable_getServerProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_create_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerProps");
const unstable_getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_create_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.PAGES,
        page: "/create",
        pathname: "/create",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__["default"],
        Document: (next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3___default())
    },
    userland: private_next_pages_create_index_tsx__WEBPACK_IMPORTED_MODULE_5__
});

//# sourceMappingURL=pages.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6925:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ KeyButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
/* harmony import */ var _types_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3484);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__]);
_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const KeyButton = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
        width: props.width ?? "100%",
        color: "white",
        bg: _types_common__WEBPACK_IMPORTED_MODULE_2__/* .colors */ .O.key,
        onClick: props.onClick,
        isLoading: props.isLoading,
        mb: 3,
        children: props.text
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4068:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useCreate)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_AnimationUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7793);


const useCreate = ()=>{
    const [step, setStep] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const [basicInfo, setBasicInfo] = react__WEBPACK_IMPORTED_MODULE_0___default().useState({
        title: "",
        description: "",
        image: "",
        resultCount: 3,
        queryCount: 3,
        answerCount: 2
    });
    //결과 정보
    const [resultItems, setResultItems] = react__WEBPACK_IMPORTED_MODULE_0___default().useState([]);
    //질문 정보
    const [queryItems, setQueryItems] = react__WEBPACK_IMPORTED_MODULE_0___default().useState([]);
    const [resultShowIndex, setResultShowIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const [queryShowIndex, setQueryShowIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{}, []);
    const basicInfoNext = ()=>{
        //TODO: 기본 정보 검증
        initResultItems();
        initQueryItems();
        setStep((prevState)=>prevState + 1);
    };
    const resultNext = ()=>{
        //TODO: 결과 정보 검증
        setStep((prevState)=>prevState + 1);
    };
    const submit = ()=>{
        //TODO : 질문 정보 검증
        console.log("basicInfo", basicInfo);
        console.log("resultItems", resultItems);
        console.log("queryItems", queryItems);
    };
    /**** 초기화 함수 ***/ const initResultItems = ()=>{
        const items = [];
        for(let i = 0; i < basicInfo.resultCount; i++){
            items.push({
                title: "",
                description: "",
                image: ""
            });
        }
        setResultItems(items);
    };
    const initQueryItems = ()=>{
        const items = [];
        for(let i = 0; i < basicInfo.queryCount; i++){
            items.push({
                step: i + 1,
                text: "",
                answers: []
            });
        }
        items.map((queryItem)=>{
            for(let i = 0; i < basicInfo.answerCount; i++){
                queryItem.answers.push({
                    text: "",
                    resultIndex: 0
                });
            }
        });
        setQueryItems(items);
    };
    /**** 이벤트 핸들러 ****/ const handleBasicInfoInput = (e)=>{
        const value = e.target.value;
        setBasicInfo((prev)=>{
            console.log(basicInfo);
            const newInfo = {
                ...prev
            };
            switch(e.target.id){
                case "title":
                    newInfo.title = value;
                    break;
                case "description":
                    newInfo.description = value;
                    break;
                case "image":
                    const target = e.target;
                    const file = target.files?.[0];
                    if (file) {
                        const reader = new FileReader();
                        reader.onloadend = ()=>{
                            setBasicInfo((prev)=>({
                                    ...prev,
                                    image: reader.result
                                }));
                        };
                        reader.readAsDataURL(file);
                    }
                    break;
                case "result-count":
                    let resultCount = Number(value.at(value.length - 1));
                    if (resultCount < 3) resultCount = 3;
                    if (resultCount > 5) resultCount = 5;
                    newInfo.resultCount = resultCount;
                    break;
                case "query-count":
                    let queryCount = Number(value.at(value.length - 1));
                    if (queryCount < 3) queryCount = 3;
                    if (queryCount > 5) queryCount = 5;
                    newInfo.queryCount = queryCount;
                    break;
                case "answer-count":
                    let answerCount = Number(value.at(value.length - 1));
                    if (answerCount < 2) answerCount = 2;
                    if (answerCount > 4) answerCount = 4;
                    newInfo.answerCount = answerCount;
                    break;
            }
            return newInfo;
        });
    };
    const handleResultItemInput = (e)=>{
        const _index = e.target.dataset.index;
        const index = Number(_index);
        const value = e.target.value;
        setResultItems((prev)=>{
            const newItems = [
                ...prev
            ];
            switch(e.target.id){
                case "result-item-title":
                    newItems[index].title = value;
                    break;
                case "result-item-image":
                    const target = e.target;
                    const file = target.files?.[0];
                    if (file) {
                        const reader = new FileReader();
                        reader.onloadend = ()=>{
                            newItems[index].image = reader.result;
                            setResultItems(newItems);
                        };
                        reader.readAsDataURL(file);
                    }
                    break;
            }
            return newItems;
        });
    };
    const handleQueryItemInput = (e)=>{
        const _index = e.target.dataset.index;
        const index = Number(_index);
        const value = e.target.value;
        setQueryItems((prev)=>{
            const newItems = [
                ...prev
            ];
            switch(e.target.id){
                case "query-item-text":
                    newItems[index].text = value;
                    break;
                case "query-item-answer":
                    newItems[queryShowIndex].answers[index].text = value;
                    break;
                case "query-item-result":
                    newItems[queryShowIndex].answers[index].resultIndex = Number(value);
                    break;
            }
            console.log(newItems);
            return newItems;
        });
    };
    const handleResultHtmlInput = (value)=>{
        setResultItems((prev)=>{
            const newItems = [
                ...prev
            ];
            newItems[resultShowIndex].description = value;
            return newItems;
        });
    };
    /**** 기타 함수 ****/ const setResultScroll = async (index)=>{
        setResultShowIndex(index);
        await new Promise((resolve)=>setTimeout(resolve, 0)); // 상태 업데이트를 기다림
        const target = document.getElementById("result-item-list");
        if (!target) {
            console.error("Element not found");
            return;
        }
        await _utils_AnimationUtil__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.smoothScroll(target, target.offsetWidth * index, 0, 300);
    };
    const setQueryScroll = async (index)=>{
        setQueryShowIndex(index);
        await new Promise((resolve)=>setTimeout(resolve, 0)); // 상태 업데이트를 기다림
        const target = document.getElementById("query-item-list");
        if (!target) {
            console.error("Element not found");
            return;
        }
        await _utils_AnimationUtil__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.smoothScroll(target, target.offsetWidth * index, 0, 300);
    };
    return {
        basicInfo,
        resultItems,
        queryItems,
        handleBasicInfoInput,
        handleResultItemInput,
        handleQueryItemInput,
        handleResultHtmlInput,
        resultShowIndex,
        setResultScroll,
        queryShowIndex,
        setQueryScroll,
        step,
        basicInfoNext,
        resultNext,
        submit
    };
};


/***/ }),

/***/ 9120:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Create: () => (/* binding */ Create),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6134);
/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2586);
/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_quill__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1791);
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useCreate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4068);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_common_KeyButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6925);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__, _components_common_KeyButton__WEBPACK_IMPORTED_MODULE_7__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__, _components_common_KeyButton__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const Create = ()=>{
    const hook = (0,_hooks_useCreate__WEBPACK_IMPORTED_MODULE_5__/* .useCreate */ .R)();
    const basicInfo = ()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                            direction: {
                                base: "column",
                                md: "row"
                            },
                            w: "full",
                            alignItems: "flex-start",
                            mb: {
                                base: 5,
                                md: 10
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                                    m: 2,
                                    w: "full",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                            fontSize: "lg",
                                            children: "테스트 제목"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                            id: "title",
                                            onChange: hook.handleBasicInfoInput,
                                            value: hook.basicInfo.title,
                                            placeholder: "심리테스트 제목을 입력해주세요."
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                            fontSize: "lg",
                                            children: "테스트 설명"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Textarea, {
                                            id: "description",
                                            onChange: hook.handleBasicInfoInput,
                                            value: hook.basicInfo.description,
                                            rows: 12,
                                            placeholder: "심리테스트에 대한 설명을 입력해주세요."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                                    m: 2,
                                    w: "full",
                                    alignItems: "flex-start",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                            fontSize: "lg",
                                            children: "테스트 이미지"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {
                                            w: "full",
                                            aspectRatio: 3 / 4,
                                            borderRadius: 4,
                                            bg: "gray.200",
                                            children: [
                                                hook.basicInfo.image !== "" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                                    w: "full",
                                                    h: "full",
                                                    objectFit: "cover",
                                                    borderRadius: 4,
                                                    src: hook.basicInfo.image,
                                                    alt: "심리테스트 이미지"
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                                    w: "full",
                                                    h: "full",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    textAlign: "center",
                                                    color: "gray.400",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                                        children: [
                                                            "이미지를 업로드해주세요.",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                            "(3:4 비율 권장)"
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                                    id: "image",
                                                    onChange: hook.handleBasicInfoInput,
                                                    hidden: true,
                                                    type: "file",
                                                    accept: "image/*"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                            w: "full",
                            direction: {
                                base: "column",
                                md: "row"
                            },
                            mb: {
                                base: 5,
                                md: 10
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                                    w: "full",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                                    children: "결과 수"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
                                                    mx: 10,
                                                    label: "테스트 진행 후 사용자에게 보여질 수 있는 결과 수 입니다.(3~5개)",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__.InfoOutlineIcon, {})
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                            "aria-label": "테스트 결과 수",
                                            id: "result-count",
                                            onChange: hook.handleBasicInfoInput,
                                            value: hook.basicInfo.resultCount,
                                            placeholder: "결과 수 (3~5개)",
                                            type: "number",
                                            max: 5,
                                            min: 3
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                                    w: "full",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                                    children: "질문 수"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
                                                    mx: 10,
                                                    label: "사용자가 진행할 질문 수입니다. (3~5개)",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__.InfoOutlineIcon, {})
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                            id: "query-count",
                                            onChange: hook.handleBasicInfoInput,
                                            value: hook.basicInfo.queryCount,
                                            placeholder: "질문 수",
                                            type: "number",
                                            max: 5,
                                            min: 3
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                                    w: "full",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                                    children: "응답 수"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
                                                    mx: 10,
                                                    label: "사용자가 진행할 질문의 대답의 수입니다. (2~4개)",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__.InfoOutlineIcon, {})
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                            id: "answer-count",
                                            onChange: hook.handleBasicInfoInput,
                                            value: hook.basicInfo.answerCount,
                                            placeholder: "질문 수",
                                            type: "number",
                                            max: 4,
                                            min: 2
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_KeyButton__WEBPACK_IMPORTED_MODULE_7__/* .KeyButton */ .d, {
                    onClick: hook.basicInfoNext,
                    text: "다음"
                })
            ]
        });
    };
    const result = ()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
                    mb: 10,
                    children: hook.resultItems.map((item, index)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tag, {
                            onClick: ()=>hook.setResultScroll(index),
                            cursor: "pointer",
                            colorScheme: hook.resultShowIndex === index ? "blue" : "gray",
                            children: index + 1
                        }, index);
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                    width: "full",
                    overflow: "hidden",
                    id: "result-item-list",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                        direction: "row",
                        w: `calc(100% * ${hook.resultItems.length})`,
                        alignItems: "flex-start",
                        mb: {
                            base: 5,
                            md: 10
                        },
                        children: hook.resultItems.map((item, index)=>{
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                                // hidden={hook.resultShowIndex !== index}
                                id: `result-item-${index}`,
                                w: "100%",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        fontSize: "lg",
                                        children: "결과 이름"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                        id: "result-item-title",
                                        onChange: hook.handleResultItemInput,
                                        "data-index": index,
                                        value: hook.resultItems[index]?.title,
                                        placeholder: "심리테스트 제목을 입력해주세요.",
                                        mb: 5
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        fontSize: "lg",
                                        children: "결과 이미지"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                        mb: 5,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {
                                            m: "auto",
                                            maxW: {
                                                base: "full",
                                                md: "200px"
                                            },
                                            aspectRatio: 3 / 4,
                                            borderRadius: 4,
                                            bg: "gray.200",
                                            children: [
                                                hook.basicInfo.image !== "" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                                    w: "full",
                                                    h: "full",
                                                    objectFit: "cover",
                                                    borderRadius: 4,
                                                    src: hook.resultItems[index]?.image,
                                                    alt: "심리테스트 이미지"
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                                    w: "full",
                                                    h: "full",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    textAlign: "center",
                                                    color: "gray.400",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                                        children: [
                                                            "이미지를 업로드해주세요.",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                            "(3:4 비율 권장)"
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                                    id: "result-item-image",
                                                    onChange: hook.handleResultItemInput,
                                                    hidden: true,
                                                    type: "file",
                                                    accept: "image/*",
                                                    "data-index": index
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        fontSize: "lg",
                                        children: "테스트 설명"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_quill__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        value: hook.resultItems[index]?.description,
                                        "data-index": hook.resultShowIndex,
                                        onChange: hook.handleResultHtmlInput
                                    })
                                ]
                            }, index);
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_KeyButton__WEBPACK_IMPORTED_MODULE_7__/* .KeyButton */ .d, {
                    onClick: hook.resultNext,
                    text: "다음"
                })
            ]
        });
    };
    const question = ()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
                    mb: 10,
                    children: hook.queryItems.map((item, index)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tag, {
                            onClick: ()=>hook.setQueryScroll(index),
                            cursor: "pointer",
                            colorScheme: hook.queryShowIndex === index ? "blue" : "gray",
                            children: index + 1
                        }, index);
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                    width: "full",
                    overflow: "hidden",
                    id: "query-item-list",
                    sx: {
                        "&::-webkit-scrollbar": {
                            display: "none"
                        },
                        scrollbarWidth: "none",
                        msOverflowStyle: "none"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                        direction: "row",
                        w: `calc(100% * ${hook.resultItems.length})`,
                        alignItems: "flex-start",
                        mb: {
                            base: 5,
                            md: 10
                        },
                        children: hook.resultItems.map((item, index)=>{
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                                // hidden={hook.resultShowIndex !== index}
                                id: `result-item-${index}`,
                                w: "100%",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        fontSize: "lg",
                                        children: "질문"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                        id: "query-item-text",
                                        onChange: hook.handleQueryItemInput,
                                        "data-index": index,
                                        value: hook.queryItems[index]?.text,
                                        placeholder: "질문의 내용을 작성해주세요",
                                        mb: 5
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        fontSize: "lg",
                                        children: "답변 / 영향을 주는 결과"
                                    }),
                                    hook.queryItems[index]?.answers.map((answer, answerIndex)=>{
                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                                            w: "full",
                                            direction: "row",
                                            alignItems: "center",
                                            mb: 5,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                                    id: "query-item-answer",
                                                    onChange: hook.handleQueryItemInput,
                                                    "data-index": answerIndex,
                                                    value: hook.queryItems[index]?.answers[answerIndex]?.text,
                                                    placeholder: "질문의 내용을 작성해주세요"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Select, {
                                                    id: "query-item-result",
                                                    onChange: hook.handleQueryItemInput,
                                                    "data-index": answerIndex,
                                                    children: hook.resultItems.map((item, index)=>{
                                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                            value: index,
                                                            children: item.title
                                                        }, index);
                                                    })
                                                })
                                            ]
                                        }, answerIndex);
                                    })
                                ]
                            }, index);
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_KeyButton__WEBPACK_IMPORTED_MODULE_7__/* .KeyButton */ .d, {
                    onClick: hook.submit,
                    text: "제출"
                })
            ]
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
        height: "80%",
        w: "full",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                fontSize: "3xl",
                mb: 5,
                children: "생성하기"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                children: hook.step === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: basicInfo()
                }) : hook.step === 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: result()
                }) : hook.step === 2 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: question()
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Create);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1791:
/***/ (() => {



/***/ }),

/***/ 3076:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 2586:
/***/ ((module) => {

"use strict";
module.exports = require("react-quill");

/***/ }),

/***/ 6134:
/***/ ((module) => {

"use strict";
module.exports = import("@chakra-ui/icons");;

/***/ }),

/***/ 2210:
/***/ ((module) => {

"use strict";
module.exports = import("@chakra-ui/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [940,815,212,793], () => (__webpack_exec__(9583)));
module.exports = __webpack_exports__;

})();