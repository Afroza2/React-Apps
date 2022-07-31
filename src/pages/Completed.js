import React, { useState, useEffect } from "react";
import SideBar from "../component/SideBar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Paper } from "@mui/material";
import {useStyles} from '../styles.js'
import { TableData } from "../component/TableData";
import Grid from "@mui/material/Grid";

const rider_list_url = "https://api.holoapp.tech/rides/brta/get-brta-ride-list";
const ride_details_url = "https://api.holoapp.tech/rides/brta/get-brta-ride-details"
const refresh_url = "https://api.holoapp.tech/accounts/refresh";
const logout_url = "https://api.holoapp.tech/accounts/logout";
const access = localStorage.getItem("accessToken");
// console.log("access", access)
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${access}`,
};

function Completed(props) {

  const classes = useStyles(props);
  const [riderList, setRiderList] = useState([]);
  const [riderListFull, setRiderListFull] = useState([]);

  const [data, setData] = useState({
    phone: "",
  });

  const [errors, setErrors] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    axios
      .get(rider_list_url, {
        headers: headers,
      })
      .then((response) => {
        setRiderListFull(response.data);
        // console.log("list", riderList, response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [riderListFull]);

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const params = {
      phone: data.phone,
    };
    const config = {
      params: params,
      headers: headers,
    };

    axios
      .get(rider_list_url, config)
      .then((response) => {
        setRiderList(response.data);
        // console.log("list", riderList, response.data);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          console.log(error.response);
          const refresh = localStorage.getItem("refreshToken");
          axios.post(refresh_url, refresh).then((request) => {
            if (request.status === 200) {
              console.log("refresh valid");
              localStorage.setItem("accessToken", request.data["access"]);
            } else if (request.status === 401) {
              console.log("invalid so logout");
              axios.post(logout_url, headers).then((response) => {
                localStorage.setItem("accessToken", "");
                localStorage.setItem("refreshToken", "");
                console.log("access", response.data["access"]);
                console.log("refresh", response.data["refresh"]);
                setErrors(true);
                setErrorMsg(error.response.data.detail);
                window.location.href = "/login";
              });
            }
          });
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
    <>
      <SideBar />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        {" "}
        <Grid container className={classes.root} item xs={14} md={8}>
          <CssBaseline />
          <form noValidate onSubmit={handleSubmit}>
            <TextField
              // label="Search"
              type={"search"}
              variant="outlined"
              margin="normal"
              required
              // fullWidth
              id="phone"
              name="phone"
              value={data.phone}
              onChange={handleChange}
            />
            <Button
              type="submit"
              // fullWidth
              variant="contained"
              color="primary"
              className={classes.search}
            >
              Search
            </Button>
          </form>

          <div style={{ height: 500, width: "100%" }}>
            <CssBaseline />
            {data.phone.length === 0 ? (
              <TableData riders={riderListFull} />
            ) : (
              <TableData riders={riderList} />
            )}
          </div>
        </Grid>
      </Box>
    </>
  );
}

export default Completed;
