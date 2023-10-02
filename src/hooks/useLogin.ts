import React from "react";
import { usePage } from "./utils/usePage";
import { AuthService } from "@/service/AuthService";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { User } from "@/types/common";
import { login, logout } from "@/redux/auth/authAction";

export const useLogin = () => {
    const dispatch = useDispatch<AppDispatch>();
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

    const [showPassword, setShowPassword] = React.useState(false);
    const { toMain } = usePage();

    const [form, setForm] = React.useState({
        email: "",
        password: ""
    });

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const signIn = async () => {
        const res = await AuthService.signIn(form.email, form.password);
        if (res.isSuccess && res.data) {
            const user: User = {
                email: form.email,
                id: res.data.id,
                nickname: res.data.nickname,
                imageUrl: res.data.imageUrl
            };

            dispatch(login(user));
            await toMain();
        } else {
            alert(`아이디와 비밀번호를 확인해주세요.`);
        }
    };

    const signOut = () => {
        dispatch(logout());
        toMain().then();
    };

    return {
        showPassword,
        isAuthenticated,

        handleInputChange,
        handleClickShowPassword,
        signIn,
        signOut
    };
};
