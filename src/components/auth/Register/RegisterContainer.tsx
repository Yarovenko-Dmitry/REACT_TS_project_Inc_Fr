import React from 'react';
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {Button, FormControl, FormGroup, FormLabel, Grid, TextField} from "@material-ui/core";
import {Redirect} from 'react-router-dom';
import {RegisterTC} from "../../../redux/register-reducer";
import {AppRootStateType} from "../../../redux/redux-store";

export const RegisterContainer = () => {
    const dispatch = useDispatch()
    const isRegistered = useSelector<AppRootStateType, boolean>(state => state.register.isRegistered)
    const formik = useFormik({
        validate: (values: any) => {
            if (!values.email) {
                return {
                    email: 'Email is required'
                }
            }
            if (!values.password) {
                return {
                    password: 'Password is required'
                }
            }
        },
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => {
            dispatch(RegisterTC(values))
        }
    })

    if (isRegistered) {
        return <Redirect to={'/login'}/>
    }

    return (
        <Grid container justify="center">
            <Grid item xs={4}>
                <form onSubmit={formik.handleSubmit}>
                    <FormControl>
                        <FormLabel>
                            <p>
                                Registration
                            </p>
                        </FormLabel>
                        <FormGroup>
                            <TextField
                                label="Email"
                                margin="normal"
                                {...formik.getFieldProps('email')}
                            />
                            {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                            <TextField
                                type="password"
                                label="Password"
                                margin="normal"
                                {...formik.getFieldProps('password')}
                            />
                            {formik.errors.password ? <div>{formik.errors.email}</div> : null}
                            <Button type={'submit'} variant={'contained'} color={'primary'}>Register</Button>
                        </FormGroup>
                    </FormControl>
                </form>
            </Grid>
        </Grid>
    )
}

