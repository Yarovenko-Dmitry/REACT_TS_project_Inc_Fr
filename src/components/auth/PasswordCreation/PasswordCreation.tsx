import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../redux/redux-store';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import {setNewPasswordTC} from '../../../redux/pssawordCreation-reducer';
import {useParams, Redirect} from 'react-router-dom';
import InputField from '../../../common/InputField';
import FormButton from '../../../common/FormBtn';
import FormWrapper from '../../../common/FormWrapper';

export const PasswordCreation = () => {

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

	const {token} = useParams();
	const dispatch = useDispatch();

	const formik = useFormik({
		validateOnBlur: true,
		validateOnChange: false,
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

	const error = useSelector<AppRootStateType, string>(state => state.passwordUpdate.error);
	const success = useSelector<AppRootStateType, boolean>(state => state.passwordUpdate.success);
	const loading = useSelector<AppRootStateType, boolean>(state => state.passwordUpdate.loading);

	if (success) {
		window.confirm('Your password has been changed!');
		return <Redirect to={'/login'}/>;
	}

	return (
		<FormWrapper onsubmit={formik.handleSubmit} title={'Set new password'}>
			{formik.errors.password ? <div>{formik.errors.password}</div> : null}
			{error ? <div>{error}</div> : null}
			<InputField error={!!formik.errors.password}
			            formik={{...formik.getFieldProps('password')}}
			            type={'password'} label={'Enter new password'}/>
			{formik.errors.changepassword ? <div>{formik.errors.changepassword}</div> : null}
			<InputField error={!!formik.errors.changepassword}
			            formik={{...formik.getFieldProps('changepassword')}}
			            type={'password'} label={'Confirm new password'}/>
			<FormButton name={'Send'} disable={loading}/>
		</FormWrapper>

	);
};

