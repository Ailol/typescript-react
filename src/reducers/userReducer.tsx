import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

export interface User {
    firstName?: string;
    lastName?: string;
    age?: number;
    gender?: string;
    termsOfService?: boolean;
}

type usersState = {
    userList: User[];
};

const initialState = {
    userList: [],
} as usersState;

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser(state, action: PayloadAction<User>) {
            state.userList.push(action.payload);
        },
        resetStore(state) {
            state.userList = initialState.userList;
        },
    },
});

export const { addUser, resetStore } = userSlice.actions;
export default userSlice.reducer;

export const selectUsers = (state: RootState) => state.user.userList;
