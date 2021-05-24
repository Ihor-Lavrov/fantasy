import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { AuthData } from "../../store/auth/types";
import { authActions } from "../../store/auth/actions";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { playerActions } from "../../store/player/actions";

const useStyles = makeStyles({
  container: {
    maxWidth: "1200px",
    padding: "10px",
    background: "lightyellow",
  },
});

export const SignIn = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
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
    console.log('checked')
    dispatch(playerActions.getPlayersList());
  };

  return (
    <Grid container spacing={2} className={classes.container}>
      <div className="test">test</div>
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
  );
};
