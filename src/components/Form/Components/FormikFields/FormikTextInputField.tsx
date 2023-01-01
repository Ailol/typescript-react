import { TextField } from "@mui/material";
import React from "react";
import { FormikProps } from "../../constants/Interfaces";

interface Props {
    name: string;
    label: string;
    type?: string;
    multiline?: boolean;
    width?: string;
    row?: number;
}

const classes = {
    textField: {
        // marginBottom: 2,
    },
};

const FormikTextInputField: React.FC<Props & FormikProps> = ({
    name,
    label,
    formik,
    type = "string",
    multiline = false,
    width = "100%",
    row = "1",
}) => {
    return (
        <TextField
            sx={(classes.textField, { width: width })}
            label={label}
            type={type}
            name={name}
            fullWidth
            rows={row}
            multiline={multiline}
            onChange={formik.handleChange}
            value={formik.values[name]}
            variant="outlined"
            error={formik.touched[name] && Boolean(formik.errors[name])}
            helperText={formik.errors[name]}
        />
    );
};

export default FormikTextInputField;
