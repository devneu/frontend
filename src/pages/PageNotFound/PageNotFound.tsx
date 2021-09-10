import React from 'react';
import { Empty, Typography, Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const PageNotFound = () => (
  <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={false}>
    <Title level={1}>404</Title>
    <Text type="secondary">Page Not Found</Text>
    <Paragraph>It looks like you found a glitch in the matrix...</Paragraph>
    <Button type="link" href="/" icon={<ArrowLeftOutlined />}>
      Back to home Page
    </Button>
  </Empty>
);

export default PageNotFound;
