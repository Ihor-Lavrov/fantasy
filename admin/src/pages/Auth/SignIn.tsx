import React from 'react'
import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { AuthData } from "../../store/auth/types";
import { authActions } from "../../store/auth/actions";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  input: {}
})

export const SignIn = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const initialValues: AuthData = {
    email: '',
    password: '',
  }

  const onSubmit = (values: AuthData) => {
    dispatch(authActions.login(values))
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <label htmlFor="email">Email</label>
        <Field className={classes.input} id='email' name='email' />
        <label htmlFor="password">Password</label>
        <Field id='password' name='password' />
        <Button variant='contained' color='primary' type='submit'>Submit</Button>
        <Link to='/signUp'>SignUp</Link>
      </Form>
    </Formik>
  )
}
