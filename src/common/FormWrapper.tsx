import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: '#2c3258',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
}));

type PropsType = {
    onsubmit: any
    title: string
    children: any
}

const FormWrapper = ({onsubmit, children, title}: PropsType) => {

    function onSubmit(e: any) {
        e.preventDefault()
        onsubmit()
    }

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOpenIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    {title}
                </Typography>
                <form className={classes.form} onSubmit={onSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            {children}
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
};

export default FormWrapper;
