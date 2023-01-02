import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addUser, resetStore } from "../../../reducers/userReducer";

import {
    registerValidation,
    formInitialValues,
} from "./registrationValidation";

export const useFormikForm = () => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: formInitialValues,
        validationSchema: registerValidation,
        onSubmit: (values) => {
            dispatch(addUser(values));
            console.log(values);
        },
    });

    const handleReset = (formik: any) => {
        formik.resetForm();
        dispatch(resetStore());
    };

    return { ...formik, handleReset };
};
