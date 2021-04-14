import React from 'react'
import { Formik, Form, Field } from 'formik';

export const SignIn = () => {
  const initialValues = {
    login: '',
    password: '',
  }

  const onSubmit = (values: any) => {
    console.log(values);
  }
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <label htmlFor="login">Login</label>
          <Field id='login' name='login' />
          <label htmlFor="password">Password</label>
          <Field id='password' name='password' />
        </Form>
      </Formik>
    </>
  )
}
