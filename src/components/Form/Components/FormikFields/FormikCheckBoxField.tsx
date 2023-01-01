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

const styles = {
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
    validationMessage: {
        color: "#d32f2f",
        margin: 0,
        fontFamily: "sans-serif",
        fontWeight: 400,
        fontSize: "1rem",
        lineHeight: 1.5,
        letterSpacing: "0.00938em",
    },
};

const FormikCheckBoxField: React.FC<Props> = ({ name, label, formik }) => {
    return (
        <>
            <FormControlLabel
                sx={styles.checkbox}
                control={
                    <Checkbox
                        name={name}
                        checked={formik.values[name]}
                        onChange={formik.handleChange}
                        value={formik.values[name]}
                        sx={styles.checkbox}
                    />
                }
                label={label}
            />
            <div style={styles.validationMessage}>
                {formik.touched[name] && formik.errors[name] && (
                    <>{formik.errors[name]}</>
                )}
            </div>
        </>
    );
};

export default FormikCheckBoxField;
