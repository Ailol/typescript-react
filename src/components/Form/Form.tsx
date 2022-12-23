import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";

import { Button, Grid } from "@mui/material";
import {
    formInitialValues,
    registerValidation,
    genderRadioOptions,
} from "./constants";
import Header from "../Header";
import "../../assets/Form.css";
import { addUser, resetStore } from "../../reducers/userReducer";
import RadioGroupField from "./Fields/RadioGroupField";
import CheckboxField from "./Fields/CheckBoxField";
import TextInputField from "./Fields/TextInputField";

const classes = {
    form: {
        display: "flex",
        flexDirection: "column",
    },

    grid: {
        direction: "column",
        justify: "space-around",
        alignItems: "center",
    },
    button: { mt: 3, ml: 1 },
};

const Form: React.FC = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: formInitialValues,
        validationSchema: registerValidation,
        onSubmit: (values) => {
            dispatch(addUser(values));
            console.log(values);
        },
    });

    return (
        <>
            <Header title="Registrèr" />

            <div className="form__style">
                <form onSubmit={formik.handleSubmit}>
                    <Grid container spacing={3} sx={classes.grid}>
                        <Grid item xs={12} sm={6}>
                            <TextInputField
                                name="firstName"
                                label="Fornavn"
                                formik={formik}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextInputField
                                name="lastName"
                                label="Etternavn"
                                formik={formik}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextInputField
                                name="age"
                                label="Alder"
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

                        <Grid item xs={6}>
                            <CheckboxField
                                name="termsOfService"
                                label="Samtykker du?"
                                formik={formik}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Button
                                sx={classes.button}
                                type="reset"
                                variant="contained"
                                color="secondary"
                                onClick={() => {
                                    formik.resetForm();
                                    dispatch(resetStore());
                                }}
                            >
                                reset
                            </Button>
                            <Button
                                sx={classes.button}
                                type="submit"
                                variant="contained"
                                color="primary"
                            >
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </>
    );
};

export default Form;
