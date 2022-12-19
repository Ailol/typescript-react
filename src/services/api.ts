import { createAsyncThunk } from "@reduxjs/toolkit";
import { ap, client, qq } from "./apollo";
import { ARRIVAL, q } from "./graphql";
// import { ARRIVAL, q } from "./graphql";

const headers = {
    "Content-Type": "application/json",
    "ET-Client-Name": "brakar-journeyplanner",
};
export const fetchPosts = createAsyncThunk(
    "https://api.entur.io/journey-planner/v3/graphql",
    async () => {
        return await fetch("https://api.entur.io/journey-planner/v3/graphql", {
            method: "POST",
            headers: headers,
            mode: "cors",
            body: JSON.stringify({
                query: ARRIVAL,
            }),
        }).then(function (data) {
            console.log(data?.json());
            return data?.json();
        });
    }
);
export const getBusses = async () => {
    // ap();
    // console.log(client.readQuery({ query: qq }));
    // console.log("Fetching trips");
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
