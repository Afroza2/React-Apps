import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";
import axios from "axios";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  CircleMarker,
} from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import userIcon from "leaflet/dist/images/user.png";
import riderIcon from "leaflet/dist/images/rider.png";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
const ride_details_url =
  "https://api.holoapp.tech/rides/brta/get-brta-ride-details";

const access = localStorage.getItem("accessToken");

const p = "Please click an ID to load the map";

export const TableData = ({ riders }) => {
  const [ride_id, setRideId] = useState("");
  const [riderCo, setRiderCo] = useState([]);
  const [userCo, setUserCo] = useState([]);
  const [centerR, setCenterR] = useState([23.7627299, 90.3565364]);
  const [centerU, setCenterU] = useState([23.7627299, 90.3565364]);

  const handleCellClick = (id) => {
    console.log("after id on click", id);

    console.log("calling");
    axios
      .get(ride_details_url, {
        params: { ride_id: id },
        headers: {
          Authorization: "Bearer " + access,
        },
      })
      .then((response) => {
        console.log(
          "checking riders",
          response.data.rider_route_coordinates,
          typeof response.data.rider_route_coordinates
        );
        console.log("fggfg", response.status, response.data);
        if (response.status === 200) {
          let rider_co_data = response.data.rider_route_coordinates;
          let user_co_data = response.data.user_route_coordinates;
          if (Object.values(rider_co_data).length !== 0) {
            setRiderCo(rider_co_data);
            // console.log("center", Object.values(rider_co_data)[0])
            setCenterR(Object.values(rider_co_data)[0]);
          }
          if (Object.values(user_co_data).length !== 0) {
            setUserCo(user_co_data);
            setCenterU(Object.values(user_co_data)[0]);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      style={{
        height: 800,
        width: "100%",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <CssBaseline />
      <div
        style={{
          margin: "20px",
          padding: "20px",
        }}
      >
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 500 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Rider ID</TableCell>
                <TableCell align="right">Status</TableCell>
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
                      // console.log("before set ride id", ride_id);
                      // const id = row.id;
                      // console.log("checking id", id);
                      setRideId(row.id);
                      // console.log("after set ride id", ride_id)
                      handleCellClick(row.id);
                    }}
                  >
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div
        style={{
          margin: "20px",
          padding: "20px",
        }}
      >
        <div>
          {ride_id ? (
            <MapContainer
              zoom={14}
              center={Object.values(centerR)}
              style={{ height: "400px", width: "800px" }}
              scrollWheelZoom={false}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <div>
                {Object.values(riderCo).length > 0
                  ? Object.values(riderCo).map((m, index) => {
                      // console.log("split data",m.split(",").map(Number)[0], m.split(",").map(Number)[1])
                      return (
                        <Marker
                          key={index}
                          position={[
                            m.split(",").map(Number)[0],
                            m.split(",").map(Number)[1],
                          ]}
                          icon={
                            new Icon({
                              iconUrl: riderIcon,
                              iconSize: [25, 41],
                              iconAnchor: [12, 41],
                            })
                          }
                        >
                          <Popup>
                            <strong>Riders</strong>
                          </Popup>
                        </Marker>
                      );
                    })
                  : ""}
              </div>
              <div>
                {Object.values(userCo).length > 0
                  ? Object.values(userCo).map((m, index) => {
                      // console.log("split data",m.split(",").map(Number)[0], m.split(",").map(Number)[1])
                      return (
                        <Marker
                          key={index}
                          position={[
                            m.split(",").map(Number)[0],
                            m.split(",").map(Number)[1],
                          ]}
                          icon={
                            new Icon({
                              iconUrl: userIcon,
                              iconSize: [25, 41],
                              iconAnchor: [12, 41],
                            })
                          }
                        >
                          <Popup>
                            <strong>Users</strong>
                          </Popup>
                        </Marker>
                      );
                    })
                  : ""}
              </div>
            </MapContainer>
          ) : (
            <Typography
              variant="h6"
              component="h6"
              align="center"
              width="300px"
              style={{
                wordWrap: "break-word",
                margin: "10px",
                padding: "10px",
              }}
            >
              {p}
            </Typography>
          )}
        </div>
      </div>
    </div>
  );
};
