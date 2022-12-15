import { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {
    Button,
    FormControl,
    FormLabel,
    Radio,
    RadioGroup,
} from "@mui/material";

import "../assets/Form.css";

import { addUser, User, resetStore } from "../reducers/userReducer";
import { buttonLabels, formLabels, inputType } from "../types/types";
import { isValidForm } from "../utils/helpers";
import { useDispatch } from "react-redux";
import Header from "./Header";

const styles = {
    grid: {
        direction: "column",
        justify: "space-around",
        alignItems: "center",
    },
    button: { mt: 3, ml: 1 },
};

const FormGrid: React.FC = (props) => {
    const dispatch = useDispatch();
    const [formValues, setFormValues] = useState<User>({});
    const [missingValues, setMissingValues] = useState(false);

    const handleInput = (e: any, type: string) => {
        switch (type) {
            case inputType.FIRST_NAME:
                setFormValues({
                    ...formValues,
                    firstName: e.target.value,
                });
                return;
            case inputType.LAST_NAME:
                setFormValues({
                    ...formValues,
                    lastName: e.target.value,
                });
                return;
            case inputType.AGE:
                setFormValues({
                    ...formValues,
                    age: e.target.value,
                });
                return;
            case inputType.TERMS_OF_SERVICE:
                setFormValues({
                    ...formValues,
                    termsOfService: e.target.value,
                });
                return;

            case inputType.GENDER:
                setFormValues({
                    ...formValues,
                    gender: e.target.value,
                });
                return;
            default:
                return;
        }
    };
    const onSubmit = (e: any) => {
        if (isValidForm(formValues)) {
            setMissingValues(false);
            dispatch(addUser(formValues));
        } else {
            setMissingValues(true);
        }
    };

    const onReset = () => {
        setFormValues({});
        dispatch(resetStore());
    };

    return (
        <>
            <Header title="Registrèr" />

            <div className="form__style">
                <FormControl>
                    <Grid container spacing={3} sx={styles.grid}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="firstName"
                                name="firstName"
                                label={formLabels.firstName}
                                fullWidth
                                variant="standard"
                                onChange={(e) =>
                                    handleInput(e, inputType.FIRST_NAME)
                                }
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="lastName"
                                name="lastName"
                                label={formLabels.lastName}
                                fullWidth
                                onChange={(e) =>
                                    handleInput(e, inputType.LAST_NAME)
                                }
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="age"
                                name="age"
                                label={formLabels.age}
                                fullWidth
                                onChange={(e) => handleInput(e, inputType.AGE)}
                                variant="standard"
                                type="number"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormLabel>{formLabels.gender}</FormLabel>
                            <RadioGroup row defaultValue="Initial">
                                <FormControlLabel
                                    control={
                                        <Radio
                                            required
                                            value="Female"
                                            title="Female"
                                            onClick={(e) =>
                                                handleInput(e, inputType.GENDER)
                                            }
                                        />
                                    }
                                    label={formLabels.female}
                                />
                                <FormControlLabel
                                    control={
                                        <Radio
                                            required
                                            value="Male"
                                            title="Male"
                                            onClick={(e) =>
                                                handleInput(e, inputType.GENDER)
                                            }
                                        />
                                    }
                                    label={formLabels.male}
                                />
                            </RadioGroup>
                        </Grid>
                        <Grid item xs={6}>
                            {" "}
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        required
                                        color="secondary"
                                        name="saveAddress"
                                        value={true}
                                        onClick={(e) =>
                                            handleInput(
                                                e,
                                                inputType.TERMS_OF_SERVICE
                                            )
                                        }
                                    />
                                }
                                label={formLabels.termsOfService}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            {missingValues ? (
                                <h1>{formLabels.missingValues}</h1>
                            ) : (
                                <></>
                            )}
                            <Button
                                color="secondary"
                                variant="contained"
                                sx={styles.button}
                                onClick={onReset}
                            >
                                {buttonLabels.reset}
                            </Button>
                            <Button
                                type="submit"
                                color="primary"
                                variant="contained"
                                sx={styles.button}
                                onClick={(e) => onSubmit(e)}
                            >
                                {buttonLabels.next}
                            </Button>
                        </Grid>
                    </Grid>
                </FormControl>
            </div>
        </>
    );
};

export default FormGrid;
