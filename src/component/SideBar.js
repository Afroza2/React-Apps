import { Layout, Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const { Header, Content, Footer, Sider } = Layout;

function SideBar() {
  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="logo" />
        <Menu theme={"dark"} mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to="/overview">Overview</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/ongoing">Ongoing Rides</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/riderlist">Rider List</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/userlist">User List</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/packages">Packages</Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link to="/complains">Complains</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header className="site-layout-background" style={{ padding: 0 }} />
        {/*<Content style={{ margin: "24px 16px 0", overflow: "initial" }}>*/}
        {/*  <div*/}
        {/*    className="site-layout-background"*/}
        {/*    style={{ padding: 24, textAlign: "center" }}*/}
        {/*  >*/}
        {/*    ...*/}
        {/*    <br />*/}
        {/*    Really*/}
        {/*    <br />*/}
        {/*    ...*/}
        {/*    <br />*/}
        {/*    ...*/}
        {/*    <br />*/}
        {/*    ...*/}
        {/*    <br />*/}
        {/*    ...*/}
        {/*    <br />*/}
        {/*    ...*/}
        {/*    <br />*/}
        {/*    ...*/}
        {/*    <br />*/}
        {/*    ...*/}
        {/*    <br />*/}
        {/*    ...*/}
        {/*    <br />*/}
        {/*    ...*/}
        {/*    <br />*/}
        {/*    ...*/}
        {/*    <br />*/}
        {/*    ...*/}
        {/*    <br />*/}
        {/*    ...*/}
        {/*    <br />*/}
        {/*    ...*/}
        {/*    <br />*/}
        {/*    ...*/}
        {/*    <br />*/}
        {/*    ...*/}
        {/*    <br />*/}
        {/*    long*/}
        {/*    <br />*/}
        {/*    ... content*/}
        {/*  </div>*/}
        {/*</Content>*/}
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

export default SideBar;
