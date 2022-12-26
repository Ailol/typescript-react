import React from "react";

import { Grid } from "@mui/material";
import { genderRadioOptions } from "../constants";
import RadioGroupField from "./Fields/RadioGroupField";
import TextInputField from "./Fields/TextInputField";
import { formContactLabels } from "../../../types/types";
import { FormikProps } from "../../../types/Interfaces";

interface Props {
    width?: any;
    height?: any;
    formik: {
        handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
        values: any;
        errors: any;
        touched: any;
    };
}
const styles = {
    form: {
        display: "flex",
    },

    grid: {
        justify: "space-around",
        alignItems: "center",
    },
    button: { mt: 3, ml: 1 },
};

const ContactInfo: React.FC<Props & FormikProps> = ({
    formik,
    width = "100%",
    height = "100%",
}) => {
    return (
        <>
            <Grid
                container
                spacing={3}
                sx={(styles.grid, { width: width, height: height })}
            >
                <Grid item xs={12} sm={6}>
                    <TextInputField
                        name="firstName"
                        label={formContactLabels.firstName}
                        formik={formik}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextInputField
                        name="lastName"
                        label={formContactLabels.lastName}
                        formik={formik}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextInputField
                        name="email"
                        label={formContactLabels.email}
                        formik={formik}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextInputField
                        name="age"
                        label={formContactLabels.age}
                        type="number"
                        formik={formik}
                    />
                </Grid>
                <Grid item xs={6}>
                    <RadioGroupField
                        name="gender"
                        options={genderRadioOptions}
                        formik={formik}
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default ContactInfo;
