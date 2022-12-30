import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

export interface User {
    id?: string;
    firstName?: string;
    lastName?: string;
    age?: string;
    gender?: string;
    termsOfService?: boolean;
    image?: string;
    about?: string;
    address?: {
        address?: string;
        streetNumber?: number;
        city?: string;
        zip?: number;
    };
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
        addImage(state, action: PayloadAction<User>) {
            const userIndex = state.userList.findIndex(
                (user) => user.id === action.payload.id
            );
            if (userIndex >= 0) {
                state.userList[userIndex] = action.payload;
            }
        },

        resetStore(state) {
            state.userList = initialState.userList;
        },
    },
});

export const { addUser, resetStore } = userSlice.actions;
export default userSlice.reducer;

export const selectUsers = (state: RootState) => state.user.userList;
