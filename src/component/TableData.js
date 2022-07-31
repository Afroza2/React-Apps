import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Paper } from "@mui/material";
import axios from "axios";

const ride_details_url =
  "https://api.holoapp.tech/rides/brta/get-brta-ride-details";

const access = localStorage.getItem("accessToken");
// let headers = {
//   "Content-Type": "application/json",
//   Authorization: `Bearer ${access}`,
// };

export const TableData = ({ riders }) => {
  const [loading, setLoading] = useState(false);
  const [ride_id, setRideId] = useState("");
  const [details, setDetails] = useState(null);
  const [riderCo, setRiderCo] = useState([]);
  const [userCo, setUserCo] = useState([]);

  const handleCellClick = async (id) => {
    console.log("after id on click", id);

    const params = {
      ride_id: id,
    };
    // const config =  {
    //   params: params,
    //   headers: headers,
    // }
    setLoading(true);
    console.log("calling");
    const res = await axios.get(
      ride_details_url,
      {
        params: { ride_id: id },
        headers: {
          Authorization: "Bearer " + access,
        },
      },
    );
    console.log(res);
  };

  return (
    <div style={{ height: 700, width: "100%" }}>
      <CssBaseline />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Rider ID</TableCell>
              <TableCell align="right">Public Session ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {riders.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  align="right"
                  onClick={() => {
                    console.log("before set ride id", ride_id);
                    const id = row.id;
                    console.log("checking id", id);
                    setRideId(row.id);
                    // console.log("after set ride id", ride_id)
                    handleCellClick(row.id);
                  }}
                >
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.public_session_id}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
