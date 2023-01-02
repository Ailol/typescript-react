import React from "react";
import "../../assets/Form.css";
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
            <Card sx={styles.card}>
                <Form />
            </Card>
            <DisplayStore />
        </>
    );
};

export default Profile;
