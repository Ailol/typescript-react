import { Card } from "@mui/material";
import React from "react";

import { RootState } from "../../store/store";

import "../../assets/Displaystore.css";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { selectUsers } from "../../reducers/userReducer";
import ProfileCard from "./Components/ProfileCard";

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const styles = {
    card: {
        minHeight: "100%",
        margin: "5px 5px",
    },
};
const DisplayStore: React.FC = () => {
    const users = useTypedSelector(selectUsers);
    console.log(users);
    return (
        <>
            <Card
                sx={{
                    // margin: 2,
                    padding: 2,
                    borderRadius: 5,
                    backgroundColor: "#E8E8E8",
                }}
            >
                here
            </Card>
            <div className="display__store">
                {users.map((item: any) => (
                    <ProfileCard
                        name={item?.firstName + " " + item?.lastName}
                        email={item?.email}
                        birthdate={item?.age}
                        about={item?.about}
                        avatarUrl={item?.image}
                    />
                ))}
            </div>
        </>
    );
};
export default DisplayStore;
