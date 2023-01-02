import { Checkbox, FormControlLabel } from "@mui/material";
// import { ErrorMessage, Field } from "formik";
import React from "react";
import { FormikProps } from "../../validation/formikProps";

interface Props {
    name: string;

    options: { label: string; value: string }[];
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

const FormikCheckBoxField: React.FC<Props & FormikProps> = ({
    name,

    formik,
    options,
}) => {
    return (
        <>
            {options.map((checkbox) => (
                <FormControlLabel
                    sx={styles.checkbox}
                    control={
                        <Checkbox
                            name={checkbox.value}
                            checked={formik.values[checkbox.value]}
                            onChange={formik.handleChange}
                            value={formik.values[checkbox.value]}
                            sx={styles.checkbox}
                        />
                    }
                    label={checkbox.label}
                    key={checkbox.value}
                />
            ))}
            <div style={styles.validationMessage}>
                {formik.touched[name] && formik.errors[name] && (
                    <>{formik.errors[name]}</>
                )}
            </div>
        </>
    );
};

export default FormikCheckBoxField;
