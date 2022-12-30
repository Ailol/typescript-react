import React, { useState } from "react";

import { IconButton } from "@mui/material";
import "../../../assets/Form.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FormikProps } from "../../../types/Interfaces";
const styles = {
    form: {
        display: "flex",
        flexDirection: "column",
    },
    image: {
        marginBottom: 15,
        // height: 300,
        // width: "20vw",
        width: "100%",
        height: "auto",
        borderRadius: 300,
        flex: 1,
    },
};

interface ImageProps {
    preview: Boolean;
}

const Form: React.FC<ImageProps & FormikProps> = ({ preview, formik }) => {
    const [image, setImage] = useState<Blob | MediaSource>(new Blob([]));
    // setImage(imageUrl);

    const handleChange = (e: any) => {
        const file = e.target.files?.[0];
        const imageUrl = file ? URL.createObjectURL(file) : "";
        console.log(imageUrl);
        formik.setFieldValue("image", imageUrl);
        // formik.handleChange(e);
        setImage(e.target.files?.[0] ?? new Blob([]));
    };

    return (
        <>
            <div style={{ position: "relative", marginBottom: "10px" }}>
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
                    sx={{
                        height: "auto",
                        width: 50,
                        // position: "relative",
                        bottom: 0,
                        // right: "-55%",
                        borderColor: "white",
                        borderWidth: "1px",
                        border: "1px",
                        position: "absolute",
                        top: "85%",
                        left: "70%",
                        transform: "translate(-50%, -50%)",
                    }}
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
                        style={{
                            borderRadius: "50%",
                            height: 45,
                            width: 45,
                            color: "#001e3c",
                            position: "absolute",
                            backgroundColor: "white",
                            // borderRadius: 20,

                            border: 1,
                        }}
                    />
                </IconButton>
            </div>
        </>
    );
};

export default Form;
