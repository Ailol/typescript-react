import { Checkbox, FormControlLabel } from "@mui/material";
// import { ErrorMessage, Field } from "formik";
import React from "react";

interface Props {
    name: string;
    label: string;
    formik: {
        handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
        values: any;
        errors: any;
        touched: any;
    };
}

const classes = {
    checkbox: {
        marginBottom: 2,
    },
};

const CheckboxField: React.FC<Props> = ({ name, label, formik }) => {
    return (
        <>
            <FormControlLabel
                sx={classes.checkbox}
                control={
                    <Checkbox
                        name={name}
                        checked={formik.values[name]}
                        onChange={formik.handleChange}
                        value={formik.values[name]}
                    />
                }
                label={label}
            />
            {formik.touched[name] && formik.errors[name] && (
                <React.Fragment>{formik.errors[name]}</React.Fragment>
            )}
        </>
    );
};

export default CheckboxField;
