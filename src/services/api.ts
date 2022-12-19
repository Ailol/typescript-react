import { ARRIVAL } from "./graphql";

const headers = {
    "Content-Type": "application/json",
    "ET-Client-Name": "brakar-journeyplanner",
};

export const getBusses = async () => {
    return await fetch("https://api.entur.io/journey-planner/v3/graphql", {
        method: "POST",
        headers: headers,
        mode: "cors",
        body: JSON.stringify({
            query: ARRIVAL,
        }),
    }).then(function (data) {
        return data?.json();
    });
};
