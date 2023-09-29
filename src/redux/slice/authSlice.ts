import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
    id: number;
    email: string;
    nickname: string;
    imageUrl: string;
};

type authState = {
    isAuthenticated: boolean;
    user: User | null;
};

type authReducer = {
    login: (state: authState, action: PayloadAction<User>) => void;
    logout: (state: authState) => void;
};

export const authSlice = createSlice<authState, authReducer>({
    name: "auth",
    initialState: {
        isAuthenticated: false,
        user: null
    },
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        }
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
