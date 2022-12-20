import React from "react";
import "../../assets/Form.css";
import { Card } from "@mui/material";
import DisplayStore from "../DisplayStore";
import FormGrid from "./FormGrid";
// import FormGrid from "./Formgrid";

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
const RegisterForm: React.FC = () => {
    return (
        <>
            <div>
                <Card sx={styles.card}>
                    <FormGrid />
                </Card>
            </div>
            <div>
                <DisplayStore />
            </div>
        </>
    );
};

export default RegisterForm;
