import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AuthData } from "../../store/auth/types";
import { authActions } from "../../store/auth/actions";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { playerActions } from "../../store/player/actions";

export const SignIn = () => {
  const dispatch = useDispatch();
  const initialValues: AuthData = {
    email: "",
    password: "",
  };

  const onSubmit = (values: AuthData) => {
    const sanitized = {
      ...values,
      email: values.email.toLowerCase(),
    };
    dispatch(authActions.login(sanitized));
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  const check = () => {
    dispatch(playerActions.getPlayersList());
  };

  return (
    <Box m={5}>
      <Grid container spacing={3}>
        <form onSubmit={formik.handleSubmit}>
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
              type="password"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </Grid>
          <Box my={2}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Box>

          <Box my={2}>
            <Button variant="contained" color="primary" onClick={check}>
              Check
            </Button>
          </Box>

          <Link to="/signUp">SignUp</Link>
        </form>
      </Grid>
    </Box>
  );
};
