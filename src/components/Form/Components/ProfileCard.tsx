import {
    Avatar,
    Card,
    CardHeader,
    List,
    ListItem,
    Typography,
} from "@mui/material";
import React from "react";
import { truncate } from "lodash";

const styles = {
    root: {
        maxWidth: 345,
        margin: 1,
    },
    avatar: {
        height: "auto",
        width: "auto",
        maxWidth: 30,
        maxHeight: 30,
    },
};

interface ProfileCardProps {
    name: string;
    email: string;
    birthdate: string;
    about: string;
    avatarUrl: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
    name,
    email,
    birthdate,
    about,
    avatarUrl,
}) => {
    console.log(name);
    return (
        <Card sx={styles.root}>
            <CardHeader
                avatar={<Avatar src={avatarUrl} sx={styles.avatar} />}
                title={name}
                subheader={email}
            />
            <List>
                <ListItem>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        Fødselsdato: {birthdate}
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        Kort om: {truncate(about, { length: 15 })}
                    </Typography>
                </ListItem>
            </List>
        </Card>
    );
};

export default ProfileCard;
