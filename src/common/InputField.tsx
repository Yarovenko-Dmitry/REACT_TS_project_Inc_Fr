import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const ValidationTextField = withStyles({
    root: {
        '& input:valid + fieldset': {
            borderColor: 'green',
            borderWidth: 2,
        },
        '& input:valid:focus + fieldset': {
            borderLeftWidth: 6,
            padding: '4px !important',
        },
    },
})(TextField);

const useStyles = makeStyles((theme) => ({
    input: {
        marginBottom: '10px'
    }
}));

type PropsType = {
    error?: boolean | string
    formik?: any
    type?: string
    label?: string
    value?: string
    onChange?: any
}

const InputField = ({error = false, formik, type, label, value, onChange}: PropsType) => {

    const classes = useStyles();

    return (
        <ValidationTextField className={classes.input}
                             error={error}
                             helperText={error}
                             label={label}
                             fullWidth
                             required
                             variant="outlined"
                             type={type}
                             {...formik}

        />
    );
};

export default InputField;
