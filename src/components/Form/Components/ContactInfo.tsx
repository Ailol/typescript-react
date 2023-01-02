import React from "react";
import { Grid } from "@mui/material";
import { genderRadioOptions } from "../constants/constants";
import { formContactLabels } from "../constants/types";
import { FormikProps } from "../validation/formikProps";
import FormikTextInputField from "./FormikFields/FormikTextInputField";
import FormikDatePicker from "./FormikFields/FormikDatePicker";
import FormikRadioGroupField from "./FormikFields/FormikRadioGroupField";
interface Props {
    width?: any;
    height?: any;
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
    width = "auto",
    height = "auto",
}) => {
    return (
        <>
            <Grid
                container
                spacing={3}
                sx={(styles.grid, { width: width, height: height })}
            >
                <Grid item xs={12} sm={6}>
                    <FormikTextInputField
                        name="firstName"
                        label={formContactLabels.firstName}
                        formik={formik}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormikTextInputField
                        name="lastName"
                        label={formContactLabels.lastName}
                        formik={formik}
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormikTextInputField
                        name="email"
                        label={formContactLabels.email}
                        formik={formik}
                    />
                </Grid>

                <Grid item xs={6} sm={6}>
                    <FormikRadioGroupField
                        name="gender"
                        options={genderRadioOptions}
                        formik={formik}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormikDatePicker
                        name="age"
                        label={"Fødselsdato"}
                        formik={formik}
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default ContactInfo;
