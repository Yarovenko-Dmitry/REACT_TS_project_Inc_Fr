import React from 'react';
import {useParams, Redirect} from 'react-router-dom';
import style from './passwordCreation.module.css';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {setNewPasswordTC} from '../../../redux/pssawordCreation-reducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../redux/redux-store';

const validationSchema = Yup.object().shape({
	password: Yup.string().required('This field is required'),
	changepassword: Yup.string().when('password', {
		is: val => (val && val.length > 0 ? true : false),
		then: Yup.string().oneOf(
			[Yup.ref('password')],
			'Both password need to be the same'
		)
	})
});

export const PasswordCreation = () => {

	const error = useSelector<AppRootStateType, any>(state => state.passwordUpdate.error);
	const success = useSelector<AppRootStateType, any>(state => state.passwordUpdate.success);
	const loading = useSelector<AppRootStateType, any>(state => state.passwordUpdate.loading);

	const {token} = useParams();
	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues: {
			password: '',
			changepassword: ''
		},
		validationSchema,
		onSubmit: values => {
			const {password} = values;
			dispatch(setNewPasswordTC(password, token));
		}
	});

	if (success) {
		window.confirm('Your password has been changed!')
		return <Redirect to={'/'}/>;
	}

	return (
		<section>
			<div className={style.container}>
				<div className={style.wrapper}>
					<div className={style.form}>
						<h1>Set new password</h1>
						<form onSubmit={formik.handleSubmit}>
							<div className={style.error}>{formik.errors.changepassword}</div>
							<div className={style.error}>{error}</div>
							<span className="error" style={{color: 'red'}}>
              {formik.errors.password}
            </span>
							<input
								placeholder="Enter new password"
								required
								type="password"
								name="password"
								onBlur={formik.handleBlur}
								onChange={formik.handleChange}
								value={formik.values.password}
							/>
							<span className="error" style={{color: 'red'}}>
              {formik.errors.password}
            </span>
							<input
								placeholder="Confirm Password"
								required
								type="password"
								name="changepassword"
								onBlur={formik.handleBlur}
								onChange={formik.handleChange}
								value={formik.values.changepassword}
							/>
							<button disabled={loading || formik.errors.changepassword || formik.errors.password} className={style.btn}>Send</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};