import React from 'react';
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {Button, FormControl, FormGroup, FormLabel, Grid, TextField} from "@material-ui/core";
import {Redirect} from 'react-router-dom';
import {RegisterTC} from "../../../redux/register-reducer";
import {AppRootStateType} from "../../../redux/redux-store";
import InputField from "../../../common/InputField";
import FormButton from "../../../common/FormBtn";
import FormWrapper from "../../../common/FormWrapper";
import * as Yup from "yup";

export const RegisterContainer = () => {
    const dispatch = useDispatch()
    const isRegistered = useSelector<AppRootStateType, boolean>(state => state.register.isRegistered)

    const loading = useSelector<AppRootStateType, boolean>(state => state.pwRecoveryRequest.loading);
    const error = useSelector<AppRootStateType, string>(state => state.pwRecoveryRequest.error);
    const success = useSelector<AppRootStateType, boolean>(state => state.pwRecoveryRequest.success);


    const formik = useFormik({
        validate: (values) => {
            if (!values.email) {
                return {
                    email: 'Email is required'
                };
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                return {
                    email: 'Invalid email address'
                };
            }
        },
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {
            dispatch(RegisterTC(values))
        }
    })

    if (isRegistered) {
        return <Redirect to={'/login'}/>
    }

    return (
        <FormWrapper onsubmit={formik.handleSubmit} title={'Register'}>
            {formik.errors.email ? <div>{formik.errors.email}</div> : null}
            {error ? <div>{error}</div> : null}
            <InputField error={!!formik.errors.email} formik={{...formik.getFieldProps('email')}}
                        type={'email'} label={'Enter your email'}/>
            <InputField error={!!formik.errors.password} formik={{...formik.getFieldProps('password')}}
                        type={'password'} label={'Enter your password'}/>
            <FormButton name={'Send'} disable={loading}/>
        </FormWrapper>
    )
}

