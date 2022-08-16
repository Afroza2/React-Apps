import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Paper } from "@mui/material";
import axios from "axios";
// import MapOngoing from "../pages/MapOngoing";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import MapOngoing from "../pages/MapOngoing";
const ride_details_url =
  "https://api.holoapp.tech/rides/brta/get-brta-ride-details";

const access = localStorage.getItem("accessToken");
const lat = 23.740566561527984;
const long = 90.37567758347049;

const p = "meow";

export const MarkerList = ({ riders }) => {
  const [markers, setMarkers] = useState([]);
  const [ride_id, setRideId] = useState("");
  const [meow, setMeow] = useState("meow");
  const [center, setCenter] = useState([-0.418837, 44.758777])
  const handleCellClick = async (id) => {
    console.log("after id on click", id);
    setMeow("woof");
    axios
      .get("https://api-adresse.data.gouv.fr/search/?q=paris&type=street")
      .then((res) => {
        console.log(res.data.features[0].geometry);
        console.log("set marker", res.data.features)
          console.log("set center", res.data.features[0].geometry.coordinates)
          console.log("geometry",res.data.features[0].geometry.coordinates[0], res.data.features[0].geometry.coordinates[1] )
        setMarkers(res.data.features);
        setCenter(res.data.features[0].geometry.coordinates)
      });

  };

  return (
    <div
      style={{
        height: 800,
        width: "80%",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <CssBaseline />
      <div
        style={{
          margin: "30px",
          padding: "30px",
        }}
      >
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 400 }} aria-label="simple table">
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
          margin: "30px",
          padding: "30px",
        }}
      >
        <div>
          {ride_id ? (
            //     <ul>{Object.values(markers).map((val,index)=>{
            //     // console.log(val.properties.id)
            //     return <li key={index}>{val.geometry.coordinates[0]}{" "}{val.geometry.coordinates[1]}</li>
            // })}</ul>
            <MapContainer
              zoom={1}
              // center={[-0.418837, 44.758777]}
              center={Object.values(center)}
              style={{ height: "400px", width: "700px" }}
              scrollWheelZoom={false}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              {Object.values(markers).map((m, index) => {
                return (
                  <Marker
                    key={index}
                    position={[
                      m.geometry.coordinates[1],
                      m.geometry.coordinates[0],
                    ]}
                    icon={
                      new Icon({
                        iconUrl: markerIconPng,
                        iconSize: [25, 41],
                        iconAnchor: [12, 41],
                      })
                    }
                  >
                    <Popup>{m.properties.label}</Popup>
                  </Marker>
                );
              })}
            </MapContainer>
          ) : (
            <p>{p}</p>
          )}
        </div>
        {/*<MapContainer*/}
        {/*  zoom={16}*/}
        {/*  center={[-0.418837, 44.758777]}*/}
        {/*  style={{ height: "400px", width: "700px" }}*/}
        {/*  scrollWheelZoom={false}*/}
        {/*>*/}
        {/*  <TileLayer*/}
        {/*    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"*/}
        {/*    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'*/}
        {/*  />*/}
        {/*  {markers.length > 0 &&*/}
        {/*    markers.map((marker, id) => (*/}
        {/*      <Marker*/}
        {/*        key={id}*/}
        {/*        position={[*/}
        {/*          marker.geometry.coordinates[1],*/}
        {/*          marker.geometry.coordinates[0],*/}
        {/*        ]}*/}
        {/*        icon={*/}
        {/*          new Icon({*/}
        {/*            iconUrl: markerIconPng,*/}
        {/*            iconSize: [25, 41],*/}
        {/*            iconAnchor: [12, 41],*/}
        {/*          })*/}
        {/*        }*/}
        {/*      >*/}
        {/*        <Popup>{marker.properties.label}</Popup>*/}
        {/*      </Marker>*/}
        {/*    ))}*/}
        {/*</MapContainer>*/}
      </div>
    </div>
  );
};
