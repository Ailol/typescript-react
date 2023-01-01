import { Box, Card } from "@mui/material";
import React from "react";

import { RootState } from "../../../store/store";

import "../../assets/Displaystore.css";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { selectUsers } from "../../../reducers/userReducer";
import ProfileCard from "./ProfileCard";

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const styles = {
    card: {
        minHeight: "100%",
        margin: "5px 5px",
    },

    container: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
    },
};
const DisplayStore: React.FC = () => {
    const users = useTypedSelector(selectUsers);
    return (
        <Box sx={styles.container}>
            <div className="display__store">
                {users.map((item: any) => (
                    <ProfileCard
                        name={item.firstName + " " + item.lastName}
                        email={item.email}
                        birthdate={item.age}
                        about={item?.about}
                        avatarUrl={item?.image}
                    />
                ))}
            </div>
        </Box>
    );
};
export default DisplayStore;
