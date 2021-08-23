import React from 'react';
import { Empty, Typography, Anchor } from 'antd';
import 'antd/dist/antd.css';
import './PageNotFound.scss';
import { ArrowLeftOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;
const { Link } = Anchor;

const PageNotFound = () => (
  <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={false} className="page-not-found">
    <Title level={1}>404</Title>
    <Text type="secondary">Page Not Found</Text>
    <br />
    <br />
    <Paragraph>It looks like you found a glitch in the matrix...</Paragraph>
    <div className="link-to-home-page">
      <ArrowLeftOutlined />
      <Anchor>
        <Link href="/" title="Back to Home Page" />
      </Anchor>
    </div>
  </Empty>
);

export default PageNotFound;
