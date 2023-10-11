import { useAuth } from "@/hooks/useAuth";
import { usePage } from "@/hooks/utils/usePage";
import { logout } from "@/redux/auth/authAction";
import StorageUtil from "@/utils/StorageUtil";

export const useNavigation = () => {
    const { auth, authDispatch, user } = useAuth();
    const { toMain, toSignIn, toCreate } = usePage();

    const signOut = () => {
        authDispatch(logout());
        StorageUtil.removeToken();
        alert("로그아웃 되었습니다.");
        toMain().then();
    };

    return {
        auth,
        toCreate,
        toSignIn,
        toMain,
        signOut,
        user
    };
};
