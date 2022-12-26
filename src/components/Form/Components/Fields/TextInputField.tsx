import { TextField } from "@mui/material";
import React from "react";

interface Props {
    name: string;
    label: string;
    type?: string;

    formik: {
        handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
        values: any;
        errors: any;
        touched: any;
    };
}

const classes = {
    textField: {
        marginBottom: 2,
    },
};

const TextInputField: React.FC<Props> = ({
    name,
    label,
    formik,
    type = "string",
}) => {
    return (
        <TextField
            sx={classes.textField}
            label={label}
            type={type}
            name={name}
            fullWidth
            onChange={formik.handleChange}
            value={formik.values[name]}
            variant="outlined"
            error={formik.touched[name] && Boolean(formik.errors[name])}
            helperText={formik.errors[name]}
        />
    );
};

export default TextInputField;
