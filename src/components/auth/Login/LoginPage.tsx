import React from 'react';
import {useFormik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {setLoginTC} from '../../../redux/login-reducer';
import {AppRootStateType} from '../../../redux/redux-store';


export const LoginPage = () => {
  const getState = useSelector<AppRootStateType, string>(state => state.login.email)
  return (
    <div>
      LoginPage
      {getState}
      <LoginForm/>
    </div>
  )
}

const LoginForm = () => {
  const dispatch = useDispatch()
  const formik: any = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false
    },
    onSubmit: values => {
      const {email, password, rememberMe} = values
      dispatch(setLoginTC(email, password, rememberMe))
      console.log(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <label htmlFor="password">password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <label htmlFor="rememberMe">rememberMe</label>
      <input
        id="rememberMe"
        name="rememberMe"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.rememberMe}
      />
      <button type="submit">Submit</button>
    </form>
  );
};