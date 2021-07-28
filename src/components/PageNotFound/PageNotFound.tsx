import React from "react";
import { Empty, Typography } from "antd";
import "./PageNotFound.scss";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const { Title, Paragraph, Text } = Typography;

const PageNotFound = () => {
  return (
    <Typography>
      <Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description={false}
        className="page-not-found"
      >
        <Title className="title">404</Title>
        <Text className="text">Page Not Found</Text>
        <br />
        <br />
        <Paragraph className="paragraph">
          It looks like you found a glitch in the matrix...
        </Paragraph>
        <NavLink to="/" type="link" className="navLink">
          <ArrowLeftOutlined className="arrow" />
          Back to Home Page
        </NavLink>
      </Empty>
    </Typography>
  );
};

export default PageNotFound;
