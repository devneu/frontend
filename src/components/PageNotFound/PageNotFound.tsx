import React from 'react';
import { Empty, Typography, Button } from 'antd';
import 'antd/dist/antd.css';
import './PageNotFound.scss';
import { ArrowLeftOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const PageNotFound = () => (
  <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={false} className="page-not-found">
    <Title level={1}>404</Title>
    <Text type="secondary">Page Not Found</Text>
    <Paragraph>It looks like you found a glitch in the matrix...</Paragraph>
    <div className="link-to-home-page">
      <Button icon={<ArrowLeftOutlined />} type="link">
        Back to home Page
      </Button>
    </div>
  </Empty>
);

export default PageNotFound;
