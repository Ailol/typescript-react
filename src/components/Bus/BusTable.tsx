import { columns } from "./constants";
import { DataGrid } from "@mui/x-data-grid";
import Header from "./Header";

import { useSelector, TypedUseSelectorHook } from "react-redux";
import { selectBus } from "../../reducers/busReducer";

import { RootState } from "../../store/store";
import { useFetchBuses } from "./hooks";
import { Box } from "@mui/material";

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const styles = {
    tableMain: {
        padding: 5,
    },
    tableContainer: {
        backgroundColor: "#fff",
        borderRadius: 10,
    },
    tableTable: {
        height: 631,
    },
};

const BusTable: React.FC = (props) => {
    useFetchBuses();

    const busList = useSelector(selectBus);

    return (
        <>
            <Box sx={styles.tableMain}>
                <Header title="Bus tavla" />
                <Box sx={styles.tableContainer}>
                    <Box sx={styles.tableTable}>
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
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default BusTable;
