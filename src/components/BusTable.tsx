import { useState, useEffect } from "react";
import { getBusses } from "../services/api";
import { filterBusses } from "../utils/helpers";
import "../assets/Table.css";
import { columns } from "../types/constants";

import { DataGrid } from "@mui/x-data-grid";
import Header from "./Header";

const BusTable: React.FC = (props) => {
    const [busses, setBusses] = useState<any[]>([]);

    const fetchData = async () => {
        return await getBusses().then((response) => {
            setBusses(filterBusses(response.data?.stopPlace?.estimatedCalls));
        });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <Header title="Bus tavla" />
            <div className="table__main">
                <div className="table__container">
                    <div className="table__table">
                        {busses && (
                            <DataGrid
                                rows={busses}
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
