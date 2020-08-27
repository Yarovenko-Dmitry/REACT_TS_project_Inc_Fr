import React from 'react';
import style from './recoveryPage.module.css';
import {useFormik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {recoverPasswordTC} from '../../../redux/passwordRecovery-reducer';
import {AppRootStateType} from '../../../redux/redux-store';

export const PasswordRecovery = () => {

	const dispatch = useDispatch();

	const error = useSelector<AppRootStateType, string>(state => state.pwRecoveryRequest.error);
	const success = useSelector<AppRootStateType, boolean>(state => state.pwRecoveryRequest.success);
	const loading = useSelector<AppRootStateType, boolean>(state => state.pwRecoveryRequest.loading);

	const formik = useFormik({
		initialValues: {
			email: ''
		},
		onSubmit: values => {
			const {email} = values;
			dispatch(recoverPasswordTC(email.trim()));
		}
	});

	return (
		<section>
			<div className={style.container}>
				<div className={style.wrapper}>
					<div className={style.form}>
						<h1>Forgot password?</h1>
						<form onSubmit={formik.handleSubmit}>
							<div className={style.error}>{error}</div>
							{success &&
                            <div className={style.success}>An email with further instructions has
                                been sent to the address provided. Please check your email!</div>}
							<input type="email" required placeholder="Enter your email"
							       {...formik.getFieldProps('email')}
							/>
							<button disabled={loading} className={style.btn}>Send</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

