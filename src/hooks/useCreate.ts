import React, { useEffect, useState } from "react";
import { MainTestBasicInfo, MindTestQueryItem, MindTestResultItem } from "@/types/common";
import AnimationUtil from "../utils/AnimationUtil";

type basicInfo = {
    title: string;
    description: string;
    image: string;
    resultCount: 3 | 4 | 5;
    queryCount: 3 | 4 | 5;
    answerCount: 2 | 3 | 4;
};

export const useCreate = () => {
    const [step, setStep] = useState(0);

    const [basicInfo, setBasicInfo] = React.useState<MainTestBasicInfo>({
        title: "",
        description: "",
        image: "",
        resultCount: 3,
        queryCount: 3,
        answerCount: 2
    });

    //결과 정보
    const [resultItems, setResultItems] = React.useState<MindTestResultItem[]>([]);

    //질문 정보
    const [queryItems, setQueryItems] = React.useState<MindTestQueryItem[]>([]);

    const [resultShowIndex, setResultShowIndex] = useState(0);
    const [queryShowIndex, setQueryShowIndex] = useState(0);

    useEffect(() => {}, []);

    const next = () => {
        switch (step) {
            case 0:
                basicInfoNext();
                break;
            case 1:
                resultNext();
                break;
            case 2:
                submit();
                break;
        }
    };

    const basicInfoNext = () => {
        //TODO: 기본 정보 검증

        initResultItems();
        initQueryItems();
        setStep((prevState) => prevState + 1);
    };

    const resultNext = () => {
        //TODO: 결과 정보 검증

        setStep((prevState) => prevState + 1);
    };

    const submit = () => {
        //TODO : 질문 정보 검증

        console.log("basicInfo", basicInfo);
        console.log("resultItems", resultItems);
        console.log("queryItems", queryItems);
    };

    /**** 초기화 함수 ***/
    const initResultItems = () => {
        const items: MindTestResultItem[] = [];
        for (let i = 0; i < basicInfo.resultCount; i++) {
            items.push({
                title: "",
                description: "",
                image: ""
            });
        }
        setResultItems(items);
    };

    const initQueryItems = () => {
        const items: MindTestQueryItem[] = [];
        for (let i = 0; i < basicInfo.queryCount; i++) {
            items.push({
                step: i + 1,
                text: "",
                answers: []
            });
        }

        items.map((queryItem) => {
            for (let i = 0; i < basicInfo.answerCount; i++) {
                queryItem.answers.push({
                    text: "",
                    resultIndex: 0
                });
            }
        });

        setQueryItems(items);
    };

    /**** 이벤트 핸들러 ****/
    const handleBasicInfoInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = e.target.value;
        setBasicInfo((prev) => {
            const newInfo = { ...prev };
            switch (e.target.name) {
                case "title":
                case "description":
                    newInfo[e.target.name] = value;
                    break;
                case "image":
                    const imageTarget = e.target as HTMLInputElement;
                    const file = imageTarget.files?.[0];
                    if (file) {
                        const reader = new FileReader();
                        reader.onloadend = () => {
                            setBasicInfo((prev) => ({
                                ...prev,
                                image: reader.result as string
                            }));
                        };
                        reader.readAsDataURL(file);
                    }
                    break;
                case "resultCount":
                case "queryCount":
                case "answerCount":
                    const numberTarget = e.target as HTMLInputElement;
                    const max = Number(numberTarget.max);
                    const min = Number(numberTarget.min);

                    let numberValue = Number(value);
                    if (numberValue > max) {
                        numberValue = max;
                    }
                    if (numberValue < min) {
                        numberValue = min;
                    }

                    newInfo[e.target.name] = numberValue as any;
            }

            return newInfo;
        });
    };

    const handleResultItemInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const _index = e.target.dataset.index;
        const index = Number(_index);

        const value = e.target.value;
        setResultItems((prev) => {
            const newItems = [...prev];
            switch (e.target.id) {
                case "result-item-title":
                    newItems[index].title = value;
                    break;
                case "result-item-image":
                    const target = e.target as HTMLInputElement;
                    const file = target.files?.[0];
                    if (file) {
                        const reader = new FileReader();
                        reader.onloadend = () => {
                            newItems[index].image = reader.result as string;
                            setResultItems(newItems);
                        };
                        reader.readAsDataURL(file);
                    }
                    break;
            }
            return newItems;
        });
    };

    const handleQueryItemInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const _index = e.target.dataset.index;
        const index = Number(_index);

        const value = e.target.value;
        setQueryItems((prev) => {
            const newItems = [...prev];
            switch (e.target.id) {
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

    const handleResultHtmlInput = (value: string) => {
        setResultItems((prev) => {
            const newItems = [...prev];
            newItems[resultShowIndex].description = value;
            return newItems;
        });
    };

    /**** 기타 함수 ****/
    const setResultScroll = async (index: number) => {
        setResultShowIndex(index);
        await new Promise((resolve) => setTimeout(resolve, 0)); // 상태 업데이트를 기다림

        const target = document.getElementById("result-item-list");
        if (!target) {
            console.error("Element not found");
            return;
        }

        await AnimationUtil.smoothScroll(target, target.offsetWidth * index, 0, 300);
    };

    const setQueryScroll = async (index: number) => {
        setQueryShowIndex(index);
        await new Promise((resolve) => setTimeout(resolve, 0)); // 상태 업데이트를 기다림

        const target = document.getElementById("query-item-list");
        if (!target) {
            console.error("Element not found");
            return;
        }

        await AnimationUtil.smoothScroll(target, target.offsetWidth * index, 0, 300);
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

        next
    };
};
