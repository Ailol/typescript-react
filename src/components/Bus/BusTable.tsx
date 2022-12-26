import "../../assets/Table.css";
import { columns } from "../../types/constants";

import { DataGrid } from "@mui/x-data-grid";
import Header from "../Form/Components/Header";

import { useSelector, TypedUseSelectorHook } from "react-redux";
import { selectBus } from "../../reducers/busReducer";

import { RootState } from "../../store/store";
import { useFetchBuses } from "./hooks";

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const url =
    "https://developer.entur.org/pages-journeyplanner-journeyplanner-v3";
const BusTable: React.FC = (props) => {
    useFetchBuses();

    const busList = useSelector(selectBus);

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
