export interface FormikProps {
    formik: {
        handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
        setFieldValue: (field: string, value: any) => void;
        values: any;
        errors: any;
        touched: any;
    };
}

export interface FormStyles {
    container: React.CSSProperties;
    form: React.CSSProperties;
    grid: React.CSSProperties;
    card: React.CSSProperties;
    cardHeader: React.CSSProperties;
    imageCard: React.CSSProperties;
    button: React.CSSProperties;
}
