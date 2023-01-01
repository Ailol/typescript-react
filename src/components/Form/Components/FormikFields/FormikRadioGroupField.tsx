import { FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { ErrorMessage } from "formik";
import React from "react";

interface Props {
    name: string;
    options: { label: string; value: string }[];
    formik: {
        handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
        values: any;
        errors: any;
        touched: any;
    };
}

const styles = {
    radioGroup: {
        width: "auto",
        height: "auto",
        display: "flex",
        flexWrap: "nowrap",
        // flexDirection: "row",
    },
    form: {
        "&.Mui-radio": {
            color: "#800080",
        },
    },
    title: {
        margin: 0,
        fontFamily: "sans-serif",
        fontWeight: 550,
        fontSize: "1rem",
        lineHeight: 1.5,
        letterSpacing: "0.00938em",
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

const FormikRadioGroupField: React.FC<Props> = ({ name, options, formik }) => {
    return (
        <>
            <div style={styles.title}>Kjønn</div>
            <RadioGroup
                sx={styles.radioGroup}
                name={name}
                value={formik.values[name]}
                onChange={formik.handleChange}
                style={{ display: "flex" }}
                row
            >
                {options.map((option) => (
                    <FormControlLabel
                        key={option.value}
                        value={option.value}
                        control={<Radio />}
                        label={option.label}
                        sx={styles.form}
                    />
                ))}
                {/* <ErrorMessage name={formik.errors[name]} /> */}
            </RadioGroup>
            <div style={styles.validationMessage}>
                {formik.touched[name] && formik.errors[name] && (
                    <>{formik.errors[name]}</>
                )}
            </div>
        </>
    );
};

export default FormikRadioGroupField;
