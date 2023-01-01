import { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { addBus } from "../../reducers/busReducer";
import { getBusses } from "../../services/api";
import { filterBus } from "../../utils/utils";

import { Bus } from "../../reducers/busReducer";
export const useFetchBuses = () => {
    const dispatch = useDispatch();

    const fetchBuses = useCallback(async () => {
        const response = await getBusses();
        const busses = response.data?.stopPlace?.estimatedCalls;
        let id = 0;
        busses?.forEach((b: Bus) => {
            dispatch(addBus(filterBus(id, b)));
            id++;
        });
    }, [dispatch]);

    useEffect(() => {
        fetchBuses();
    }, [fetchBuses]);
};
