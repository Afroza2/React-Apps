import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Layout } from "antd";
import SideBar from "../component/SideBar";
const { Content } = Layout;


function Ongoing() {
  return (
    <>
      <SideBar />
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
      <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>

      <MapContainer center={[51.505, -0.09]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer></Content></Layout>
    </>
  );
}

export default Ongoing;
