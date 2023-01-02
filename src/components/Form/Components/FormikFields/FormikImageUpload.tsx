import React, { useState } from "react";

import { Box, createTheme, IconButton, Theme } from "@mui/material";

import { FormikProps } from "../../validation/formikProps";
import { Image } from "../Image";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";

interface ImageProps {
    preview: Boolean;
}

const styles = (theme: Theme) => ({
    image: {
        marginBottom: 15,
        width: "100%",
        height: "auto",
        borderRadius: 300,
        flex: 1,
        objectFit: "contain",
    },
    iconButton: {
        height: "25%",
        width: "25%",
        bottom: 0,

        fontSize: "80%",
        position: "absolute",
        top: "65%",
        left: "70%",
        transform: "translate(-50%, -50%)",
        objectPosition: "100% 0",
        [theme.breakpoints.down("sm")]: {
            height: "15%",
            width: "15%",
        },
        [theme.breakpoints.down("md")]: {
            height: "20%",
            width: "20%",
        },
        [theme.breakpoints.down("lg")]: {
            height: "25%",
            width: "25%",
        },
    },
    icon: {
        height: "auto",
        width: "auto",
        color: "#001e3c",
        backgroundColor: "white",
        borderRadius: "50%",
    },
});

const FormikImageUpload: React.FC<ImageProps & FormikProps> = ({
    preview,
    formik,
}) => {
    const [image, setImage] = useState<Blob | MediaSource>(new Blob([]));

    const theme = createTheme();

    // for setting state of preview
    const handleChange = (e: any) => {
        const file = e.target.files?.[0];
        const imageUrl = file ? URL.createObjectURL(file) : "";
        console.log(imageUrl);
        formik.setFieldValue("image", imageUrl);
        setImage(e.target.files?.[0] ?? new Blob([]));
    };

    return (
        <Box
            sx={{
                position: "relative",
                marginBottom: "10px",
            }}
        >
            <Image
                src={
                    image instanceof Blob && image.size !== 0
                        ? URL.createObjectURL(image)
                        : "https://t4.ftcdn.net/jpg/04/84/75/59/360_F_484755984_M62B59ThGEYcXS4MdeTyEKJcf0Satp6H.jpg"
                }
                alt="Description of image"
                sx={styles(theme).image}
            />

            <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
                sx={styles(theme).iconButton}
            >
                <input
                    id="image"
                    accept="image/*"
                    onChange={(e) => handleChange(e)}
                    type="file"
                    hidden
                />
                <AddCircleSharpIcon sx={styles(theme).icon} />
            </IconButton>
        </Box>
    );
};

export default FormikImageUpload;
