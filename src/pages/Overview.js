import { Card, Layout, List } from "antd";
import React from "react";
import SideBar from "../component/SideBar";
const { Content } = Layout;

const rider_data = [
  {
    title: "New Riders",
    count: 52,
  },
  {
    title: "Total Riders",
    count: 2135,
  },
  {
    title: "New Users",
    count: 121,
  },
  {
    title: "Total Users",
    count: 102304,
  },
];

const packages = [
  {
    title: "Package sold in this month",
    count: 2858,
  },
  {
    title: "Income this month",
    count: 879600,
  },
  {
    title: "Lifetime Income",
    count: 5232455,
  },
];

function Overview() {
  return (
    <>
      <SideBar />
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={rider_data}
            renderItem={(item) => (
              <List.Item>
                <Card title={item.title}>{item.count}</Card>
              </List.Item>
            )}
          />
          <List
            grid={{ gutter: 16, column: 3 }}
            dataSource={packages}
            renderItem={(item) => (
              <List.Item>
                <Card title={item.title}>{item.count}</Card>
              </List.Item>
            )}
          />
        </Content>
      </Layout>
    </>
  );
}

export default Overview;
