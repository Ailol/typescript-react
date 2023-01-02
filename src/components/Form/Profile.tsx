import React from "react";

import { Card } from "@mui/material";
import DisplayStore from "./DisplayStore";
import Form from "./Form";

const styles = {
    card: {
        padding: 2,
        borderRadius: 5,
        backgroundColor: "#E8E8E8",
    },
};

const Profile: React.FC = () => {
    return (
        <>
            <Form />
            <DisplayStore />
        </>
    );
};

export default Profile;
