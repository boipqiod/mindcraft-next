import { legacy_createStore as createStore, combineReducers, Dispatch } from "redux";
import authReducer from "@/redux/auth/authReducer";

const rootReducer = combineReducers({
    auth: authReducer
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = Dispatch;
export default store;
