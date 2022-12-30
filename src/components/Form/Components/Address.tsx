import React from "react";

import { Grid } from "@mui/material";
import TextInputField from "./FormikFields/FormikTextInputField";
import { formAddressLabels } from "../../../types/types";
import CountrySelect from "./CountrySelect";

import { FormikProps } from "../../../types/Interfaces";

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
        margin: 3,
        padding: 3,
    },
    button: { mt: 3, ml: 1 },
};
const Address: React.FC<Props & FormikProps> = ({
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
                        name="Address"
                        label={formAddressLabels.address}
                        formik={formik}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextInputField
                        name="Number"
                        type="number"
                        label={formAddressLabels.streetNumber}
                        formik={formik}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CountrySelect label={formAddressLabels.city} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextInputField
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
