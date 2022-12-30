import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";

import {
    Box,
    Button,
    Card,
    CardHeader,
    Grid,
    Stack,
    TextField,
} from "@mui/material";
import { formInitialValues, registerValidation } from "./constants/constants";
import "../../assets/Form.css";
import { addUser, resetStore } from "../../reducers/userReducer";
import CheckboxField from "./Components/FormikFields/FormikCheckBoxField";
import ContactInfo from "./Components/ContactInfo";

import Address from "./Components/Address";
import ImageUploader from "./Components/ImageUploader";
import FormikTextInputField from "./Components/FormikFields/FormikTextInputField";

const styles = {
    container: {
        flexGrow: 1,
        backgroundColor: "#E8E8E8	",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "100%",
        // padding: 1,
    },
    form: {
        display: "flex",
    },

    grid: {
        justify: "space-around",
        alignItems: "center",
    },
    card: {
        margin: 2,
        padding: 2,
        justify: "space-around",
        alignItems: "center",
        width: "fit-content",
        blockSize: "fit-content",
        mt: 3,
        ml: 1,
    },
    cardHeader: {
        textAlign: "center",
        backgroundColor: "#E8E8E8	",
        marginBottom: 3,
    },
    imageCard: {
        display: "flex",
        justifyContent: "center",
        marginLeft: 2,
        // alignItems: "center",
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
    const handleReset = () => {
        formik.resetForm();
        dispatch(resetStore());
    };

    return (
        <>
            <Box sx={styles.container}>
                <form onSubmit={formik.handleSubmit}>
                    <Grid container>
                        <Grid item xs={12} sm={3} sx={styles.imageCard}>
                            <Card sx={styles.card}>
                                <CardHeader
                                    sx={styles.cardHeader}
                                    title="Last opp bilde"
                                />

                                <ImageUploader preview={true} formik={formik} />

                                <FormikTextInputField
                                    name="about"
                                    label="Fortell kort om deg selv"
                                    row={7}
                                    formik={formik}
                                    multiline={true}
                                    width={"100%"}
                                />
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <Grid item xs={12} sm={12}>
                                <Card sx={styles.card}>
                                    <CardHeader
                                        sx={styles.cardHeader}
                                        title="Kontakt info"
                                    />
                                    <ContactInfo formik={formik} />
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Card sx={styles.card}>
                                    <CardHeader
                                        sx={styles.cardHeader}
                                        title="Addresse"
                                    />

                                    <Address formik={formik} />
                                </Card>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <CheckboxField
                                name="termsOfService"
                                label="terms of service"
                                formik={formik}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Button
                                sx={styles.button}
                                type="reset"
                                variant="contained"
                                color="secondary"
                                onClick={() => handleReset()}
                            >
                                reset
                            </Button>
                            <Button
                                sx={styles.button}
                                type="submit"
                                variant="contained"
                                color="primary"
                            >
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </>
    );
};

export default Form;
