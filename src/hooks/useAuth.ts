import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";

export const useAuth = () => {
    const authDispatch = useDispatch<AppDispatch>();
    const auth = useSelector((state: RootState) => state.auth.isAuthenticated);
    const user = useSelector((state: RootState) => state.auth.user);

    return {
        authDispatch,
        auth,
        user
    };
};
