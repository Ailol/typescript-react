import { User } from "../reducers/userReducer";

import moment from "moment";

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

export const filterBusses = (busses: any) => {
    let id = 0;
    const filteredBusses: any[] = [];

    busses?.map((b: any) => {
        filteredBusses.push({
            id: id,
            code: b?.serviceJourney?.journeyPattern?.line?.publicCode,
            journey: b?.serviceJourney?.journeyPattern?.line?.name,
            name: b?.quay?.name,
            dest: b?.destinationDisplay?.frontText,
            plat: b?.quay?.publicCode,
            aimed: moment(b?.aimedArrivalTime)
                .utcOffset(b?.aimedArrivalTime)
                .format("HH:mm"),
            expected: moment(b?.expectedArrivalTime)
                .utcOffset(b?.expectedArrivalTime)
                .format("HH:mm"),
            diff: timeDiff(b),
        });
        id++;
    });

    return filteredBusses;
};
