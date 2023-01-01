import React from "react";

import { Grid } from "@mui/material";
import { formAddressLabels } from "../constants/types";
import CountrySelect from "./CountrySelect";

import { FormikProps } from "../constants/Interfaces";
import FormikTextInputField from "./FormikFields/FormikTextInputField";

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
const Address: React.FC<Props & FormikProps> = ({
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
                <Grid item xs={12} sm={12}>
                    <FormikTextInputField
                        name="address"
                        label={formAddressLabels.address}
                        formik={formik}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormikTextInputField
                        name="apartment"
                        label={formAddressLabels.apartment}
                        formik={formik}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormikTextInputField
                        name="streetNumber"
                        type="number"
                        label={formAddressLabels.streetNumber}
                        formik={formik}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CountrySelect label={formAddressLabels.country} />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <FormikTextInputField
                        name="zip"
                        label={formAddressLabels.zip}
                        type="number"
                        formik={formik}
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default Address;
