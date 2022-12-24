import React from "react";
import "../../assets/Form.css";
import { Card } from "@mui/material";
import DisplayStore from "../DisplayStore";
import Form from "./Form";

const styles = {
    card: {
        maxWidth: "100%",
        margin: "20px 20px",
        padding: "20px 20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
};
const RegisterPage: React.FC = () => {
    return (
        <>
            <div>
                <Card sx={styles.card}>
                    <Form />
                </Card>
            </div>
            <div>
                <DisplayStore />
            </div>
        </>
    );
};

export default RegisterPage;