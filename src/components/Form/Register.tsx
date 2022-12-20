import React from "react";
import { Formik, Field, Form } from "formik";
import { addUser, User, resetStore } from "../../reducers/userReducer";
import * as Yup from "yup";
import { Grid } from "@mui/material";
import "../../assets/Form.css";
const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    age: Yup.number()
        .required("Age is required")
        .positive("Age must be a positive number"),
    gender: Yup.string().required("Gender is required"),
    termsOfService: Yup.boolean()
        .required("You must accept the terms of service")
        .oneOf([true], "You must accept the terms of service"),
});

const styles = {
    grid: {
        direction: "column",
        justify: "space-around",
        alignItems: "center",
    },
    button: { mt: 3, ml: 1 },
};

const Register: React.FC = () => {
    const errorMessage = (error: any, touched: any) => {
        return error && touched ? <div>{error}</div> : null;
    };
    return (
        <div>
            <h1>Contact Us</h1>
            <Formik<User>
                initialValues={{
                    firstName: "",
                    lastName: "",
                    age: 0,
                    gender: "",
                    termsOfService: false,
                }}
                validationSchema={validationSchema}
                onSubmit={async (values) => {
                    await new Promise((resolve) => setTimeout(resolve, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <Grid container spacing={3} sx={styles.grid}>
                            <Grid item xs={12} sm={6}>
                                <Field name="firstName" type="text" />
                                {errorMessage(
                                    errors.firstName,
                                    touched.firstName
                                )}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Field name="lastName" type="text" />
                                {errorMessage(
                                    errors.lastName,
                                    touched.lastName
                                )}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Field name="age" type="number" />
                                {errorMessage(errors.age, touched.age)}
                            </Grid>
                            <Grid item xs={6}>
                                <>
                                    <h3>Gender </h3>
                                    <Field
                                        type="radio"
                                        name="gender"
                                        value="male"
                                    />
                                    <Field
                                        type="radio"
                                        name="gender"
                                        value="female"
                                    />
                                    {errorMessage(
                                        errors.gender,
                                        touched.gender
                                    )}
                                </>
                            </Grid>
                            <Grid item xs={6}></Grid>
                            <Field
                                type="checkbox"
                                name="termsOfService"
                                value="true"
                            />

                            <Grid item xs={12}>
                                <button type="submit">Submit</button>
                            </Grid>
                        </Grid>

                        {/* 
                    <Form>
                        <Field name="firstName" type="text" />
                        {errorMessage(errors.firstName, touched.firstName)}
                        <Field name="lastName" type="text" />
                        {errorMessage(errors.lastName, touched.lastName)}
                        <Field name="age" type="number" />
                        {errorMessage(errors.age, touched.age)}
                        <Field type="radio" name="gender" value="male" />
                        <Field type="radio" name="gender" value="female" />
                        {errorMessage(errors.gender, touched.gender)}
                        <h1>Terms of service?</h1>
                        <Field
                            type="checkbox"
                            name="termsOfService"
                            value="true"
                        />
                        <button type="submit">Submit</button> */}
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Register;
