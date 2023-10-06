import React, { useState } from "react";
import { useSteps } from "@chakra-ui/react";
import { FromUtil } from "@/utils/FromUtil";
import { usePage } from "./utils/usePage";
import { AuthService } from "@/service/AuthService";
import Logger from "../utils/Logger";

const steps = [{ description: "이메일 인증" }, { description: "인증 번호 입력" }, { description: "기타 정보 입력" }];

type registerForm = {
    email: string;
    emailCode: string;
    password: string;
    passwordCheck: string;
    username: string;
    image?: string;
};

type loadings = {
    loadingEmailCode: boolean;
    loadingEmailCodeSubmit: boolean;
    loadingRegister: boolean;
};

export const useRegister = () => {
    const { activeStep, setActiveStep } = useSteps({
        index: 0,
        count: steps.length
    });

    const { toMain } = usePage();

    const [form, setForm] = useState<registerForm>({
        email: "",
        emailCode: "",
        password: "",
        passwordCheck: "",
        username: "",
        image: ""
    });

    const [loadings, setLoadings] = useState<loadings>({
        loadingEmailCode: false,
        loadingEmailCodeSubmit: false,
        loadingRegister: false
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.name, e.target.value);
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file = e.target.files[0];

            //파일 용량 체크
            if (file.size > 1024 * 1024 * 10) {
                alert("파일 용량이 너무 큽니다. (10MB 이하)");
                return;
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                setForm({ ...form, image: reader.result as string });
            };
            reader.readAsDataURL(file);
        }
    };

    const toNextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);

    const requestCodeSend = () => {
        const validEmail = FromUtil.instance.checkEmail(form.email);
        if (!validEmail) {
            alert("이메일 형식이 올바르지 않습니다.");
            return;
        }
        //TODO: 이메일 인증 코드 전송
        setLoadings((prevState) => ({ ...prevState, loadingEmailCode: true }));
        //인증 코드 입력창 보이기
        toNextStep();
        setLoadings((prevState) => ({ ...prevState, loadingEmailCode: false }));
    };

    const requestCodeSubmit = (value: string) => {
        //TODO: 이메일 인증 코드 확인 요청
        setLoadings((prevState) => ({ ...prevState, loadingEmailCodeSubmit: true }));
        Logger.info(value);
        //다음 단계로 이동
        toNextStep();
        setLoadings((prevState) => ({ ...prevState, loadingEmailCodeSubmit: false }));
    };

    const requestRegister = async () => {
        const validPassword = FromUtil.instance.checkPassword(form.password);
        if (!validPassword) {
            alert("비밀번호 형식이 올바르지 않습니다.");
            return;
        }
        if (form.password !== form.passwordCheck) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }
        const validNickname = FromUtil.instance.checkNickname(form.username);

        if (!validNickname) {
            alert("닉네임 형식이 올바르지 않습니다. (2~10자)");
            return;
        }

        setLoadings((prevState) => ({ ...prevState, loadingRegister: true }));
        const res = await AuthService.register(form.email, form.password, form.username, form.image);
        if (res.isSuccess) {
            await toMain();
        } else {
            alert(`회원가입 실패: ${res.message}`);
        }
    };
    return {
        form,
        handleInputChange,
        handleImageChange,

        activeStep,
        setActiveStep,
        steps,

        requestCodeSend,
        requestCodeSubmit,
        requestRegister,

        loadings
    };
};
