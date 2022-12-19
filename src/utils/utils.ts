import { User } from "../reducers/userReducer";
import { Bus } from "../reducers/busReducer";

import moment from "moment";
import { addBus } from "../reducers/busReducer";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const isValidForm = (form: User) => {
    return (
        form.firstName && form.lastName && form.gender && form.termsOfService
    );
};

export const timeDiff = (data: any) => {
    const expected = data.expectedArrivalTime;
    const aimed = data.aimedArrivalTime;

    const exp = moment(expected).utcOffset(expected).format("DD/MM/YYYY HH:mm");
    const aim = moment(aimed).utcOffset(aimed).format("DD/MM/YYYY HH:mm");
    return moment
        .utc(
            moment(exp, "DD/MM/YYYY HH:mm").diff(
                moment(aim, "DD/MM/YYYY HH:mm")
            )
        )
        .format("HH:mm");
};

export const formatToUtc = (time: any) => {
    return moment(time).utcOffset(time).format("HH:mm");
};

// should be an action
export const filterBus = (id: any, b: any) => {
    return {
        id: id,
        code: b?.serviceJourney?.journeyPattern?.line?.publicCode,
        journey: b?.serviceJourney?.journeyPattern?.line?.name,
        name: b?.quay?.name,
        dest: b?.destinationDisplay?.frontText,
        plat: b?.quay?.publicCode,
        aimed: formatToUtc(b?.aimedArrivalTime),
        expected: formatToUtc(b?.expectedArrivalTime),
        diff: timeDiff(b),
    };
};
