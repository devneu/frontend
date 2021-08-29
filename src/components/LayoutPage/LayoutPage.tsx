import { Layout } from 'antd';
import React, { ReactElement } from 'react';

interface LayoutPageProps {
  content: ReactElement;
  sider: ReactElement;
}

const LayoutPage = ({ content, sider }: LayoutPageProps) => (
  <div className="post-page container">
    <Layout className="layout">
      <Layout.Content className="content">{content}</Layout.Content>
      <Layout.Sider className="sidebar" theme="light" width={400}>
        {sider}
      </Layout.Sider>
    </Layout>
  </div>
);

export default LayoutPage;
