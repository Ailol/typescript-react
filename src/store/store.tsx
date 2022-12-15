import { configureStore } from "@reduxjs/toolkit";
import busReducer from "../reducers/busReducer";
import userReducer from "../reducers/userReducer";

export const store = configureStore({
    reducer: {
        user: userReducer,
        bus: busReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
