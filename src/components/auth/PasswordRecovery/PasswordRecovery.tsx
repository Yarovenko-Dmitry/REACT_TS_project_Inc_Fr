import React, {useEffect, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import EmailIcon from '@material-ui/icons/Email';
import Typography from '@material-ui/core/Typography';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../redux/redux-store';
import {recoverPasswordTC} from '../../../redux/passwordRecovery-reducer';
import {useFormik} from 'formik';

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
	submit: {
		margin: theme.spacing(3, 0, 2),
		backgroundColor: '#e4b61a',
		'&:hover': {
			backgroundColor: '#2c3258'
		}
	},
}));

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

export const PasswordRecovery = () => {

	const classes = useStyles();
	const dispatch = useDispatch();

	const formik = useFormik({
		validateOnBlur: true,
		validateOnChange: false,
		validate: (values) => {
			if(!values.email) {
				return {
					email: 'Email is required'
				}
			}else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
				return {
					email: 'Invalid email address'
				}
			}
		},
		initialValues: {
			email: ''
		},
		onSubmit: values => {
			const {email} = values;
			dispatch(recoverPasswordTC(email.trim()));
		},
	});

	const error = useSelector<AppRootStateType, string>(state => state.pwRecoveryRequest.error);
	const success = useSelector<AppRootStateType, boolean>(state => state.pwRecoveryRequest.success);
	const loading = useSelector<AppRootStateType, boolean>(state => state.pwRecoveryRequest.loading);

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline/>
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<EmailIcon/>
				</Avatar>
				<Typography component="h1" variant="h5">
					Reset password
				</Typography>
				<form className={classes.form} onSubmit={formik.handleSubmit}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							{formik.errors.email ? <div>{formik.errors.email}</div> : null}
							<ValidationTextField
								error={!!formik.errors.email}
								helperText={error || success}
								label="Email Address"
								fullWidth
								required
								variant="outlined"
								name="email"
								autoComplete="email"
								id="validation-outlined-input"
								{...formik.getFieldProps('email')}
							/>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						disabled={loading}
					>
						Send
					</Button>
				</form>
			</div>
		</Container>
	);
};

export default PasswordRecovery;