import { Box, BoxProps } from "@mui/material";

type ImgProps = {
    alt: string;
    src: string;
    // add more HTML img attributes you need
};

export const Image = (props: BoxProps & ImgProps) => (
    <Box component="img" {...props} />
);
