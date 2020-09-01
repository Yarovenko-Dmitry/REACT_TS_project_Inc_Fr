import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../redux/redux-store';
import {recoverPasswordTC} from '../../../redux/passwordRecovery-reducer';
import {useFormik} from 'formik';
import InputField from '../../../common/InputField';
import FormButton from '../../../common/FormBtn';
import FormWrapper from '../../../common/FormWrapper';

export const PasswordRecovery = () => {

	const dispatch = useDispatch();

	const formik = useFormik({
		validateOnBlur: true,
		validateOnChange: false,
		validate: (values) => {
			if (!values.email) {
				return {
					email: 'Email is required'
				};
			}
			else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
				return {
					email: 'Invalid email address'
				};
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
		<FormWrapper onsubmit={formik.handleSubmit} title={'Reset password'}>
			{formik.errors.email ? <div>{formik.errors.email}</div> : null}
			{error ? <div>{error}</div> : null}
			<InputField error={!!formik.errors.email} formik={{...formik.getFieldProps('email')}}
			            type={'email'} label={'Enter your email'}/>
			<FormButton name={'Send'} disable={loading}/>
		</FormWrapper>
	);
};

