import React from 'react'
import {TextField} from "@material-ui/core";
import {makeStyles, withStyles} from "@material-ui/core/styles";

const FindTextField = withStyles({
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
    formik: any
    type: string
    label?: string
}

export const Find = ({formik, type, label}: PropsType) => {
    const classes = useStyles()
    return (
        <div>
            <form noValidate autoComplete="off">
                <FindTextField className={classes.input} id="outlined-basic" label={label} variant="outlined"
                               required
                               type={type}
                               {...formik}/>
            </form>
        </div>
    )
}

