import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

export interface Bus {
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

type BusState = {
    busList: Bus[];
};

const initialState: BusState = {
    busList: [],
};

const busSlice = createSlice({
    name: "bus",
    initialState,
    reducers: {
        addBus(state, action: PayloadAction<Bus>) {
            state.busList.push(action.payload);
        },
        resetStore(state) {
            state.busList = initialState.busList;
        },
    },
});

export const { addBus, resetStore } = busSlice.actions;
export default busSlice.reducer;

export const selectBus = (state: RootState) => state.bus.busList;
