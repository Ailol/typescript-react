import React, { useState } from "react";

import { Box, createTheme, IconButton, Theme } from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FormikProps } from "../../constants/Interfaces";
import { Image } from "../Image";

const classes = {
    fontAwesomeIcon: {
        height: "auto",
        width: "auto",
        color: "#001e3c",
        backgroundColor: "white",
        borderRadius: "50%",
    },
};

interface ImageProps {
    preview: Boolean;
}

const s = (theme: Theme) => ({
    image: {
        marginBottom: 15,
        width: "100%",
        height: "auto",
        borderRadius: 300,
        flex: 1,
        objectFit: "cover",
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
            height: "45%",
            width: "45%",
        },
        [theme.breakpoints.down("lg")]: {
            height: "55%",
            width: "55%",
        },
    },
});

const FormikImageUpload: React.FC<ImageProps & FormikProps> = ({
    preview,
    formik,
}) => {
    const [image, setImage] = useState<Blob | MediaSource>(new Blob([]));
    // const theme = useTheme();
    const theme = createTheme();

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
                        : "https://robohash.org/mail@ashallendesign.co.uk"
                }
                alt="Description of image"
                // width={100}
                // height={100}
                sx={s(theme).image}
            />

            <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
                sx={s(theme).iconButton}
            >
                <input
                    id="image"
                    accept="image/*"
                    onChange={(e) => handleChange(e)}
                    type="file"
                    hidden
                />

                <FontAwesomeIcon
                    icon={faCirclePlus}
                    border
                    style={classes.fontAwesomeIcon}
                />
            </IconButton>
        </Box>
    );
};

export default FormikImageUpload;
