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
      });
  }, [data]);

  return <div>this is home page</div>;
}
