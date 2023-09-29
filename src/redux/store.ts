import { configureStore, Middleware } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";

const middleware: Middleware[] = [];

const store = configureStore({
    reducer: {
        auth: authReducer
    },
    middleware
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
