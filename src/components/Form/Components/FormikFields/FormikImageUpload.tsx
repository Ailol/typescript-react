import React, { useState } from "react";

import {
    Box,
    createMuiTheme,
    createStyles,
    IconButton,
    Theme,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { makeStyles, Styles, withStyles } from "@mui/styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FormikProps } from "../../constants/Interfaces";

// const theme = createMuiTheme({
//     breakpoints: {
//         values: {
//             xs: 0,
//             sm: 600,
//             md: 960,
//             lg: 1280,
//             xl: 1920,
//         },
//     },
// });

const styles = {
    form: {
        display: "flex",
        flexDirection: "column",
    },
    image: {
        marginBottom: 15,
        // height: 300,
        // width: "20vw",
        width: "20vw",
        height: "auto",

        borderRadius: 300,
        flex: 1,
    },
    iconButton: {
        height: "auto",
        width: 50,
        bottom: 0,
        borderColor: "white",
        borderWidth: "1px",
        border: "1px",
        position: "absolute",
        top: "85%",
        left: "70%",
        transform: "translate(-50%, -50%)",
        // objectFit: "cover",
        objectPosition: "100% 0",
    },
};

interface ImageProps {
    preview: Boolean;
}

const s = (theme: Theme) => ({
    box: {
        position: "absolute",
        height: "auto",
        width: "5vw",
        top: "-205%",
        left: "1050%",

        transform: "translate(-50%, -50%)",
        [theme.breakpoints.down("sm")]: {
            height: "10px",
            width: "10px",
        },
        [theme.breakpoints.down("md")]: {
            height: "10px",
            width: "10px",
        },
        [theme.breakpoints.down("lg")]: {
            height: "150px",
            width: "150px",
        },
    },
});
const FormikImageUpload: React.FC<ImageProps & FormikProps> = ({
    preview,
    formik,
}) => {
    const [image, setImage] = useState<Blob | MediaSource>(new Blob([]));
    const theme = useTheme();
    // const styles = useStyles(theme);
    // const matches = useMediaQuery("(max-width:480px)");
    const handleChange = (e: any) => {
        const file = e.target.files?.[0];
        const imageUrl = file ? URL.createObjectURL(file) : "";
        console.log(imageUrl);
        formik.setFieldValue("image", imageUrl);
        // formik.handleChange(e);
        setImage(e.target.files?.[0] ?? new Blob([]));
    };

    return (
        <Box
            sx={{
                position: "relative",
                marginBottom: "10px",
            }}
        >
            <img
                src={
                    image instanceof Blob && image.size !== 0
                        ? URL.createObjectURL(image)
                        : "https://robohash.org/mail@ashallendesign.co.uk"
                }
                placeholder="https://robohash.org/mail@ashallendesign.co.uk"
                alt="preview"
                style={styles.image}
            />
            <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
                // sx={s(theme).box}
            >
                <input
                    id="image"
                    accept="image/*"
                    onChange={(e) => handleChange(e)}
                    type="file"
                    hidden
                />
                <Box sx={s(theme).box}>
                    <FontAwesomeIcon
                        icon={faCirclePlus}
                        border
                        style={{
                            // display: "flex",
                            borderRadius: "50%",
                            // top: "50%",
                            // left: "5%",
                            height: "100%",

                            width: "auto",
                            color: "#001e3c",
                            // position: "absolute",
                            backgroundColor: "white",
                            border: 1,
                        }}
                    />
                </Box>
            </IconButton>
        </Box>
    );
};

export default FormikImageUpload;
