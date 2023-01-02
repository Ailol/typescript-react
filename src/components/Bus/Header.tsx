import React from "react";

import { Typography } from "@mui/material";

const styles = {
    header: {
        width: "99%",
        height: "80%",
        marginBottom: "5px",
        padding: "10px 10px",
        backgroundColor: "#021117",
        minHeight: "2.5em",
        borderRadius: 10,
    },
    headerText: {
        fontSize: "1.5em",
        fontWeight: 300,
        color: "#ffffff",
        fontStyle: "italic",
        marginTop: "-4px",
    },
};

interface IProps {
    title: string;
}

const Header: React.FC<IProps> = ({ title }) => {
    return (
        <div style={styles.header}>
            <Typography sx={styles.headerText}>{title}</Typography>
        </div>
    );
};

export default Header;
