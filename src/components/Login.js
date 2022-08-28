import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
// import Alert from "@material-ui/core/Alert";
import Grid from "@material-ui/core/Grid";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
// import Stack from "@material-ui/core/Stack";
import { useStyles } from "../style.js";

import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";

 const theme = createTheme({
    palette: {
      primary: {
        main: "#121212",
      },
    },
  });

const login_url = "https://api.holoapp.tech/accounts/login";

export default function Login(props) {
  const classes = useStyles(props);
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username: data.username,
      password: data.password,
    };
    axios
      .post(login_url, userData)
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("accessToken", response.data["access"]);
          localStorage.setItem("refreshToken", response.data["refresh"]);
          console.log(response.status);
          console.log(response.data);
          console.log("access", response.data["access"]);
          console.log("refresh", response.data["refresh"]);
          console.log("local storage", localStorage.getItem("access"));
          window.location.href = "/home";
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log("server responded");
          setErrors(true);
          setErrorMsg(error.response.data.detail);
        } else if (error.request) {
          console.log("network error");
        } else {
          console.log(error);
        }
      });
  };

  return (
    <Grid container className={classes.root} item xs={12} md={5}>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <Grid>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              label="Username"
              variant="outlined"
              color="primary"
              margin="normal"
              required
              fullWidth
              id="username"
              name="username"
              value={data.username}
              onChange={handleChange}
            />
            <TextField
              label="Password"
              type={"password"}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              color="primary"
              variant="contained"
              className={classes.submit}
            >
              Sign In
            </Button>
          </form>
          {/*<Stack sx={{ width: "100%" }} spacing={2}>*/}
          {/*  {errors ? <Alert severity="error">{errorMsg}</Alert> : ""}*/}
          {/*</Stack>*/}
        </Grid>
      </MuiThemeProvider>
    </Grid>
  );
}