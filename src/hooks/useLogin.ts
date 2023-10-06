import React from "react";
import { usePage } from "./utils/usePage";
import { AuthService } from "@/service/AuthService";
import { User } from "@/types/common";
import { login, logout } from "@/redux/auth/authAction";
import { useAuth } from "@/hooks/useAuth";

export const useLogin = () => {
    //커스텀 후 참조
    const { toMain } = usePage();
    const { auth, authDispatch, user } = useAuth();

    //지역 관리 상태
    const [showPassword, setShowPassword] = React.useState(false);
    const [form, setForm] = React.useState({
        email: "",
        password: ""
    });

    // 이벤트 핸들러
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    // 로그인/로그아웃 요청 함수
    const signIn = async () => {
        const res = await AuthService.signIn(form.email, form.password);
        if (res.isSuccess && res.data) {
            authDispatch(
                login({
                    email: form.email,
                    id: res.data.id,
                    nickname: res.data.nickname,
                    imageUrl: res.data.imageUrl
                })
            );
            await toMain();
        } else {
            alert(`아이디와 비밀번호를 확인해주세요.`);
        }
    };

    const signOut = async () => {
        authDispatch(logout());
        await toMain();
    };

    return {
        showPassword,
        auth,
        user,

        handleInputChange,
        handleClickShowPassword,
        signIn,
        signOut
    };
};
