export interface FormikProps {
    formik: {
        handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
        setFieldValue: (field: string, value: any) => void;
        values: any;
        errors: any;
        touched: any;
    };
}
