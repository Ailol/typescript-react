import { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {
    Button,
    FormHelperText,
    FormLabel,
    Radio,
    RadioGroup,
} from "@mui/material";

import "../../assets/Form.css";

import { buttonLabels, formLabels } from "../../types/types";
import { useDispatch } from "react-redux";
import Header from "../Header";
import { addUser, User, resetStore } from "../../reducers/userReducer";

import { Field, useFormik } from "formik";
import * as yup from "yup";

const styles = {
    grid: {
        direction: "column",
        justify: "space-around",
        alignItems: "center",
    },
    button: { mt: 3, ml: 1 },
};

const validationSchema = yup.object({
    firstName: yup.string().required("Tast inn fornavn "),
    lastName: yup.string().required("Tast inn etternavn "),
    age: yup.string().required("Sett in alder "),
    gender: yup.string().required("velg kjønn"),
    termsOfService: yup.string().required("Huk av for samtykkelse"),
});

const FormGrid: React.FC = (props) => {
    const dispatch = useDispatch();

    const onReset = () => {
        dispatch(resetStore());
    };
    // const WithMaterialUI = () => {
    const formik = useFormik<User>({
        initialValues: {
            firstName: "",
            lastName: "",
            age: 0,
            gender: "",
            termsOfService: false,
        },

        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
            dispatch(addUser(values));
            resetForm();
        },
    });

    return (
        <>
            <Header title="Registrèr" />

            <div className="form__style">
                <form onSubmit={formik.handleSubmit}>
                    <Grid container spacing={3} sx={styles.grid}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="firstName"
                                name="firstName"
                                label={formLabels.firstName}
                                fullWidth
                                onChange={formik.handleChange}
                                error={
                                    formik.touched.firstName &&
                                    Boolean(formik.errors.firstName)
                                }
                                helperText={
                                    formik.touched.firstName &&
                                    formik.errors.firstName
                                }
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="lastName"
                                name="lastName"
                                label={formLabels.lastName}
                                fullWidth
                                onChange={formik.handleChange}
                                error={
                                    formik.touched.lastName &&
                                    Boolean(formik.errors.lastName)
                                }
                                helperText={
                                    formik.touched.lastName &&
                                    formik.errors.lastName
                                }
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="age"
                                name="age"
                                label={formLabels.age}
                                fullWidth
                                type="number"
                                onChange={formik.handleChange}
                                error={
                                    formik.touched.age &&
                                    Boolean(formik.errors.age)
                                }
                                helperText={
                                    formik.touched.age && formik.errors.age
                                }
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormLabel component="legend">
                                {formLabels.gender}
                            </FormLabel>
                            <RadioGroup
                                row
                                defaultValue="Initial"
                                id="gender"
                                {...formik.getFieldProps("gender")}
                            >
                                <FormControlLabel
                                    value="Female"
                                    control={<Radio />}
                                    label={formLabels.female}
                                    title="Female"
                                />
                                <FormControlLabel
                                    value="Male"
                                    control={<Radio />}
                                    label={formLabels.male}
                                    title="Male"
                                />
                            </RadioGroup>
                            {formik.touched.gender && formik.errors.gender && (
                                <FormHelperText>
                                    {formik.errors.gender}
                                </FormHelperText>
                            )}
                        </Grid>

                        <Grid item xs={6}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        required
                                        color="secondary"
                                        name="saveAddress"
                                        value={true}
                                        onChange={formik.handleChange}
                                    />
                                }
                                label={formLabels.termsOfService}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Button
                                color="secondary"
                                variant="contained"
                                sx={styles.button}
                                onClick={onReset}
                            >
                                {buttonLabels.reset}
                            </Button>
                            <Button
                                color="primary"
                                variant="contained"
                                type="submit"
                                sx={styles.button}
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

export default FormGrid;
