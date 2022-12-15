import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

export interface bus {
    id: number;
    code: string;
    journey: string;
    name: string;
    dest: string;
    plat: string;
    aimed: string;
    expected: string;
    diff: string;
}

type busState = {
    busList: bus[];
};

const initialState = {
    busList: [],
} as busState;

const busSlice = createSlice({
    name: "buss",
    initialState,
    reducers: {
        addbus(state, action: PayloadAction<bus>) {
            state.busList.push(action.payload);
        },
        resetStore(state) {
            state.busList = initialState.busList;
        },
    },
});

export const { addbus, resetStore } = busSlice.actions;
export default busSlice.reducer;

export const selectbuss = (state: RootState) => state.bus.busList;
