import React from "react";
import "./Navigation.scss";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router";
import { Layout, Menu } from "antd";
import { DeploymentUnitOutlined } from "@ant-design/icons";

const { Header } = Layout;

export default function Navigation() {
  const location = useLocation();

  return (
    <Header style={{ zIndex: 1, width: "100%" }}>
      <nav className="navigation">
        <DeploymentUnitOutlined
          className="navigation-logo"
          style={{ fontSize: "30px", color: "#ffffff" }}
        />
        <Menu theme="dark" mode="horizontal" selectedKeys={location.pathname}>
          <Menu.Item key="/">
            <NavLink to="/">Home</NavLink>
          </Menu.Item>
          <Menu.Item key="/weather">
            <NavLink to="/weather">Weather</NavLink>
          </Menu.Item>
          <Menu.Item key="/chat">
            <NavLink to="/chat">Chat</NavLink>
          </Menu.Item>
          <Menu.Item key="/signIn">
            <NavLink to="/signIn">Sign In</NavLink>
          </Menu.Item>
          <Menu.Item key="/redux">
            <NavLink to="/redux">Redux</NavLink>
          </Menu.Item>
        </Menu>
      </nav>
    </Header>
  );
}
