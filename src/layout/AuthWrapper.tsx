import React, { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import StorageUtil from "@/utils/StorageUtil";
import { AuthService } from "@/service/AuthService";
import { login } from "@/redux/auth/authAction";

export const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
    const [loading, setLoading] = React.useState(true);
    const { auth, authDispatch } = useAuth();

    useEffect(() => {
        //이미 로그인 중이라면
        if (auth) {
            setLoading(false);
            return;
        }

        const token = StorageUtil.getToken();
        //토큰이 없다면
        if (!token) {
            setLoading(false);
            return;
        }

        //토큰 검증
        AuthService.validateToken(token).then((res) => {
            if (res.isSuccess && res.data) {
                authDispatch(
                    login({
                        token: token,
                        id: res.data.id,
                        email: res.data.email,
                        username: res.data.username,
                        imageUrl: res.data.profileImageUrl
                    })
                );
            } else if (res.isTokenExpired) {
                StorageUtil.removeToken();
                alert("로그인이 만료되었습니다. 다시 로그인해주세요.");
            } else {
                StorageUtil.removeToken();
                alert(`토큰 인증에 실패했습니다. 다시 로그인해주세요. ${res.message}`);
            }
            setLoading(false);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <>{loading ? <></> : children}</>;
};
