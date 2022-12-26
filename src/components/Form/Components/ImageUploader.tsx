import React, { useState } from "react";

import { Button } from "@mui/material";

const styles = {
    form: {
        display: "flex",
        flexDirection: "column",
    },
    image: { height: 300, width: 300, flex: 1 },
};

interface Props {
    preview: Boolean;
    formik?: {
        handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
        values: any;
        errors: any;
        touched: any;
    };
}

const Form: React.FC<Props> = ({ preview, formik }) => {
    const [image, setImage] = useState<Blob | MediaSource>(new Blob([]));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        formik?.handleChange(e);
        console.log(image);
        setImage(e.target.files?.[0] ?? new Blob([]));
    };
    return (
        <>
            {preview ? (
                <img
                    src={
                        image instanceof Blob && image.size !== 0
                            ? URL.createObjectURL(image)
                            : "https://placeholder.pics/svg/300"
                    }
                    placeholder="https://placeholder.pics/svg/300"
                    alt="preview"
                    style={styles.image}
                />
            ) : (
                <></>
            )}

            <Button variant="contained" component="label">
                Upload
                <input
                    id="image"
                    accept="image/*"
                    onChange={(e) =>
                        formik
                            ? handleChange(e)
                            : setImage(e.target.files?.[0] ?? new Blob([]))
                    }
                    type="file"
                    hidden
                />
            </Button>
        </>
    );
};

export default Form;
