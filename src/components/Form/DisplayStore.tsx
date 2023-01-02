import { Box, Card } from "@mui/material";
import React from "react";

import { RootState } from "../../store/store";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { selectUsers } from "../../reducers/userReducer";
import ProfileCard from "./Components/ProfileCard";

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const styles = {
    card: {
        padding: 2,
        borderRadius: 5,
        backgroundColor: "#E8E8E8",
    },

    store: {
        margin: 1,
        width: "100%",
        display: "flex",
        alignItems: "left",
        justifyContent: "left",
        // flexWrap: "wrap",
    },
};

const DisplayStore: React.FC = () => {
    const users = useTypedSelector(selectUsers);
    return (
        <>
            <Box sx={styles.store}>
                {users.map((item: any) => (
                    <ProfileCard
                        name={item?.firstName + " " + item.lastName}
                        email={item?.email}
                        birthdate={item?.age}
                        about={item?.about}
                        avatarUrl={item?.image}
                    />
                ))}
            </Box>
        </>
    );
};
export default DisplayStore;
