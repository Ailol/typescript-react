import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
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
        display: "flex",
        flexDirection: "column",
    },
};

const RadioGroupField: React.FC<Props> = ({ name, options, formik }) => {
    return (
        <RadioGroup
            sx={classes.radioGroup}
            name={name}
            value={formik.values[name]}
            onChange={formik.handleChange}
        >
            {options.map((option) => (
                <FormControlLabel
                    key={option.value}
                    value={option.value}
                    control={<Radio />}
                    label={option.label}
                />
            ))}
            {formik.touched[name] && formik.errors[name] && (
                <>{formik.errors[name]}</>
            )}
        </RadioGroup>
    );
};

export default RadioGroupField;
