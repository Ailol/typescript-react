import { configureStore } from "@reduxjs/toolkit";
import busReducer from "../reducers/busReducer";
import userReducer from "../reducers/userReducer";

export const store = configureStore({
    reducer: {
        user: userReducer,
        bus: busReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
