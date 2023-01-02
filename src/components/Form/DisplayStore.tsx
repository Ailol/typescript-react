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
        margin: 5,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
    },
};

const DisplayStore: React.FC = () => {
    const users = useTypedSelector(selectUsers);
    console.log(users);
    return (
        <>
            <Card sx={styles.card}>here</Card>
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
