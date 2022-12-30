import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";

import { Box, Button, Card, CardHeader, Grid, TextField } from "@mui/material";
import { formInitialValues, registerValidation } from "./constants/constants";
import "../../assets/Form.css";
import { addUser, resetStore } from "../../reducers/userReducer";
import CheckboxField from "./Components/FormikFields/FormiCheckBoxField";
import ContactInfo from "./Components/ContactInfo";

import Address from "./Components/Address";
import ImageUploader from "./Components/ImageUploader";
import TextInputField from "./Components/FormikFields/FormikTextInputField";

const styles = {
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
        marginBottom: 5,
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
            {/* <Header title="Registrèr" /> */}

            <Box
                sx={{
                    flexGrow: 1,
                    backgroundColor: "#E8E8E8	",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <form onSubmit={formik.handleSubmit}>
                    <Grid container direction="row">
                        <Card sx={styles.card}>
                            <CardHeader
                                sx={styles.cardHeader}
                                title="Last opp bilde"
                            />
                            <ImageUploader preview={true} formik={formik} />
                            <Box sx={{ margin: 3, padding: 3 }}>
                                <TextInputField
                                    name="about"
                                    label="Fortell kort om deg selv"
                                    formik={formik}
                                    multiline={true}
                                />
                            </Box>
                        </Card>
                        <Box>
                            <Card sx={styles.card}>
                                <CardHeader
                                    sx={styles.cardHeader}
                                    title="Kontakt info"
                                />
                                <ContactInfo formik={formik} width={"35vh"} />
                            </Card>
                            <Card sx={styles.card}>
                                <CardHeader
                                    sx={styles.cardHeader}
                                    title="Addresse"
                                />

                                <Address formik={formik} width={"35vh"} />
                            </Card>
                        </Box>

                        <Grid container spacing={3} sx={styles.grid}>
                            <Grid item xs={6}>
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
                    </Grid>
                </form>
            </Box>
        </>
    );
};

export default Form;
