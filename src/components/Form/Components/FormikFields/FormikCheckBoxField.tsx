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
    form: {
        marginBottom: 2,
    },
    checkbox: {
        "&.Mui-checked": {
            color: "#800080",
        },

        "& .MuiFormControlLabel-label": {
            fontSize: "1rem",
        },
    },
};

const FormikCheckBoxField: React.FC<Props> = ({ name, label, formik }) => {
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
                        sx={classes.checkbox}
                    />
                }
                label={label}
            />
            {formik.touched[name] && formik.errors[name] && (
                <>{formik.errors[name]}</>
            )}
        </>
    );
};

export default FormikCheckBoxField;
