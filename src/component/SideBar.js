// import { Layout, Menu } from "antd";
// import React from "react";
// import { Link } from "react-router-dom";
// import "../App.css";
//
// const { Header, Content, Footer, Sider } = Layout;
//
// function SideBar() {
//   return (
//     <Layout hasSider>
//       <Sider
//         style={{
//           overflow: "auto",
//           height: "100vh",
//           position: "fixed",
//           left: 0,
//           top: 0,
//           bottom: 0,
//         }}
//       >
//         <div className="logo" />
//         <Menu theme={"dark"} mode="inline">
//           <Menu.Item key="1">
//             <Link to="/overview">Overview</Link>
//           </Menu.Item>
//           <Menu.Item key="2">
//             <Link to="/ongoing">MapOngoing Rides</Link>
//           </Menu.Item>
//           <Menu.Item key="3">
//             <Link to="/riderlist">Rider List</Link>
//           </Menu.Item>
//           <Menu.Item key="4">
//             <Link to="/userlist">User List</Link>
//           </Menu.Item>
//           <Menu.Item key="5">
//             <Link to="/packages">Packages</Link>
//           </Menu.Item>
//           <Menu.Item key="6">
//             <Link to="/complains">Complains</Link>
//           </Menu.Item>
//         </Menu>
//       </Sider>
//       <Layout className="site-layout" style={{ marginLeft: 200 }}>
//         {/*<Header className="site-layout-background" style={{ padding: 0 }} />*/}
//         {/*<Content style={{ margin: "24px 16px 0", overflow: "initial" }}>*/}
//         {/*  <div*/}
//         {/*    className="site-layout-background"*/}
//         {/*    style={{ padding: 24, textAlign: "center" }}*/}
//         {/*  >*/}
//         {/*    ...*/}
//         {/*    <br />*/}
//         {/*    Really*/}
//         {/*    <br />*/}
//         {/*    ...*/}
//         {/*    <br />*/}
//         {/*    ...*/}
//         {/*    <br />*/}
//         {/*    ...*/}
//         {/*    <br />*/}
//         {/*    ...*/}
//         {/*    <br />*/}
//         {/*    ...*/}
//         {/*    <br />*/}
//         {/*    ...*/}
//         {/*    <br />*/}
//         {/*    ...*/}
//         {/*    <br />*/}
//         {/*    ...*/}
//         {/*    <br />*/}
//         {/*    ...*/}
//         {/*    <br />*/}
//         {/*    ...*/}
//         {/*    <br />*/}
//         {/*    ...*/}
//         {/*    <br />*/}
//         {/*    ...*/}
//         {/*    <br />*/}
//         {/*    ...*/}
//         {/*    <br />*/}
//         {/*    ...*/}
//         {/*    <br />*/}
//         {/*    ...*/}
//         {/*    <br />*/}
//         {/*    long*/}
//         {/*    <br />*/}
//         {/*    ... content*/}
//         {/*  </div>*/}
//         {/*</Content>*/}
//         {/*<Footer style={{ textAlign: "center" }}>*/}
//         {/*  Ant Design ©2018 Created by Ant UED*/}
//         {/*</Footer>*/}
//       </Layout>
//     </Layout>
//   );
// }
//
// export default SideBar;

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import { Link } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const drawerWidth = 150;

export default function SideBar() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar></Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <Link to="/ongoing">
                <ListItemText primary="MapOngoing" style={{ color: '#000' }}/>
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <Link to="/completed">
                <ListItemText primary="Overview" style={{ color: '#000' }}/>
              </Link>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}
