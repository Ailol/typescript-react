import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
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

const classes = {
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
};

const FormikRadioGroupField: React.FC<Props> = ({ name, options, formik }) => {
    return (
        <>
            <RadioGroup
                sx={classes.radioGroup}
                name={name}
                value={formik.values[name]}
                onChange={formik.handleChange}
                style={{ display: "flex" }}
            >
                {options.map((option) => (
                    <FormControlLabel
                        key={option.value}
                        value={option.value}
                        control={<Radio />}
                        label={option.label}
                        sx={classes.form}
                    />
                ))}
                {/* <ErrorMessage name={formik.errors[name]} /> */}
            </RadioGroup>
            {formik.touched[name] && formik.errors[name] && (
                <>{formik.errors[name]}</>
            )}
        </>
    );
};

export default FormikRadioGroupField;
