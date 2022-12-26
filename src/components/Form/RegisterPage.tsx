import React from "react";
import "../../assets/Form.css";
import { Card } from "@mui/material";
import DisplayStore from "../DisplayStore";
import Form from "./Form";

import Header from "./Components/Header";

const RegisterPage: React.FC = () => {
    return (
        <>
            {/* <Header title={"Registrer"} /> */}

            <Card
                sx={{
                    margin: 5,
                    padding: 5,
                    backgroundColor: "lightgrey",
                }}
            >
                <Form />
            </Card>
            <div>
                <DisplayStore />
            </div>
        </>
    );
};

export default RegisterPage;
