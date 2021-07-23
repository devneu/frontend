import React, { useState, useEffect, useCallback } from "react";
import "./Navigation.scss";
import "antd/dist/antd.css";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router";
import { Layout, Menu } from "antd";
import { DeploymentUnitOutlined } from "@ant-design/icons";

const { Header } = Layout;

export default function Navigation() {
  const [currentPage, setCurrentPage] = useState("bla");
  const location = useLocation();

  const handleCurrentPageNumber = useCallback(() => {
    switch (location.pathname) {
      case "/":
        setCurrentPage("1");
        break;
      case "/weather":
        setCurrentPage("2");
        break;
      case "/chat":
        setCurrentPage("3");
        break;
      default:
        setCurrentPage("1");
        break;
    }
  });

  useEffect(() => {
    handleCurrentPageNumber();
  }, [handleCurrentPageNumber, currentPage]);

  return (
    <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
      <nav className="Navigation">
        <DeploymentUnitOutlined
          className="Navigation__logo"
          style={{ fontSize: "30px", color: "#ffffff" }}
        />
        <Menu theme="dark" mode="horizontal" selectedKeys={currentPage}>
          <Menu.Item key="1">
            <NavLink to="/">Home</NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink to="/weather">Weather</NavLink>
          </Menu.Item>
          <Menu.Item key="3">
            <NavLink to="/chat">Chat</NavLink>
          </Menu.Item>
        </Menu>
      </nav>
    </Header>
  );
}
