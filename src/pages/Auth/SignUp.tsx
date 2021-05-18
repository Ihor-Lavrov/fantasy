import React from 'react';
import { Formik, Form } from 'formik';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import { Input } from "../../components/Input/Input";
import { Label } from "../../components/Label/Label";
import { useDispatch } from "react-redux";
import { CreateUserPayload } from "../../store/user/types";
import { userActions } from "../../store/user/actions";

export const SignUp = () => {
  const dispatch = useDispatch();
  const initialValues: CreateUserPayload = {
    name: '',
    email: '',
    password: '',
  }

  const onSubmit = React.useCallback((values: CreateUserPayload) => {
    dispatch(userActions.createUser(values));
  }, [dispatch])

  return (
    <Box m={5}>
      <Grid container spacing={3}>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          <Form>
            <Grid item xs={12}>
              <Grid item xs={12}>
                <Label htmlFor="name">Name</Label>
              </Grid>
              <Input id='name' name='name' />
            </Grid>
            <Grid item xs={12}>
              <Grid item xs={12}>
                <Label htmlFor="email">Email</Label>
              </Grid>
              <Input id='name' name='email' />
            </Grid>
            <Grid item xs={12}>
              <Grid item xs={12}>
                <Label htmlFor="password">Password</Label>
              </Grid>
              <Input type='password' id='name' name='password' />
            </Grid>
            <Button variant='contained' color='primary' type='submit'>Submit</Button>
          </Form>
        </Formik>
      </Grid>
    </Box>
  )
}