import React from "react";
import { Empty } from "antd";
import "./Page404.scss";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const Page404 = () => {
  return (
    <Empty
      image={Empty.PRESENTED_IMAGE_SIMPLE}
      description={false}
      className="page404_container"
      style={{ width: "100%", height: "75vh" }}
    >
      <h1>404</h1>
      <h3>Page Not Found</h3>
      <br />
      <p>It looks like you found a glitch in the matrix...</p>
      <NavLink to="/"
        type="link"
        style={{ fontSize: "1.1rem", fontWeight: "bold", letterSpacing: "1px"}}
      >
        <ArrowLeftOutlined  style={{margin: "0 10px"}}/>
        Back to Home Page
      </NavLink>
    </Empty>
  );
};

export default Page404;
