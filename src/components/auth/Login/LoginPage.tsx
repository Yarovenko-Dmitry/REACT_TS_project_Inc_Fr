import React from 'react';
import {ErrorMessage, Field, Form, Formik} from 'formik';


export const LoginPage = () => {
  return (
    <div>
      LoginPage
      <LoginForm/>
    </div>
  )
}

const loginFormValidate = (values: any) => {
  const errors: any = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }
}

const LoginForm = () => {

  const submit = (values: any, {setSubmitting} : {setSubmitting: (isSubmitting: boolean) => void}) => {


    // setTimeout(() => {
    //   // alert(JSON.stringify(values, null, 2));
    //   setSubmitting(false);
    // }, 400);
  }

  return (
    <div>
      <Formik
        initialValues={{email: '', password: ''}}
        validate={loginFormValidate}
        onSubmit={submit}
      >
        {({isSubmitting}) => (
          <Form>
            <Field type="email"
                   name="email"
                   placeholder="email"
            />
            <ErrorMessage name="email"
                          component="div"/>
            <Field type="password"
                   name="password"
                   placeholder="password"/>
            <ErrorMessage name="password"
                          component="div"/>
            <button type="submit"
                    disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )

}


