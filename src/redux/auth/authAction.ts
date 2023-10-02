import { LOGIN, LOGOUT } from "@/redux/actionTypes";
import { User } from "@/types/common";

interface LoginAction {
    type: typeof LOGIN;
    payload: User;
}

interface LogoutAction {
    type: typeof LOGOUT;
}

export type AuthActionTypes = LoginAction | LogoutAction;

export const login = (user: User): LoginAction => {
    return {
        type: LOGIN,
        payload: user
    };
};

export const logout = (): LogoutAction => {
    return {
        type: LOGOUT
    };
};
