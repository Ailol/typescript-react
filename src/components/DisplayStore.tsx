import { Card } from "@mui/material";
import React from "react";

import { RootState } from "../store/store";

import "../assets/Displaystore.css";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { selectUsers } from "../reducers/userReducer";

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const styles = {
    card: {
        minHeight: "100%",
        margin: "5px 5px",
    },
};

const DisplayStore: React.FC = () => {
    const users = useTypedSelector(selectUsers);
    return (
        <div className="display__store">
            {users.map((item) => (
                <Card sx={styles.card}>
                    <h2>
                        {item.firstName} {item.lastName}
                    </h2>
                    <hr className="display__line"></hr>
                    <h3>
                        {item.gender} | {item.age}
                    </h3>
                </Card>
            ))}
        </div>
    );
};
export default DisplayStore;
