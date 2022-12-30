import React from "react";
import "../../assets/Form.css";
import { Card } from "@mui/material";
import DisplayStore from "./DisplayStore";
import Form from "./Form";

import Header from "./Components/Header";

const Profile: React.FC = () => {
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
                <Form />
            </Card>
            <DisplayStore />
        </>
    );
};

export default Profile;
