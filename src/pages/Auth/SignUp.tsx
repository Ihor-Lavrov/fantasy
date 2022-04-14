import React from "react";
import { useFormik } from "formik";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

import { useDispatch } from "react-redux";
import { CreateUserPayload } from "../../store/user/types";
import { userActions } from "../../store/user/actions";
import TextField from "@material-ui/core/TextField";

export const SignUp = () => {
  const dispatch = useDispatch();
  const initialValues: CreateUserPayload = {
    name: "",
    email: "",
    password: "",
  };

  const onSubmit = React.useCallback(
    (values: CreateUserPayload) => {
      const sanitized = {
        ...values,
        email: values.email.toLowerCase(),
      };
      dispatch(userActions.createUser(sanitized));
    },
    [dispatch]
  );

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <Box m={5}>
      <Grid container spacing={3}>
        <form onSubmit={formik.handleSubmit}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              id="password"
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </Grid>
          <Box sx={{ my: 3 }}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Box>
        </form>
      </Grid>
    </Box>
  );
};
