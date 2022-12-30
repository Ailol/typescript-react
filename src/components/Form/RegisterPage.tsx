import React from "react";
import "../../assets/Form.css";
import { Card } from "@mui/material";
import DisplayStore from "./DisplayStore";
import Form from "./Form";

import Header from "./Components/Header";

const RegisterPage: React.FC = () => {
    return (
        <>
            {/* <Card
                sx={{
                    margin: 2,
                    padding: 2,
                    backgroundColor: "lightgrey",
                }}
            > */}
            <Form />
            {/* <DisplayStore /> */}
            {/* </Card> */}
        </>
    );
};

export default RegisterPage;
