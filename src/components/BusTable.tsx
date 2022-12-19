import { useState, useEffect } from "react";
import { getBusses } from "../services/api";
import { filterBus } from "../utils/utils";
import "../assets/Table.css";
import { columns } from "../types/constants";

import { DataGrid } from "@mui/x-data-grid";
import Header from "./Header";

import { useSelector, TypedUseSelectorHook } from "react-redux";
import { addBus, selectBus } from "../reducers/busReducer";

import { RootState } from "../store/store";
import { useDispatch } from "react-redux";

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const BusTable: React.FC = (props) => {
    const dispatch = useDispatch();
    const busList = useSelector(selectBus);

    const updateStore = async () => {
        return await getBusses().then((response) => {
            const busses = response.data?.stopPlace?.estimatedCalls;
            let id = 0;
            busses?.map((b: any) => {
                dispatch(addBus(filterBus(id, b)));
                id++;
            });
        });
    };
    useEffect(() => {
        updateStore();
    }, []);

    return (
        <>
            <Header title="Bus tavla" />
            <div className="table__main">
                <div className="table__container">
                    <div className="table__table">
                        {busList && (
                            <DataGrid
                                rows={busList}
                                columns={columns}
                                pageSize={10}
                                rowsPerPageOptions={[10]}
                                disableColumnMenu
                                disableSelectionOnClick
                            />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default BusTable;
