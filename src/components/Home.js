import React, { useEffect, useState } from "react";
import axios from "axios";

const access = localStorage.getItem("accessToken");
console.log("access", access);
const refresh = localStorage.getItem("refreshToken");
console.log("refresh", refresh);

const details = "an api";
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${access}`,
};

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(details, {
        headers: headers,
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      if (error.response.status === 401) {
          console.log(error.response);

          axios.post(refresh_url, refresh).then((request) => 
 {
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

                window.location.href = "/login";
              });
      });
  }, [data]);

  return <div>this is home page</div>;
}
