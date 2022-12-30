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
        // width: 300,
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
                            : "https://placeholder.pics/svg/300"
                    }
                    placeholder="https://placeholder.pics/svg/300"
                    alt="preview"
                    style={styles.image}
                />
                <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="label"
                    sx={{
                        height: 50,
                        width: 50,
                        position: "absolute",
                        bottom: 0,
                        right: 50,
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
                        style={{
                            height: 45,
                            width: 45,
                            color: "#001e3c",
                        }}
                    />
                </IconButton>
            </div>
        </>
    );
};

export default Form;
