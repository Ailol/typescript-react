import React from "react";

import { Box, Button, Card, CardHeader, Grid, Stack } from "@mui/material";
import { termsOfServiceOptions } from "./constants/constants";

import FormikCheckboxField from "./Components/FormikFields/FormikCheckBoxField";
import ContactInfo from "./Components/ContactInfo";

import Address from "./Components/Address";
import FormikTextInputField from "./Components/FormikFields/FormikTextInputField";
import FormikImageUpload from "./Components/FormikFields/FormikImageUpload";
import { formContactLabels } from "./constants/types";
import { useFormikForm } from "./validation/useFormik";

const styles = {
    container: {
        flexGrow: 1,
        backgroundColor: "#E8E8E8",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "100%",
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
        backgroundColor: "transparent",
        borderBottom: "1px solid #000000",
        width: "80%",
        margin: "0 auto",
        marginBottom: "26px",
        padding: "8px 0",
    },
    imageCard: {
        display: "flex",
        justifyContent: "center",
        marginLeft: 2,
    },
    button: { mt: 3, ml: 1 },
};

const Form: React.FC = () => {
    const { handleReset, ...formik } = useFormikForm();

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

                                <FormikImageUpload
                                    preview={true}
                                    formik={formik}
                                />

                                <FormikTextInputField
                                    name="about"
                                    label={formContactLabels.about}
                                    row={5}
                                    formik={formik}
                                    multiline
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

                        <Grid item xs={12}>
                            <FormikCheckboxField
                                name="termsOfService"
                                formik={formik}
                                options={termsOfServiceOptions}
                            />

                            <Stack alignContent="center" direction="row" mt={5}>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={handleReset}
                                    sx={styles.button}
                                >
                                    Nullstill
                                </Button>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    sx={styles.button}
                                >
                                    Lagre profil
                                </Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </>
    );
};

export default Form;
