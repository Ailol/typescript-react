import { FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { ErrorMessage } from "formik";
import moment from "moment";
import React from "react";

import { FormikProps } from "../../../../types/Interfaces";

interface Props {
    name: string;
    label: string;
}

const classes = {
    radioGroup: {
        width: "auto",
        height: "auto",
        display: "flex",
        flexWrap: "nowrap",
        flexDirection: "row",
    },
    form: {
        "&:hover": {
            boxShadow: 3,
            margin: "5px",
            padding: "5px",
        },
    },
};

const RadioGroupField: React.FC<Props & FormikProps> = ({
    name,
    label,
    formik,
}) => {
    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <DesktopDatePicker
                label={label}
                inputFormat="DD/MM/YYYY"
                value={formik.values.age}
                onChange={(value) => {
                    formik.setFieldValue(
                        name,
                        moment(value._d).format("YYYY-MM-DD")
                    );
                }}
                renderInput={(params) => (
                    <TextField
                        error={
                            formik.touched["age"] &&
                            Boolean(formik.errors["age"])
                        }
                        helperText={formik.errors["age"]}
                        {...params}
                    />
                )}
            />
        </LocalizationProvider>
    );
};

export default RadioGroupField;
