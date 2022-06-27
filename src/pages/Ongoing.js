import React, {useState} from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Layout, Input, Space } from "antd";
import SideBar from "../component/SideBar";

import "leaflet/dist/leaflet.css";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const { Content } = Layout;

const { Search } = Input;


const onSearch = value => console.log(value);

const pathIcon = L.icon({
  iconUrl: '../public/map-icons/path.png',

  iconSize: [20, 20], // size of the icon
});
const startIcon = L.icon({
  iconUrl: '../public/map-icons/man.png',

  iconSize: [30, 35], // size of the icon
});
const endIcon = L.icon({
  iconUrl: '../public/map-icons/placeholder.png',

  iconSize: [25, 25], // size of the icon
});

// let DefaultIcon = L.icon({
//   iconUrl: icon,
//   shadowUrl: iconShadow,
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
// });
//
// L.Marker.prototype.options.icon = DefaultIcon;

const center_lat = 23.740566561527984;
const center_long = 90.37567758347049;

const startP = 0;
const endP = 0;

const startR = 0;
const endR = 0;



function Ongoing() {

  const data = [
  {
    position: { lat: 23.73861524857593, long: 90.37859276390634},
    title: "Passenger",
    iconName: "man.png",
  },
  {
    position: { lat: 23.756337559874982, long: 90.37540465834333 },
    title: "Rider",
    iconName: "location.png",
  },
];

  return (
    <>
      <SideBar />
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>


          <Space direction="vertical">
            <Search placeholder="Search Phone Number"  onSearch={onSearch} style={{ width: 400 }} />

          </Space>

          <MapContainer
            center={[center_lat, center_long]}
            zoom={16}
            scrollWheelZoom={false}
            style={{ height: "500px" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />


            {/*// <Marker position={[lat, long]}>*/}
            {/*//   <Popup>Holo</Popup>*/}
            {/*// </Marker>*/}
          </MapContainer>
        </Content>
      </Layout>
    </>
  );
}

export default Ongoing;
