import React from "react";

import { Box, Card, CardHeader } from "@mui/material";
import DisplayStore from "./DisplayStore";
import Form from "./Form";

const styles = {
    cardStore: {
        padding: 2,
        borderRadius: 5,

        width: "95%",
        backgroundColor: "white",
        borderLeft: "10px solid red",
        overflow: "hidden",
        display: "flex",

        justifyContent: "center",
        marginBottom: 5,
    },
    cardForm: {
        padding: 2,
        borderRadius: 5,
        margin: 5,
        width: "95%",

        display: "flex",

        justifyContent: "center",
    },
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
};

const Profile: React.FC = () => {
    return (
        <Box sx={styles.container}>
            <Card style={styles.cardStore}>
                <CardHeader title="Store:" variant="h5" />
                <DisplayStore />
            </Card>
            <Card style={styles.cardForm}>
                <Form />
            </Card>
        </Box>
    );
};

export default Profile;
